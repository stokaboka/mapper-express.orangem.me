/*
 * Copyright (c) 2018.  Igor Khorev, Orangem.me, igorhorev@gmail.com
 */

import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

// `id`, `billingid`, `group_id`, `name`, `desc`, `coors`

@Entity()
export class DeviceGroups {

    @PrimaryGeneratedColumn()
    public id: number;

    @Column('int')
    public billingid: number;

    @Column('int')
    public group_id: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    public name: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    public desc: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    public coors: string;
}
