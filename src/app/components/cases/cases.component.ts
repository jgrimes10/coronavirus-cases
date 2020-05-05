import {Component, OnInit} from '@angular/core';

import {ApiService} from '../../services/api.service';
import {Case} from '../../models/case.model';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  displayedColumns: string[] = ['name', 'age', 'status'];
  data: Case[] = [];
  isLoadingResults = true;

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.api.getCases()
      .subscribe((res: any) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
