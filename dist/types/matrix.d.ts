import { Vector, Angle } from '../index';
export default class Matrix {
    m11: number;
    m12: number;
    m13: number;
    m21: number;
    m22: number;
    m23: number;
    m31: number;
    m32: number;
    m33: number;
    constructor(a?: number, b?: number, c?: number, d?: number, e?: number, f?: number);
    copy(): Matrix;
    translate(vector: Vector): this;
    scale(vector: Vector): this;
    rotate(angle: Angle): this;
    inverse(): this;
}
