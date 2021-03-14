import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { MomentModule } from 'angular2-moment';
import { PipesModule } from '../../pipes/pipes.module';

import { HomePageRoutingModule } from './home-routing.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MomentModule,
    PipesModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
