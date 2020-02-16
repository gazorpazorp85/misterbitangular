import { Component, OnInit } from '@angular/core';
import { BitcoinService } from '../../services/bitcoinservice/bitcoin.service';

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
    this.newMarketData = result.values.map(value => {
      const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
      let date = new Date(value.x * 1000).toLocaleDateString(undefined, options);
      let bitCoinRate = value.y;
      return this.newMarketData = [date, bitCoinRate];
    })
    this.marketTableTitle = result.name + ' - ' + result.description;
  }

  filterTransactionsData(result): void {
    this.newTransactionsData = result.values.map(value => {
      const options = { year: '2-digit', month: '2-digit', day: '2-digit' };
      let date = new Date(value.x * 1000).toLocaleDateString(undefined, options);
      let transactionsRate = value.y;
      return this.newTransactionsData = [date, transactionsRate]
    })
    this.transactionsTableTitle = result.name + ' - ' + result.description;
  }

  // filterData(result, newData, tableTitle) {
  //   newData = result.values.map(value => {
  //     let x = new Date(value.x * 1000).toLocaleDateString();
  //     let y = value.y;
  //     return newData = [x, y]
  //   })
  //   tableTitle = result.name + ' - ' + result.description;
  // }
}
