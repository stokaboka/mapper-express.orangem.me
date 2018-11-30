/*
 * Copyright (c) 2018.  Igor Khorev, Orangem.me, igorhorev@gmail.com
 */

import {getRepository} from 'typeorm';
import LanbMapsCoor from '../entity/LanbMapsCoor';
import DBController from './DBController';

export class LanbMapsCoorController extends DBController {

    constructor() {
        super(getRepository(LanbMapsCoor));
    }

}
