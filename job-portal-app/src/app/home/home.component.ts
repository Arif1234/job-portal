import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { PostedJobs } from '../common/interfaces/posted-jobs.interface';
import { ShortListed } from './../common/interfaces/short-listed.interface';
import { Interviews } from './../common/interfaces/interviews.interface';
import { GenericData } from './../common/interfaces/generic-data.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public postedJobsData: GenericData[];
  public shortListedData: GenericData[];
  public interviewsData: GenericData[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getPostedJobsData().subscribe(data => this.postedJobsData = data);
    this.homeService.getShortListedData().subscribe(data => this.shortListedData = data);
    this.homeService.getInterviewsData().subscribe(data => this.interviewsData = data);
  }
}
