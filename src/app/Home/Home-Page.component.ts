import { Component } from '@angular/core';
import { ProductService } from '../Services/Product.Service';
import { NotifyMessageService } from '../Services/NotifyMessageService';
import { Router } from '@angular/router';


@Component({
    selector: `Home-page`,
    templateUrl: `Home-Page.component.html`,
    styleUrls: ['Home-Page.component.css']
})

export class HomePageComponent {
    listOfHomePageConfigurations;
    errorMessage: string;
    selectedTabForComponent: string
    IsAdmin: boolean;

    constructor(private myListOfHomePage: ProductService, private _notifyMessageService: NotifyMessageService, 
        private _router: Router) {
    }

    ngOnInit(): void {

        
        this.myListOfHomePage.IsAdmin.subscribe((AdminState) => {
            this.IsAdmin = AdminState;
        });
        this.myListOfHomePage.getProducts()
            .subscribe(data => { 
                alert("Content is got it");
                this.listOfHomePageConfigurations = data;
             },err=>{
        
        
                    alert("error : "+err.status +" => "+err.statusText +" => "+err);
                    this.errorMessage = err;
                    
            
                  });
    }
    selectedTab(seletedButton) {
        this.selectedTabForComponent = seletedButton;
        this._notifyMessageService.filter(this.selectedTabForComponent);
        this._router.navigate([this.selectedTabForComponent]);
    }
    getFactorySettings() {
        this.myListOfHomePage.factorySettings()
            .subscribe();
        setTimeout(() => { window.location.reload(); }, 1000);
        this._router.navigate(['./login']);
    }
}