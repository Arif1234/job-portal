import { Component, OnInit } from '@angular/core';
import { HomeService } from './../home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public result: any;
  public postedJobsData: any;
  public allPostedJobs: any;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.postedJobObservable$.subscribe(data => this.postedJobsData = data);
  }

  getOpenStatus() {
    this._homeService.getAllPostedJobsData().subscribe(data => this.allPostedJobs = data);
    this.result = this.allPostedJobs.filter( data => data.status === 'Open');
    this._homeService.updatePostedJobsTable(this.result);
  }

  getClosedStatus() {
    this._homeService.getAllPostedJobsData().subscribe(data => this.allPostedJobs = data);
    this.result = this.allPostedJobs.filter( data => data.status === 'Closed');
    this._homeService.updatePostedJobsTable(this.result);
  }

  getAllJobsStatus() {
    this._homeService.getAllPostedJobsData().subscribe(data => this.allPostedJobs = data);
    this._homeService.updatePostedJobsTable(this.allPostedJobs);
  }
}
