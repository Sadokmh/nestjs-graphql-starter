import { Field, ObjectType } from "@nestjs/graphql";
import { TokenType } from "./token.dto";

@ObjectType()
export class PoolType {
    @Field({nullable: true})
    id?: string;
    @Field({nullable: true})
    createdAtTimestamp?: string;
    @Field({nullable: true})
    createdAtBlockNumber?: string;
    @Field({nullable: true})
    token0?: TokenType;
    @Field({nullable: true})
    token1?: TokenType;
    @Field({nullable: true})
    feeTier?: string;
    @Field({nullable: true})
    liquidity?: string;
    @Field({nullable: true})
    sqrtPrice?: string;
    @Field({nullable: true})
    feeGrowthGlobal0X128?: string;
    @Field({nullable: true})
    feeGrowthGlobal1X128?: string;
    @Field({nullable: true})
    token0Price?: number;
    @Field({nullable: true})
    token1Price?: number;
    @Field({nullable: true})
    tick?: string;
}