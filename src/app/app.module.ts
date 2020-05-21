import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule, Rooter } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotifyMessageService } from './Services/NotifyMessageService';
import { ProductService } from './Services/Product.Service';
import { HomeLoginPageComponent } from './LoginPage/Login-Page.component';
import { DumpRawFileComponent } from './ConfigPageDetails/DumpRawFile/DumpRawFile.component';
import { WaveformPresentationConfigComponent } from './ConfigPageDetails/waveform-presentation-config/waveform-presentation-config.component';
import { ArtisMonitorConfigComponent } from './ConfigPageDetails/artis-monitor-config/artis-monitor-config.component';
import { SignalGroupsComponent } from './ConfigPageDetails/signal-groups/signal-groups.component';
import { SimulatorConfigComponent } from './ConfigPageDetails/simulator-config/simulator-config.component';
import { HiSIBInterfaceConfigComponent } from './ConfigPageDetails/hi-sib-interface-config/hi-sib-interface-config.component';
import { StateManagerConfigComponent } from './ConfigPageDetails/state-manager-config/state-manager-config.component';
import { FilterConfigComponent } from './ConfigPageDetails/filter-config/filter-config.component';
import { NIBPConfigComponent } from './ConfigPageDetails/nibp-config/nibp-config.component';
import { StatusBarConfigComponent } from './ConfigPageDetails/status-bar-config/status-bar-config.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { RoutingGaurdServiceService } from './Services/routing-gaurd-service.service';
import { ITokenDetails } from './InterfaceList/ITokenDetails';
import { TokenService } from './Services/Token.service';


@NgModule({
  declarations: [
    AppComponent,
    Rooter,
    HomeLoginPageComponent,
    DumpRawFileComponent,
    WaveformPresentationConfigComponent,
    ArtisMonitorConfigComponent,
    SignalGroupsComponent,
    SimulatorConfigComponent,
    HiSIBInterfaceConfigComponent,
    StateManagerConfigComponent,
    FilterConfigComponent,
    NIBPConfigComponent,
    StatusBarConfigComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ColorPickerModule,
    AppRoutingModule
  ],
  providers: [NotifyMessageService, ProductService, RoutingGaurdServiceService,TokenService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
