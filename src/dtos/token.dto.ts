import { Field, ObjectType } from "@nestjs/graphql"
import { isNullableType } from "graphql";



@ObjectType()
export class TokenType {
    @Field({nullable: true})
    id?: string;
    @Field({nullable: true})
    symbol?: string;
    @Field({nullable: true})
    name?: string;
    @Field({nullable: true})
    decimals?: number;
    @Field({nullable: true})
    totalSupply?: number;
    @Field({nullable: true})
    volume?: number;
    @Field({nullable: true})
    volumeUSD?: number;
    @Field({nullable: true})
    untrackedVolumeUSD?: number;
    @Field({nullable: true})
    feesUSD?: number;
    @Field({nullable: true})
    txCount?: number;
    @Field({nullable: true})
    poolCount?: number;
    @Field({nullable: true})
    totalValueLocked?: number;
    @Field({nullable: true})
    totalValueLockedUSD?: number;
}
