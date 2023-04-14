import { RxjsComponent } from './rxjs/rxjs.component';
import { PromisesComponent } from './promises/promises.component';

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';

 
 const routes: Routes = [
    {
        path: 'dashboard', 
        component:PagesComponent,
        children: [
          {path: '', component:DashboardComponent, data:{titulo: 'Dashboard'}},
          {path: 'progress', component:ProgressComponent, data:{titulo: 'ProgressBar'}},
          {path: 'chart1', component:Grafica1Component, data:{titulo: 'Chart1'}},
          {path: 'account-settings', component:AccountSettingsComponent, data:{titulo: 'Settings'}},
          {path: 'promises', component:PromisesComponent, data:{titulo: 'Promises'}},
          {path: 'rxjs', component:RxjsComponent, data:{titulo: 'Rxjs'}}
          /* {path: '', redirectTo: '/dashboard', pathMatch: 'full'} */
    
        ]
      }
 ];
 
 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
 })
 export class PagesRoutingModule {}
 