import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
@Injectable()
export class ItemsService {

  UNISWAP_SUBGRAPH_URL = 'https://gateway.thegraph.com/api/b5af9f38028b5a0ea2347d6d461cb94f/subgraphs/id/0x9bde7bf4d5b13ef94373ced7c8ee0be59735a298-2';

  constructor(
    private http: HttpService,
  ) {}

  


  async getSwaps() {
    return new Promise((resolve, reject) => {
      this.http.post(
        this.UNISWAP_SUBGRAPH_URL,
        {
          query: `
            query {
              swaps {
                id 
                transaction {
                  id 
                  gasPrice
                  blockNumber
                }
                token0 {
                  id
                  symbol
                  name
                  volume
                  volumeUSD
                  feesUSD
                  totalSupply
                }
                token1 {
                  id
                  symbol
                  name
                  volume
                  volumeUSD
                  feesUSD
                  totalSupply
                }
                sender
              }
            }
          `
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).subscribe((resp: any) => {
        resolve(resp?.data?.data?.swaps)
      }) 
    })
  }

  async testTheGraph(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.post(
        this.UNISWAP_SUBGRAPH_URL,
        {
          query: 
            `query {
              locks {
                address
                name
              }
            }`
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      ).subscribe((resp: any) => {
        console.log(resp.data.data.locks[0]);
        resolve(resp.data.data.locks);
      }, error => {
        reject(error);
      })  
    })
    
  }
}
