import { ComponentsModule } from './../components/components.module';
import { AppRoutingModule } from './../app-routing.module';
import { SharedModule } from './../shared/shared.module';
import { Grafica1Component } from './grafica1/grafica1.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";

import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromisesComponent } from './promises/promises.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent,
    PromisesComponent,
    RxjsComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    Grafica1Component,
    PagesComponent,
    AccountSettingsComponent

  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    AppRoutingModule,
    ComponentsModule
  ]
})
export class PagesModule { }
