import { Component, OnInit, ViewChild } from '@angular/core';
import { INIBPConfig } from 'src/app/InterfaceList/INIBPConfig';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product.Service';

@Component({
  selector: 'app-nibp-config',
  templateUrl: './nibp-config.component.html',
  styleUrls: ['./nibp-config.component.css']
})
export class NIBPConfigComponent implements OnInit {
  pageTitle = 'NIBP Configuration';
  NIBPConfig: INIBPConfig;
  errorMessage: string;
  NewNIBPConfig: INIBPConfig;
  IsAdmin: boolean;
  IsSec: boolean;
  @ViewChild(NIBPConfigComponent, { static: false }) NIBPConfigComponent: NIBPConfigComponent;

  constructor(private _myProductList: ProductService, private _router: Router) {
    this.NIBPConfig = new INIBPConfig;
    this.NewNIBPConfig = new INIBPConfig
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
        this.NIBPConfig = data;
        this.NewNIBPConfig.copyContent(data);
      },
        error => this.errorMessage = error);
  }
  SaveContent() {
    if (!this.NewNIBPConfig.checkStatus()) {
      alert("content is missing");
      return;
    }
    var strjon = JSON.stringify(this.NewNIBPConfig);
    this._myProductList.setProductList(strjon)
      .subscribe();
    this._router.navigate(['home']);
  }
  CancelContent() {
    this._router.navigate(['home']);
  }

}
