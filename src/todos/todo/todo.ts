import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';

export enum StatusEnum {
    TODO = 'TODO',
    DONE = 'DONE'
}

registerEnumType(StatusEnum, {
    name: 'StatusEnum',
  });

@ObjectType()
export class Todo {
  @Field(type => Int, {description: 'Id of todo'})
  id: number;
  @Field(type => String, {description: 'Tiitle of todo'})
  title: string;
  @Field(type => StatusEnum, {description: 'Status of todo'})
  status: StatusEnum
}