import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    ItemsModule, 
    GraphQLModule.forRoot({
    autoSchemaFile: 'schema.gql',
    }),
    MongooseModule.forRoot('mongodb://localhost/nestgraphql')
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
