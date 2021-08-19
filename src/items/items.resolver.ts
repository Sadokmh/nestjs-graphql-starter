import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ItemType } from './item.dto';
import { Item } from './item.interface';
import { ItemInput } from './item.type';
import { ItemsService } from './items.service';

@Resolver()
export class ItemsResolver {


    constructor(private readonly itemsService: ItemsService) { }

    @Query(returns => [ItemType])
    async items(): Promise<ItemType[]> {
        return this.itemsService.findAll();
    }

    @Mutation(returns => ItemType)
    async createItem(@Args('input') input: ItemInput): Promise<ItemType> {
        return this.itemsService.create(input);
    }

    @Mutation(returns => ItemType)
    async updateItem(
        @Args('id') id: string,
        @Args('input') input: ItemInput,
    ) {
        return this.itemsService.update(id, input as Item);
    }

    @Mutation(returns => ItemType)
    async deleteItem(@Args('id') id: string) {
        return this.itemsService.delete(id);
    }

    @Query(returns => String)
    async hello() {
        return 'hello';
    }

}
