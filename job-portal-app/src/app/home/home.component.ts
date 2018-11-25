import { Component, OnInit } from '@angular/core';
import { HomeService } from './home.service';
import { PostedJobs } from '@interfaces/posted-jobs.interface';
import { ShortListed } from '@interfaces/short-listed.interface';
import { Interviews } from '@interfaces/interviews.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public postedJobsData: PostedJobs[];
  public shortListedData: ShortListed[];
  public interviewsData: Interviews[];

  constructor(private homeService: HomeService) { }

  ngOnInit() {
    this.homeService.getPostedJobsData().subscribe(data => this.postedJobsData = data);
    this.homeService.getShortListedData().subscribe(data => this.shortListedData = data);
    this.homeService.getInterviewsData().subscribe(data => this.interviewsData = data);
  }
}
