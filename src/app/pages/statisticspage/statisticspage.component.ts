import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoinservice/bitcoin.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'statisticspage',
  templateUrl: './statisticspage.component.html',
  styleUrls: ['./statisticspage.component.scss']
})
export class StatisticspageComponent implements OnInit {

  newMarketData: Array<Array<any>>
  marketTableTitle: string
  newTransactionsData: Array<Array<any>>
  transactionsTableTitle: string

  constructor(private BitcoinService: BitcoinService) { }

  ngOnInit(): void {
    this.BitcoinService.getMarketPrice()
      .subscribe(result => this.filterMarketData(result));
    this.BitcoinService.getConfirmedTransactions()
      .subscribe(result => this.filterTransactionsData(result));
  }

  filterMarketData(result): void {
    this.newMarketData = this._filterData(result);
    this.marketTableTitle = result.name + ' - ' + result.description;
  }

  filterTransactionsData(result): void {
    this.newTransactionsData = this._filterData(result);
    this.transactionsTableTitle = result.name + ' - ' + result.description;
  }

  _filterData(result) {
    return result.values.map(value => {
      const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
      let date = new Date(value.x * 1000).toLocaleDateString(undefined, options);
      let bitCoinRate = value.y;
      return [date, bitCoinRate];
    })
  }
}
