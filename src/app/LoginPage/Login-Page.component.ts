import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { NotifyMessageService } from '../Services/NotifyMessageService';
import { Router } from '@angular/router';
import { ProductService } from '../Services/Product.Service';
import { ITokenDetails } from '../InterfaceList/ITokenDetails';
import { TokenService } from '../Services/Token.service';


@Component({
  selector: 'app-LoginPage',
  templateUrl: './Login-Page.component.html',
  styleUrls: ['./Login-Page.component.css']
})
export class HomeLoginPageComponent {

  @ViewChild('HomeLoginPageComponent', { static: false }) HomeLoginPageComponent: HomeLoginPageComponent;
  pageTitle: string = "Sensis Configuration";
  username: string;
  password: string;
  LogInSuccess: boolean = false;
  TokenDetails: ITokenDetails;
  @Output() getUserData: EventEmitter<any>;

  constructor(private _messageService: NotifyMessageService, private _router: Router, private myProductService: ProductService, private _TokenService: TokenService) {
    this.getUserData = new EventEmitter<any>();
    this.TokenDetails=new ITokenDetails();
  }

  Submit(): void {   
    this.myProductService.login(this.username,this.password)
      .subscribe((res:any) =>{
          alert(" done");
        this.TokenDetails = res;
        this._TokenService = res;
        this.myProductService.UpdateToken(this._TokenService.token);
        this.myProductService.setAdminState(true);
        this.getUserData.emit("Admin");
        this.LogInSuccess = true;
        this._messageService.filterStatus(this.LogInSuccess);
        this._router.navigate(['./home']);
      },err=>{
        
        
        alert("error : "+err.status +" => "+err.statusText );
        

      });
      /*

    if (this.username === "Admin" && this.password === "Admin") {
      this.myProductService.setAdminState(true);
      this.getUserData.emit("Admin");
      this.LogInSuccess = true;
      //this._messageService.filter(this.LogInSuccess.valueOf.toString());
      this._messageService.filterStatus(this.LogInSuccess);
      this._router.navigate(['./home']);

    } else if (this.username === "Secure" && this.password === "Secure") {
      this.myProductService.setSpecialState(true);
      this.getUserData.emit("Secure");
      this.LogInSuccess = true;
      this._messageService.filterStatus(this.LogInSuccess);
      this._router.navigate(['./home']);
    }
    else if((this.username === "pass" && this.password === "pass")){
      this.LogInSuccess = true;
      this._messageService.filterStatus(this.LogInSuccess);
      this._router.navigate(['./home']);
    }
    */
  }

}

