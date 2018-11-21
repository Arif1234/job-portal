import { CommonComponentModule } from './../common/common-component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { ShortListedComponent } from './short-listed/short-listed.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { MatTableModule } from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent,
    PostedJobsComponent,
    ShortListedComponent,
    InterviewsComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonComponentModule,
    MatTableModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
