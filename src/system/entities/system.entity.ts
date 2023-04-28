import {Column, Entity, PrimaryGeneratedColumn,} from 'typeorm'

@Entity()
export class Systems {
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



export class System {}
