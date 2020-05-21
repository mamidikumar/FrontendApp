import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { NotifyMessageService } from './NotifyMessageService';
import { ILoginDetails } from '../InterfaceList/ILoginDetails';
import { ITokenDetails } from '../InterfaceList/ITokenDetails';
import { TokenService } from './Token.service';


@Injectable()
export class ProductService {

    getDataFromRestAPI: any = 'http://localhost:5000/api/GlobalConfiguation';
    getTokenFromRestAPI: any = 'http://localhost:5000/api/User';

    //getDataFromRestAPI: any = 'http://10.83.36.247:5100/api/GlobalConfiguation';
    IndivisualPageConfigDetails: any;
    
    token : any;
    
    UpdateToken(_token:any)
    {
        this.token =_token;

    }

    private adminStateSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    IsAdmin = this.adminStateSubject.asObservable();
    setAdminState = (value: boolean) => {
        this.adminStateSubject.next(value);
    }

    private SpecialStateSubject: BehaviorSubject<boolean> = new BehaviorSubject(false);
    IsSpecial = this.SpecialStateSubject.asObservable();
    setSpecialState = (value: boolean) => {
        this.SpecialStateSubject.next(value);
    }

    constructor(private _http: HttpClient, private _notifyMessageService: NotifyMessageService,
        private _TokenDetails:TokenService) {
            this.token = _TokenDetails.getOption();
        this._notifyMessageService.listen().subscribe((m: any) => {
            console.log(m);
            this.ReceiveService(m);
        })
    }
    ReceiveService(status) {
        this.IndivisualPageConfigDetails = this.getDataFromRestAPI + "/" + encodeURIComponent(status);
    }

    getProducts(): Observable<any> {
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json',
            'Authorization': "bearer "+this.token
            })
          };
        return this._http.get<any>(this.getDataFromRestAPI,httpOptions)
            .do(data => console.log("All" + JSON.stringify(data)))
            .catch(this.handleError);
    }

    handleError(err: HttpErrorResponse) {
        console.log(err.message);
        return Observable.throw(err.message);
    }

    getProductListForLoop(): Observable<any> {
        return this._http.get<any>(this.IndivisualPageConfigDetails).do(data => console.log("All " + JSON.stringify(data)));
    }

    getProductList(): Observable<any> {
        //console.log(this.productsList)
        const httpOptions = {
            headers: new HttpHeaders({'Content-Type': 'application/json',
            'Authorization': this.token
            })
          };
        return this._http.get<any>(this.IndivisualPageConfigDetails,httpOptions)
            .do(data => console.log("All " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    setProductList(strjon: string): Observable<any> {
        var strjon = strjon.toString();
        const params = new HttpParams().set('valData', strjon);
        return this._http.put(this.IndivisualPageConfigDetails, {}, { params })
    }
    factorySettings(): Observable<any> {
        return this._http.delete<any>(this.getDataFromRestAPI)
            .do(data => console.log("All " + JSON.stringify(data)))
            .catch(this.handleError);
    }
    login(uid:string,pwd:string):Observable<any>{
        var user = new ILoginDetails();
        user.userName=uid;
        user.passWord=pwd;
        return this._http.post<ILoginDetails>(this.getTokenFromRestAPI,user)
    }




}