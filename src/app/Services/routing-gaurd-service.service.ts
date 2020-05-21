import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { NotifyMessageService } from './NotifyMessageService';

@Injectable()
export class RoutingGaurdServiceService implements CanActivate{
  LoggedInSuccess:boolean;
  constructor(private _router:Router, private _messageService:NotifyMessageService) {
    this._messageService.listenStatus().subscribe((m: any) => {
      console.log("Ramesh"+m);
      this.ReceiveStatus(m);    
    })
   }
   ReceiveStatus(loginstatus){
     console.log("Ramesh"+loginstatus);
      this.LoggedInSuccess=loginstatus;
   }

  canActivate():boolean{
    if(this.LoggedInSuccess){
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
