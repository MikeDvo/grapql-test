import { Int, Field, InputType } from '@nestjs/graphql';
import { StatusEnum } from '../todo/todo';
import { IsNotEmpty, Length, IsOptional } from 'class-validator';

@InputType()
export class UpdateStatusTodoInput {
  @Length(2, 128)
  @IsNotEmpty()
  @Field({description: 'Id of update status'})
  id: number;

  @Field(() => StatusEnum, {description: 'Updated status of todo'})
  status: StatusEnum
}