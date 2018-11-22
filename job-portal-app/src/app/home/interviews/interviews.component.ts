import { Component, OnInit, Input } from '@angular/core';
import { INTERVIEWS_HEADER } from './../data/interview.data';

import { Interviews } from './../../common/interfaces/interviews.interface';

@Component({
  selector: 'app-interviews',
  templateUrl: './interviews.component.html',
  styleUrls: ['./interviews.component.scss']
})
export class InterviewsComponent implements OnInit {
  @Input() dataSource: Interviews;
  @Input() displayedColumns = INTERVIEWS_HEADER;

  constructor() { }

  ngOnInit() {
  }

}
