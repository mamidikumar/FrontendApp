import { Component, OnInit, ViewChild } from '@angular/core';
import { IStateManagerConfig } from 'src/app/InterfaceList/IStateManagerConfig';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product.Service';

@Component({
  selector: 'app-state-manager-config',
  templateUrl: './state-manager-config.component.html',
  styleUrls: ['./state-manager-config.component.css']
})
export class StateManagerConfigComponent implements OnInit {
  pageTitle = 'State Manager Configuration';
  StateManagerConfig: IStateManagerConfig;
  errorMessage: string;
  NewStateManagerConfig: IStateManagerConfig;
  IsAdmin: boolean;
  IsSec: boolean;
  @ViewChild(StateManagerConfigComponent, { static: false }) StateManagerConfigComponent: StateManagerConfigComponent;
  constructor(private _myProductList: ProductService, private _router: Router) {
    this.StateManagerConfig = new IStateManagerConfig;
    this.NewStateManagerConfig = new IStateManagerConfig;
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
        this.StateManagerConfig = data;
        this.NewStateManagerConfig.copyContent(data);
      },
        error => this.errorMessage = error);
  }
  SaveContent() {
    if (!this.NewStateManagerConfig.checkStatus()) {
      alert("content is missing");
      return;
    }
    var strjon = JSON.stringify(this.NewStateManagerConfig);
    this._myProductList.setProductList(strjon)
      .subscribe();
    this._router.navigate(['home']);

  }
  CancelContent() {
    this._router.navigate(['home']);
  }


}
