import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HomeService } from './../home.service';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  public result: any;
  public postedJobsData: any;
  public allPostedJobs: any;
  public searchParam: string;
  myControl = new FormControl();
  options: string[] = [];
  filteredOptions: Observable<string[]>;

  constructor(private _homeService: HomeService) { }

  ngOnInit() {
    this._homeService.getAllPostedJobsData().subscribe(data => this.allPostedJobs = data);
    this.allPostedJobs.map(data => this.options.push(data.title));

    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  getOpenStatus() {
    this._homeService.getAllPostedJobsData().subscribe(data => this.allPostedJobs = data);
    this.result = this.allPostedJobs.filter(data => data.status === 'Open');
    this._homeService.updatePostedJobsTable(this.result);
  }

  getClosedStatus() {
    this._homeService.getAllPostedJobsData().subscribe(data => this.allPostedJobs = data);
    this.result = this.allPostedJobs.filter(data => data.status === 'Closed');
    this._homeService.updatePostedJobsTable(this.result);
  }

  getAllJobsStatus() {
    this._homeService.getAllPostedJobsData().subscribe(data => this.allPostedJobs = data);
    this._homeService.updatePostedJobsTable(this.allPostedJobs);
  }

  searchByTitle() {
    this._homeService.getAllPostedJobsData().subscribe(data => this.allPostedJobs = data);
    this.result = this.allPostedJobs.filter(data => data.title === this.myControl.value);
    this._homeService.updatePostedJobsTable(this.result);
  }
}
