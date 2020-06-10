import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { BitcoinService } from 'src/app/services/bitcoin.service'
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  users = [];
  transactions = ''
  bitCoinRate = ''
  marketPrice = ''
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }



  async ngOnInit() {
    this.users = await this.userService.getUser()
    this.bitCoinRate = await this.bitcoinService.getRate(5)
    this.transactions = await this.bitcoinService.getConfirmedTransactions(5)
    // this.marketPrice = await this.bitcoinService.getMarketPrice(5)

  }

}
