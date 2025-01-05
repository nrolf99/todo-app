import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import {ModalController} from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { MenuModalComponent } from '../menu-modal/menu-modal.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [
    ModalController
  ]
})
export class HeaderComponent  implements OnInit {

  dateString: string | null = "";
  newItem: string | null = "";

  constructor(private datePipe: DatePipe, private modalController: ModalController) { 
    this.dateString = this.datePipe.transform(new Date(), 'EEEE MMMM dd, yyyy');

  }


  ngOnInit() {}


  async openModal() {
    const modal = await this.modalController.create({
      component: MenuModalComponent,
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.newItem = `New to do item: ${data}!`;
    }
  }

}
