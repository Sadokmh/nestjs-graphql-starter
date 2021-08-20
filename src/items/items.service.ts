import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ItemType } from './item.dto';
import { Item } from './item.interface';
import { ItemInput } from './item.type';
import { Observable } from 'rxjs';

@Injectable()
export class ItemsService {
  constructor(
    @InjectModel('Item') private itemModel: Model<Item>,
    private http: HttpService,
  ) {}

  async create(createItemDto: ItemInput): Promise<ItemType> {
    const createdItem = new this.itemModel(createItemDto);
    return await createdItem.save();
  }

  async findAll(): Promise<ItemType[]> {
    return await this.itemModel.find().exec();
  }

  async findOne(id: string): Promise<ItemType> {
    return await this.itemModel.findOne({ _id: id });
  }

  async delete(id: string): Promise<ItemType> {
    return await this.itemModel.findByIdAndRemove(id);
  }

  async update(id: string, item: Item): Promise<ItemType> {
    return await this.itemModel.findByIdAndUpdate(id, item, { new: true });
  }
  async testTheGraph(): Promise<any> {
    return new Promise((resolve,reject) => {
      this.http.post(
        'https://api.thegraph.com/subgraphs/name/unlock-protocol/unlock',
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
