import {Column, Entity, IntegerType, PrimaryGeneratedColumn,} from 'typeorm'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    firstName: string;

    @Column()
    lastname: string;

    @Column()
    email: string;

    @Column()
    account: number;
}
