import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {ChartsModule} from 'ng2-charts';

import {MaterialDesignModule} from '../material-design/material-design.module';
// Components
import {AppComponent} from './app.component';
import {CasesComponent} from './components/cases/cases.component';
import {CasesDetailsComponent} from './components/cases-details/cases-details.component';
import {AddCasesComponent} from './components/add-cases/add-cases.component';
import {EditCasesComponent} from './components/edit-cases/edit-cases.component';
import {CasesStatComponent} from './components/cases-stat/cases-stat.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CasesComponent,
    CasesDetailsComponent,
    AddCasesComponent,
    EditCasesComponent,
    CasesStatComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ChartsModule,
    MaterialDesignModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
