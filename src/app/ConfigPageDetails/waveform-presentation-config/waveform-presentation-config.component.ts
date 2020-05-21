import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductService } from '../../Services/Product.Service';
import { Router } from '@angular/router';
import { IWaveformPresentationConfig } from '../../InterfaceList/IWaveformPresentationConfig';


@Component({
  selector: 'waveform-presentation-config',
  templateUrl: './waveform-presentation-config.component.html',
  styleUrls: ['./waveform-presentation-config.component.css']
})
export class WaveformPresentationConfigComponent implements OnInit {
  pageTitle = 'Waveform Presentation Configuration';
  WaveformPresentationConfig: IWaveformPresentationConfig;
  errorMessage: string;
  NewWaveformPresentationConfig: IWaveformPresentationConfig;
  IsAdmin: boolean;
  IsSec: boolean;
  @ViewChild('WaveformPresentationConfigComponent', { static: false }) WaveformPresentationConfigComponent: WaveformPresentationConfigComponent;


  constructor(private _myProductList: ProductService, private _router: Router) {
    this.WaveformPresentationConfig = new IWaveformPresentationConfig;
    this.NewWaveformPresentationConfig = new IWaveformPresentationConfig;
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
        this.WaveformPresentationConfig = data;
        this.NewWaveformPresentationConfig.copyContent(data);
      },
        error => this.errorMessage = error);
  }
  SaveContent() {
    if (!this.NewWaveformPresentationConfig.checkStatus()) {
      alert("content is missing");
      return;
    }
    var strjon = JSON.stringify(this.NewWaveformPresentationConfig);
    this._myProductList.setProductList(strjon)
      .subscribe();
    this._router.navigate(['home']);
  }
  CancelContent() {
    this._router.navigate(['home']);
  }

}
