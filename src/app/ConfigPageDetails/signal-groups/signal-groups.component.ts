import { Component, OnInit, ViewChild } from '@angular/core';
import { NotifyMessageService } from 'src/app/Services/NotifyMessageService';
import { ProductService } from 'src/app/Services/Product.Service';
import { ISignalGroups } from 'src/app/InterfaceList/ISignalGroups';
import { Router } from '@angular/router';
import * as cloneDeep from 'lodash/cloneDeep';
import { SignalGroupSensitivity } from 'src/app/Services/EnumFiles';



@Component({
  selector: 'app-signal-groups',
  templateUrl: './signal-groups.component.html',
  styleUrls: ['./signal-groups.component.css']
})
export class SignalGroupsComponent implements OnInit {
  pageTitle = 'SignalGroups';
  SignalGroups: Array<ISignalGroups> = [];
  NewSignalGroups: Array<ISignalGroups> = [];
  errorMessage: string;
  selected: number;
  Selectedbutton: boolean = false;
  selectedTab: Number;
  IsAdmin: boolean;
  IsSec: boolean;
  @ViewChild('SignalGroupsComponent', { static: false }) SignalGroupsComponent: SignalGroupsComponent;
  SensitivitySignalGroup = Object.values(SignalGroupSensitivity);

  constructor(private _NotifMessage: NotifyMessageService, private myProductService: ProductService, private _router: Router) {
  }

  ngOnInit() {
    this.myProductService.IsAdmin.subscribe((AdminState) => {
      this.IsAdmin = AdminState;
    });

    this.myProductService.IsSpecial.subscribe((specialState) => {
      this.IsSec = specialState;
    });

    this.myProductService.getProductListForLoop()
      .subscribe(data => {
        this.SignalGroups = data
        this.NewSignalGroups = cloneDeep(data);
      },
        error => this.errorMessage = error);
  }

  SaveContent() {
    var strjon = JSON.stringify(this.NewSignalGroups);
    this.myProductService.setProductList(strjon)
      .subscribe();
    this._router.navigate(['home']);
  }

  selectedListType(event, seletedButton) {
    this.Selectedbutton = true;
    this.selected = seletedButton;
    this.selectedTab = seletedButton;

  }
  CancelContent() {
    this._router.navigate(['home']);
  }

}
