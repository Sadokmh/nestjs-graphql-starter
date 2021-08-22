import { Field, ObjectType } from "@nestjs/graphql";
import { PoolType } from "./pool.dto";
import { TokenType } from "./token.dto";
import { TransactionType } from './transaction.dto';


@ObjectType()
export class SwapType {
    @Field({nullable: true})
    id?: string;
    @Field({nullable: true})
    transaction?: TransactionType
    @Field({nullable: true})
    timestamp?: number;
    @Field({nullable: true})
    pool?: PoolType;
    @Field({nullable: true})
    token0?: TokenType;
    @Field({nullable: true})
    token1?: TokenType;
    @Field({nullable: true})
    sender?: string;
    @Field({nullable: true})
    recipient?: string;
    @Field({nullable: true})
    origin?: string;
    @Field({nullable: true})
    amount0?: number;
    @Field({nullable: true})
    amount1?: number;
    @Field({nullable: true})
    amountUSD?: number;
    @Field({nullable: true})
    sqrtPriceX96?: number;
}