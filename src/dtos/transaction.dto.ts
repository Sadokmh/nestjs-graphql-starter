import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TransactionType {
  @Field({nullable: true})
  id?: string;
  @Field({nullable: true})
  blockNumber?: number;
  @Field({nullable: true})
  timestamp?: number;
  @Field({nullable: true})
  gasUsed?: number;
  @Field({nullable: true})
  gasPrice?: number;
}
