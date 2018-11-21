import { Component, OnInit, Input } from '@angular/core';
import { SHORT_LISTED_HEADER } from '../data/short-listed.data';


@Component({
  selector: 'app-short-listed',
  templateUrl: './short-listed.component.html',
  styleUrls: ['./short-listed.component.scss']
})
export class ShortListedComponent implements OnInit {
  @Input() dataSource;
  @Input() displayedColumns = SHORT_LISTED_HEADER;

  constructor() { }

  ngOnInit() {
  }

}
