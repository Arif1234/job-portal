import { AppMaterialModule } from './../app-material/app-material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material';

import { TableComponent } from './table/table.component';
import { IconComponent } from './icon/icon.component';

@NgModule({
  declarations: [
    TableComponent,
    IconComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule
  ],
  exports: [
    TableComponent,
    IconComponent
  ]
})
export class CommonComponentModule { }
