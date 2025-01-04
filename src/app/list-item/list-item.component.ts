import { Component, Input, OnInit } from '@angular/core';
import { ListItemViewModel } from '../models/listItemViewModel';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  standalone: true,
  imports: [ ]
})
export class ListItemComponent implements OnInit {

  @Input() textIn!: string;
  @Input() detailsIn!: string;
  @Input() doneIn!: boolean;

  viewModel: ListItemViewModel = {
      "text": this.textIn,
      "details": this.detailsIn,
      "done": this.doneIn
  };

  ngOnInit() {
    this.viewModel = this.initializeViewModel();
  }

  checkItem = () => {
    this.viewModel.done = !this.viewModel.done;
  }

  initializeViewModel = () => {
    return {
      "text": this.textIn,
      "details": this.detailsIn,
      "done": this.doneIn
    }
  }

}
