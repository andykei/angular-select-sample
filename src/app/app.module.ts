import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SelectListComponent } from './select-list/select-list.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ListFilterComponent } from './list-filter/list-filter.component';

import { MaterialModule } from './material/material.module';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,DragDropModule,MaterialModule,BrowserAnimationsModule],
  declarations: [ AppComponent,SelectListComponent, ListFilterComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
