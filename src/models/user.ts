import { portfolio } from './portfolio';

export class User{
    constructor(
        public name: string = '',
        public portfolios : portfolio[] = []

    ){

    }
}