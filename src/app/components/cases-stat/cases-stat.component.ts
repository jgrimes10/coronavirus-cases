import {Component, OnInit} from '@angular/core';

import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {Label} from 'ng2-charts';

import {ApiService} from '../../services/api.service';
import {Statistic} from '../../models/statistic.model';

@Component({
  selector: 'app-cases-stat',
  templateUrl: './cases-stat.component.html',
  styleUrls: ['./cases-stat.component.scss']
})
export class CasesStatComponent implements OnInit {

  stats: Statistic[] = [];
  label = 'Positive';
  isLoadingResults = true;
  barChartOptions: ChartOptions = {
    responsive: true
  };
  barChartLabels: Label[] = [];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [{data: [], backgroundColor: [], label: this.label}];

  constructor(private api: ApiService) {
  }

  ngOnInit(): void {
    this.getStatistic(this.label);
  }

  changeStatus() {
    this.isLoadingResults = true;
    this.getStatistic(this.label);
  }

  getStatistic(status: string) {
    this.barChartData = [{data: [], backgroundColor: [], label: this.label}];
    this.barChartLabels = [];
    this.api.getStatistic(status)
      .subscribe((res: any) => {
        this.stats = res;
        const chartData: number[] = [];
        const chartColor: string[] = [];
        this.stats.forEach((stat) => {
          this.barChartLabels.push(stat._id.date);
          chartData.push(stat.count);
          if (this.label === 'Positive') {
            chartColor.push('rgba(255, 165, 0, 0.5)');
          } else if (this.label === 'Dead') {
            chartColor.push('rgba(255, 0, 0, 0.5)');
          } else {
            chartColor.push('rgba(0, 255, 0, 0.5)');
          }
        });
        this.barChartData = [{data: chartData, backgroundColor: chartColor, label: this.label}];
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
        this.isLoadingResults = false;
      });
  }

}
