import { Matrix } from '../index';

export class Transform extends Matrix {
  stack: Matrix[]

  constructor(...params: number[]) {
    super(...params);

    this.stack = [];
  }

  push() {
    this.stack.push(this.copy());
  }

  pop() {
    Object.assign(
      this,
      this.stack.pop(),
    );

    return this;
  }
}
