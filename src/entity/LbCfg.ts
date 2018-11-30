/*
 * Copyright (c) 2018.  Igor Khorev, Orangem.me, igorhorev@gmail.com
 */

import {Column, Entity, PrimaryColumn, PrimaryGeneratedColumn} from 'typeorm';

// `id`,
// `sname`, `host`, `basename`, `username`, `pass`,
// `failhost`,
// `soap_login`, `soap_password`, `soap_file`,
// `smssender`, `vibersender`

@Entity()
export class LbCfg {
    @PrimaryGeneratedColumn()
    public id: number;

    @Column({
        type: 'varchar',
        length: 255,
    })
    public sname: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    public host: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    public basename: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    public username: string;

    @Column({
        type: 'varchar',
        length: 255,
    })
    public pass: string;

    @Column({
        type: 'varchar',
        length: 20,
    })
    public failhost: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    public soap_login: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    public soap_password: string;

    @Column({
        type: 'varchar',
        length: 100,
    })
    public soap_file: string;

    @Column({
        type: 'varchar',
        length: 50,
    })
    public smssender: string;

    @Column({
        type: 'varchar',
        length: 20,
    })
    public vibersender: string;

}
