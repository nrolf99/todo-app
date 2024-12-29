import { Component } from '@angular/core';
import { AppViewModel } from './models/appViewModel';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  viewModel: AppViewModel;

  constructor() {
    this.viewModel = this.initializeViewModel();
  }

  initializeViewModel = () => {
    return {
      list: []
    }
  }


}
