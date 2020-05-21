import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/Services/Product.Service';
import { IFilterConfig } from 'src/app/InterfaceList/IFilterConfig';
import { FilterConfigurationLowPass, FilterConfigurationHighPass } from 'src/app/Services/EnumFiles';

@Component({
  selector: 'app-filter-config',
  templateUrl: './filter-config.component.html',
  styleUrls: ['./filter-config.component.css']
})
export class FilterConfigComponent implements OnInit {
  pageTitle = 'Filter Configuration';
  FilterConfig: IFilterConfig;
  errorMessage: string;
  NewFilterConfig: IFilterConfig;
  IsAdmin: boolean;
  IsSec: boolean;

  @ViewChild('FilterConfigComponent', { static: false }) FilterConfigComponent: FilterConfigComponent
  LowPass = Object.values(FilterConfigurationLowPass);
  HighPass = Object.values(FilterConfigurationHighPass);

  constructor(private _myProductList: ProductService, private _router: Router) {
    this.FilterConfig = new IFilterConfig;
    this.NewFilterConfig = new IFilterConfig;
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
        this.FilterConfig = data;
        this.NewFilterConfig.copyContent(data);
      },
        error => this.errorMessage = error);
  }
  SaveContent() {
    if (!this.NewFilterConfig.checkStatus()) {
      alert("content is missing");
      return;
    }
    var strjon = JSON.stringify(this.NewFilterConfig);
    this._myProductList.setProductList(strjon)
      .subscribe();
    this._router.navigate(['home']);
  }
  CancelContent() {
    this._router.navigate(['home']);
  }

}
