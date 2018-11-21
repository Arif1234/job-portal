import { Component, OnInit, Input } from '@angular/core';
import { POSTED_JOBS_HEADER } from './../data/posted-jobs.data';

@Component({
  selector: 'app-posted-jobs',
  templateUrl: './posted-jobs.component.html',
  styleUrls: ['./posted-jobs.component.scss']
})
export class PostedJobsComponent implements OnInit {
  @Input() dataSource;
  @Input() displayedColumns = POSTED_JOBS_HEADER;

  constructor() { }

  ngOnInit() {
  }

}
