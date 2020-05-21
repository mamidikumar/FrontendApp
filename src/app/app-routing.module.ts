import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeLoginPageComponent } from './LoginPage/Login-Page.component';
import { HomePageComponent } from './Home/Home-Page.component';
import { DumpRawFileComponent } from './ConfigPageDetails/DumpRawFile/DumpRawFile.component';
import { WaveformPresentationConfigComponent } from './ConfigPageDetails/waveform-presentation-config/waveform-presentation-config.component';
import { ArtisMonitorConfigComponent } from './ConfigPageDetails/artis-monitor-config/artis-monitor-config.component';
import { FilterConfigComponent } from './ConfigPageDetails/filter-config/filter-config.component';
import { SimulatorConfigComponent } from './ConfigPageDetails/simulator-config/simulator-config.component';
import { StateManagerConfigComponent } from './ConfigPageDetails/state-manager-config/state-manager-config.component';
import { NIBPConfigComponent } from './ConfigPageDetails/nibp-config/nibp-config.component';
import { StatusBarConfigComponent } from './ConfigPageDetails/status-bar-config/status-bar-config.component';
import { SignalGroupsComponent } from './ConfigPageDetails/signal-groups/signal-groups.component';
import { HiSIBInterfaceConfigComponent } from './ConfigPageDetails/hi-sib-interface-config/hi-sib-interface-config.component';
import { RoutingGaurdServiceService } from './Services/routing-gaurd-service.service';

const routes: Routes = [
  { path: 'login', component: HomeLoginPageComponent },
  { path: 'home' ,  component: HomePageComponent},//canActivate:[RoutingGaurdServiceService] ,
  { path: 'DumpRawFile', component: DumpRawFileComponent },
  { path: "Waveform Presentation Configuration", component: WaveformPresentationConfigComponent },
  { path: "Artis Monitor Configuration", component: ArtisMonitorConfigComponent },
  { path: "Simulator Configuration", component: SimulatorConfigComponent },
  { path: "State Manager Configuration", component: StateManagerConfigComponent },
  { path: "Filter Configuration", component: FilterConfigComponent },
  { path: "NIBP Configuration", component: NIBPConfigComponent },
  { path: "StatusBar Configuration", component: StatusBarConfigComponent },
  { path: "SignalGroups", component: SignalGroupsComponent },
  { path: "HiSIB Interface Configuration", component: HiSIBInterfaceConfigComponent },  
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: "**", redirectTo: "login", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const Rooter = [HomePageComponent, HomeLoginPageComponent]
