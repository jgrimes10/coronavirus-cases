import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CasesComponent} from './components/cases/cases.component';
import {CasesDetailsComponent} from './components/cases-details/cases-details.component';
import {AddCasesComponent} from './components/add-cases/add-cases.component';
import {EditCasesComponent} from './components/edit-cases/edit-cases.component';
import {CasesStatComponent} from './components/cases-stat/cases-stat.component';

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
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
