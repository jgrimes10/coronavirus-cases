import {Component, OnInit} from '@angular/core';

import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-cases',
  templateUrl: './cases.component.html',
  styleUrls: ['./cases.component.scss']
})
export class CasesComponent implements OnInit {

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
  }

}
