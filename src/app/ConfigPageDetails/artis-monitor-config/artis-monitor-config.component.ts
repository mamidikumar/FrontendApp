import { Component, OnInit, ViewChild } from '@angular/core';
import { IArtisMonitorConfig } from 'src/app/InterfaceList/IArtisMonitorConfig';
import { ProductService } from 'src/app/Services/Product.Service';
import { Router } from '@angular/router';

@Component({
  selector: 'artis-monitor-config',
  templateUrl: './artis-monitor-config.component.html',
  styleUrls: ['./artis-monitor-config.component.css']
})
export class ArtisMonitorConfigComponent implements OnInit {
  pageTitle='Artis Monitor Configuration';
  @ViewChild(ArtisMonitorConfigComponent,{static:false}) ArtisMonitorConfigComponent:ArtisMonitorConfigComponent;
  ArtisMonitorConfig: IArtisMonitorConfig;
  errorMessage : string;
  NewArtisMonitorConfig: IArtisMonitorConfig;
  IsAdmin:boolean;
  IsSec:boolean;

  constructor(private _myProductList: ProductService, private _router: Router) { 
    this.ArtisMonitorConfig = new IArtisMonitorConfig;
    this.NewArtisMonitorConfig = new IArtisMonitorConfig;
  }

  ngOnInit() {
    this._myProductList.IsAdmin.subscribe((AdminState) => {
      this.IsAdmin = AdminState;
      });

    this._myProductList.IsSpecial.subscribe((specialState) => {
        this.IsSec = specialState;
        });
    this._myProductList.getProductList()     
    .subscribe(data =>{
       this.ArtisMonitorConfig = data;
       this.NewArtisMonitorConfig.copyContent(data);
    },
    error => this.errorMessage = error);   
  }
  SaveContent()
  {
    if(!this.NewArtisMonitorConfig.checkStatus())
    {
      alert("content is missing");
      return;
    }
    var strjon = JSON.stringify(this.NewArtisMonitorConfig);
    this._myProductList.setProductList(strjon)
    .subscribe();  
    this._router.navigate(['home']);    
  }
  CancelContent()
  {
    this._router.navigate(['home']);
  }

}
