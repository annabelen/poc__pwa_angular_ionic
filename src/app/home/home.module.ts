import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { DesyButtonsModule, DesyNavModule, DesyPaginationModule, DesyTablesModule, DesyViewsModule, DesyFormsModule } from 'desy-angular';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DesyNavModule,
    DesyPaginationModule,
    DesyViewsModule,
    DesyTablesModule,
    DesyButtonsModule,
    DesyFormsModule,
    ReactiveFormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
