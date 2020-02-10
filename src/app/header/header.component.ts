import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  //will be injected from the "father" app.component
  @Input() config: {'title': string, 'text': string, 'target': string}[];

  title = 'Sela Main Project';


  constructor() { }

  ngOnInit() {
  }

}
