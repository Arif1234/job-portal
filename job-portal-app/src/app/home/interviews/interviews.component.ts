import { Component, OnInit, Input } from '@angular/core';
import { INTERVIEWS_HEADER } from './../data/interview.data';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {
  @Input() dataSource;
  @Input() displayedColumns = INTERVIEWS_HEADER;

  constructor() { }

  ngOnInit() {
  }

}
