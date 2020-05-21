import { Component, OnInit, ViewChild } from '@angular/core';
import { ISimulatorConfig } from 'src/app/InterfaceList/ISimulatorConfig';
import { ProductService } from 'src/app/Services/Product.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulator-config',
  templateUrl: './simulator-config.component.html',
  styleUrls: ['./simulator-config.component.css']
})
export class SimulatorConfigComponent implements OnInit {
  pageTitle = 'Simulator Configuration';
  SimulatorConfig: ISimulatorConfig;
  errorMessage: string;
  NewSimulatorConfig: ISimulatorConfig;
  IsAdmin: boolean;
  IsSec: boolean;
  @ViewChild(SimulatorConfigComponent, { static: false }) SimulatorConfigComponent: SimulatorConfigComponent;
  constructor(private _myProductList: ProductService, private _router: Router) {
    this.SimulatorConfig = new ISimulatorConfig;
    this.NewSimulatorConfig = new ISimulatorConfig;
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
        this.SimulatorConfig = data;
        this.NewSimulatorConfig.copyContent(data);
      },
        error => this.errorMessage = error);
  }

  SaveContent() {
    if (!this.NewSimulatorConfig.checkStatus()) {
      alert("content is missing");
      return;
    }
    var strjon = JSON.stringify(this.NewSimulatorConfig);
    this._myProductList.setProductList(strjon)
      .subscribe();
    this._router.navigate(['home']);
  }
  CancelContent() {
    this._router.navigate(['home']);
  }

}
