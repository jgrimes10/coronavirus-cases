import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
// Components
import {CasesComponent} from "./components/cases/cases.component";
import {CasesDetailsComponent} from "./components/cases-details/cases-details.component";
import {CasesStatComponent} from "./components/cases-stat/cases-stat.component";
import {AddCasesComponent} from "./components/add-cases/add-cases.component";
import {EditCasesComponent} from "./components/edit-cases/edit-cases.component";

const routes: Routes = [
  {
    path: 'cases',
    component: CasesComponent,
    data: {title: 'List of Cases'}
  },
  {
    path: 'cases-details/:id',
    component: CasesDetailsComponent,
    data: {title: 'Cases Details'}
  },
  {
    path: 'cases-stat',
    component: CasesStatComponent,
    data: {title: 'Cases Statistic'}
  },
  {
    path: 'add-cases',
    component: AddCasesComponent,
    data: {title: 'Add Cases'}
  },
  {
    path: 'edit-cases/:id',
    component: EditCasesComponent,
    data: {title: 'Edit Cases'}
  },
  {
    path: '',
    redirectTo: '/cases',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
