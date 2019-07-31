declare type Unit = 'degrees' | 'radians';
export default class Angle {
    angle: number;
    unit: Unit;
    constructor(angle?: number, unit?: Unit);
    value: number;
    readonly radians: number;
    readonly degrees: number;
    add(value: number | this): this;
    subtract(value: number | this): this;
    multiply(value: number): this;
    divide(value: number): this;
    toDegrees(): this;
    toRadians(): this;
}
export {};
