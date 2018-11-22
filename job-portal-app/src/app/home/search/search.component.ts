import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  getOpenStatus() {
    console.log('Open Status');
  }

  getClosedStatus() {
    console.log('Closed Status');
  }
}
