import { Field, ID, ObjectType } from 'type-graphql';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'User' })
@ObjectType()
export class User extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn({ name: 'Id' })
  id!: number;

  @Field(() => String)
  @Column({ name: 'UserName' })
  userName!: string;

  @Field(() => String)
  @Column({ name: 'FirstName' })
  firstName!: string;

  @Field(() => String)
  @Column({ name: 'LastName' })
  lastName!: string;

  @Field(() => Date)
  @Column({ name: 'BirthDate' })
  birthDate!: Date;
}
