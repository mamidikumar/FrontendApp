import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Observable } from 'rxjs';
import { ITokenDetails } from '../InterfaceList/ITokenDetails';

@Injectable()
export class NotifyMessageService {
    private _Listers = new Subject<string>();
    private _status = new Subject<boolean>();
        
    listen(): Observable<string> {
        return this._Listers.asObservable();
    }

    filter(filterBy: string ) {
        this._Listers.next(filterBy);
    }

    listenStatus():Observable<boolean>{
        return this._status.asObservable();
    }
    filterStatus(filterBy:boolean)
    {
        this._status.next(filterBy);
    }

   

}