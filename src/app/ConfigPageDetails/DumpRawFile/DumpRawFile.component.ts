import { Component, OnInit, OnChanges, EventEmitter, Output, Input, ViewChild } from '@angular/core';
import { ProductService } from '../../Services/Product.Service';
import { IDumpFile } from '../../InterfaceList/IDumpFile';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { DumpFileName } from 'src/app/Services/EnumFiles';



@Component({
  selector: 'DumpFile',
  templateUrl: './DumpRawFile.component.html',
  styleUrls: ['./DumpRawFile.component.css']
})


export class DumpRawFileComponent implements OnInit {
  loginfg: FormGroup;
  PageTitle = 'DumpRawFile';
  dumpRawFile: IDumpFile;
  errorMessage: string;
  NewDumpRawFile: IDumpFile;
  IsAdmin: boolean;
  IsSec: boolean;
  @ViewChild('DumpRawFileComponent', { static: false }) DumpRawFileComponent: DumpRawFileComponent;

  fileNameList = Object.values(DumpFileName);

  constructor(private myProductList: ProductService, private _router: Router) {
    this.dumpRawFile = new IDumpFile;
    this.NewDumpRawFile = new IDumpFile;
  }
  ngOnInit() {
    this.myProductList.IsAdmin.subscribe((AdminState) => {
      this.IsAdmin = AdminState;
    });

    this.myProductList.IsSpecial.subscribe((specialState) => {
      this.IsSec = specialState;
    });

    this.myProductList.getProductList()
      .subscribe(data => {
        this.dumpRawFile = data;
        this.NewDumpRawFile.copyContent(data);
      },
        error => this.errorMessage = error);

  }
  SaveContent() {

    if (!this.NewDumpRawFile.checkStatus()) {
      alert("content is missing");
      return;
    }
    var strjon = JSON.stringify(this.NewDumpRawFile);
    this.myProductList.setProductList(strjon)
      .subscribe((res:any) =>{
        console.log(res);
        alert("Save is done");
        this._router.navigate(['home']);
      },err=>{
        
        
        alert("error : "+err.status +" => "+err.statusText );
        

      });
      
      
   
  }
  CancelContent() {
    this._router.navigate(['home']);
  }






}

