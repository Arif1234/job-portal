import { Component, OnInit, Input } from '@angular/core';
import { SHORT_LISTED_HEADER } from '../data/short-listed.data';
import { ShortListed } from '@interfaces/short-listed.interface';

@Component({
  selector: 'app-short-listed',
  templateUrl: './short-listed.component.html',
  styleUrls: ['./short-listed.component.scss']
})
export class ShortListedComponent implements OnInit {
  @Input() dataSource: ShortListed;
  @Input() displayedColumns = SHORT_LISTED_HEADER;

  constructor() { }

  ngOnInit() {
  }

  interviewDetails(row) {
    alert('Find interview details for candidate: ' + row.name);
  }
}
