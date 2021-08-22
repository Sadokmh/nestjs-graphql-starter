import { Query, Resolver } from '@nestjs/graphql';
import { LockType } from './lock.type';
import { ItemsService } from './items.service';
import { SwapType } from 'src/dtos/swap.dto';

@Resolver()
export class ItemsResolver {


    constructor(private readonly itemsService: ItemsService) { }

  

    @Query(returns => [LockType])
    async testGraphQl() {
        return this.itemsService.testTheGraph();
    }

    @Query(returns => String)
    async hello() {
        return 'hello';
    }

    @Query(returns => [SwapType], {nullable: true})
    async swaps() {
        return this.itemsService.getSwaps();
    }

}
