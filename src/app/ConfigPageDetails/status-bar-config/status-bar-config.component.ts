import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product.Service';
import { IStatusBarConfig } from 'src/app/InterfaceList/IStatusBarConfig';

@Component({
  selector: 'app-status-bar-config',
  templateUrl: './status-bar-config.component.html',
  styleUrls: ['./status-bar-config.component.css']
})
export class StatusBarConfigComponent implements OnInit {
  pageTitle = 'StatusBar Configuration';
  StatusBarConfig: IStatusBarConfig;
  errorMessage: string;
  NewStatusBarConfig: IStatusBarConfig;
  IsAdmin: boolean;
  IsSec: boolean
  @ViewChild('StatusBarConfigComponent', { static: false }) StatusBarConfigComponent: StatusBarConfigComponent;

  constructor(private _myProductList: ProductService, private _router: Router) {
    this.StatusBarConfig = new IStatusBarConfig;
    this.NewStatusBarConfig = new IStatusBarConfig;
  }

  ngOnInit() {
    this._myProductList.IsAdmin.subscribe((AdminState) => {
      this.IsAdmin = AdminState;
    });

    this._myProductList.IsSpecial.subscribe((specialState) => {
      this.IsSec = specialState;
    });
    this._myProductList.getProductList()
      .subscribe(data => {
        this.StatusBarConfig = data;
        this.NewStatusBarConfig.copyContent(data);
      },
        error => this.errorMessage = error);
  }
  SaveContent() {
    if (!this.NewStatusBarConfig.checkStatus()) {
      alert("content is missing");
      return;
    }
    var strjon = JSON.stringify(this.NewStatusBarConfig);
    this._myProductList.setProductList(strjon)
      .subscribe();
    this._router.navigate(['home']);
  }
  CancelContent() {
    this._router.navigate(['home']);
  }

}
