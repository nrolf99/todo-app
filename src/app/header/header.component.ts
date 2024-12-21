import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  dateString: string | null = "";

  constructor(private datePipe: DatePipe) { 
    this.dateString = this.datePipe.transform(new Date(), 'EEEE, MMMM yyyy');

  }


  ngOnInit() {}

}
