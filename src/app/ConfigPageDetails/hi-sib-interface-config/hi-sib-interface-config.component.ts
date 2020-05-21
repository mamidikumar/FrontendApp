import { Component, OnInit, ViewChild } from '@angular/core';
import { IHiSIBInterfaceConfig } from 'src/app/InterfaceList/IHiSIBInterfaceConfig';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product.Service';

@Component({
  selector: 'app-hi-sib-interface-config',
  templateUrl: './hi-sib-interface-config.component.html',
  styleUrls: ['./hi-sib-interface-config.component.css']
})
export class HiSIBInterfaceConfigComponent implements OnInit {
  pageTitle = 'HiSIB Interface Configuration';
  HiSIBInterfaceConfig: IHiSIBInterfaceConfig;
  errorMessage: string;
  NewHiSIBInterfaceConfig: IHiSIBInterfaceConfig;
  IsAdmin: boolean;
  IsSec: boolean;
  @ViewChild(HiSIBInterfaceConfigComponent, { static: false }) HiSIBInterfaceConfigComponent: HiSIBInterfaceConfigComponent;

  constructor(private _myProductList: ProductService, private _router: Router) {
    this.HiSIBInterfaceConfig = new IHiSIBInterfaceConfig;
    this.NewHiSIBInterfaceConfig = new IHiSIBInterfaceConfig;
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
        this.HiSIBInterfaceConfig = data;
        this.NewHiSIBInterfaceConfig.copyContent(data);
      },
        error => this.errorMessage = error);
  }

  SaveContent() {
    if (!this.NewHiSIBInterfaceConfig.checkStatus()) {
      alert("content is missing");
      return;
    }
    var strjon = JSON.stringify(this.NewHiSIBInterfaceConfig);
    this._myProductList.setProductList(strjon)
      .subscribe();
    this._router.navigate(['home']);
  }
  CancelContent() {
    this._router.navigate(['home']);
  }

}
