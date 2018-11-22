import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './../app-material/app-material.module';
import { CommonComponentModule } from './../common/common-component.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './home.component';
import { PostedJobsComponent } from './posted-jobs/posted-jobs.component';
import { ShortListedComponent } from './short-listed/short-listed.component';
import { InterviewsComponent } from './interviews/interviews.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    HomeComponent,
    PostedJobsComponent,
    ShortListedComponent,
    InterviewsComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CommonComponentModule,
    AppMaterialModule,
    FormsModule,
    FlexLayoutModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
