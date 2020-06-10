import { Injectable } from '@angular/core';
import axios from 'axios'
@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  constructor() { }

  async getRate(coins: number) {
    let coinRate = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${coins}`)
    return coinRate.data
  }

  // async  getMarketPrice(months: number) {
  //   let marketPriceRate = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=${months}months&format=json&cors=true`)
  //   return marketPriceRate.data
  // }

  async getConfirmedTransactions(months: number) {
    let tradeVolume = await axios.get(`https://api.blockchain.info/charts/trade-volume?timespan=${months}months&format=json&cors=true`)
    return tradeVolume.data.values.length

  }
}



// getRate(coins) (returns Promise)
// o Bitcoin rate (use a Bitcoin value API such as this)
// • getMarketPrice(), getConfirmedTransactions()
// o Return chart data as described below.