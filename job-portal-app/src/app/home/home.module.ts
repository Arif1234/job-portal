import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { ShortListedComponent } from './short-listed/short-listed.component';
import { InterviewsComponent } from './interviews/interviews.component';

@NgModule({
  declarations: [
    HomeComponent,
    PostedJobsComponent,
    ShortListedComponent,
    InterviewsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
