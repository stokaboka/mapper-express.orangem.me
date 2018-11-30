/*
 * Copyright (c) 2018.  Igor Khorev, Orangem.me, igorhorev@gmail.com
 */

import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

// `id`, `billing_id`, `device_id`, `coor`, `state`

@Entity()
export class LanbMapsCoor {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column('int')
    public billing_id: number;

    @Column('int')
    public device_id: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    public coors: string;

    @Column('int')
    public state: number;
}
