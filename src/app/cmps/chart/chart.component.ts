import { Component, OnInit, Input, OnChanges } from '@angular/core';
import GoogleChartInterface from '../../models/googleChartComponent.model';

@Component({
  selector: 'chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements OnInit, OnChanges {

  marketChart = new GoogleChartInterface();
  transactionsChart = new GoogleChartInterface();
  @Input() marketData: any = [];
  @Input() marketTableTitle: string;
  @Input() transactionsData: any = [];
  @Input() transactionsTableTitle: string;

  constructor() { }

  ngOnInit(): void {
    this.marketChart.data = this.marketData;
    this.marketChart.title = this.marketTableTitle;
    this.transactionsChart.data = this.transactionsData;
    this.transactionsChart.title = this.transactionsTableTitle;
  }

  ngOnChanges(): void {
    this.marketChart.data = this.marketData;
    this.marketChart.title = this.marketTableTitle;
    this.transactionsChart.data = this.transactionsData;
    this.transactionsChart.title = this.transactionsTableTitle;
  }
}
