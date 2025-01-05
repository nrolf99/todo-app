import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HeaderComponent } from '../header/header.component';

import { HomePageRoutingModule } from './home-routing.module';
import { ListItemComponent } from '../list-item/list-item.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ListItemComponent
  ],
  declarations: [
    HomePage,
    HeaderComponent
  ],
  providers: [
    ModalController
  ]
})
export class HomePageModule {}
