import { Portfolio } from './portfolio';

export class User{
    constructor(
        public name: string = '',
        public portfolios : Portfolio[] = []

    ){

    }
}