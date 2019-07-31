import { Matrix } from '../index';
export default class Transform extends Matrix {
    stack: Matrix[];
    constructor(...params: number[]);
    push(): void;
    pop(): this;
}
