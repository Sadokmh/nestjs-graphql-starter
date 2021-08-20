import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class LockType {
  @Field()
  readonly address?: string;
  @Field()
  readonly name: string;
}