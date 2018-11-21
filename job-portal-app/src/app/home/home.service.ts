import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { POSTED_JOBS_DATA } from './data/posted-jobs.data';
import { INTERVIEWS_DATA } from './data/interview.data';
import { SHORT_LISTED_DATA } from './data/short-listed.data';

import { GenericData } from './../common/interfaces/generic-data.interface';
import { PostedJobs } from './../common/interfaces/posted-jobs.interface';
import { ShortListed } from './../common/interfaces/short-listed.interface';
import { Interviews } from './../common/interfaces/interviews.interface';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private _http: HttpClient) { }

  public getPostedJobsData(): Observable<GenericData[]> {
    return of(POSTED_JOBS_DATA);
  }

  public getShortListedData(): Observable<GenericData[]> {
    return of(SHORT_LISTED_DATA);
  }

  public getInterviewsData(): Observable<GenericData[]> {
    return of(INTERVIEWS_DATA);
  }
}
