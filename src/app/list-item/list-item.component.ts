import { Component, Input, OnInit, input, isStandalone } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
  standalone: true,
  imports: [

  ]
})
export class ListItemComponent implements OnInit {

  @Input() text!: string;
  @Input() details!: string;
  @Input() done!: boolean;

  constructor() {}

  ngOnInit() {}

}
