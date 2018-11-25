import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';

import { POSTED_JOBS_DATA } from './data/posted-jobs.data';
import { INTERVIEWS_DATA } from './data/interview.data';
import { SHORT_LISTED_DATA } from './data/short-listed.data';

import { PostedJobs } from '@interfaces/posted-jobs.interface';
import { ShortListed } from '@interfaces/short-listed.interface';
import { Interviews } from '@interfaces/interviews.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public postedJobSource = new BehaviorSubject(POSTED_JOBS_DATA);
  postedJobObservable$ = this.postedJobSource.asObservable();

  constructor(private _http: HttpClient) { }

  updatePostedJobsTable(postedJobs: PostedJobs[]) {
    this.postedJobSource.next(postedJobs);
  }

  public getPostedJobsData(): Observable<PostedJobs[]> {
    return this.postedJobSource;
  }

  public getAllPostedJobsData(): Observable<PostedJobs[]> {
    return of(POSTED_JOBS_DATA);
  }

  public getShortListedData(): Observable<ShortListed[]> {
    return of(SHORT_LISTED_DATA);
  }

  public getInterviewsData(): Observable<Interviews[]> {
    return of(INTERVIEWS_DATA);
  }
}
