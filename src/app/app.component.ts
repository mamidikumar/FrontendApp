import { Component, ViewChild, Input } from '@angular/core';
import { NotifyMessageService } from './Services/NotifyMessageService';
import { ProductService } from './Services/Product.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: ['./app.component.css'],
  providers: [ProductService]
})
export class AppComponent {
  @ViewChild("AppComponent", { static: false }) AppComponent: AppComponent;
  errorMessage: string;
  PageTitle: string = "Guest";
  LoginDialogStatus: boolean;

  constructor(private _messageService: NotifyMessageService, private _router: Router) {
    this._messageService.listenStatus().subscribe((m: any) => {
      console.log(m);
      this.ReceiveService(m);
    })
  }
  ReceiveService(status) {
    this.LoginDialogStatus = status;
  }
  closeWindow() {
    this.LoginDialogStatus = false;
    this._router.navigate(['./login']);
  }
  loginWindow() {
    this._router.navigate(['./login']);
  }
  getUserData(messageToEmit) {
    this.PageTitle = messageToEmit;
  }

}
