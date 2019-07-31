import { Angle } from '../index';
declare type CompassDirection = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW' | null;
export default class Vector {
    x: number;
    y: number;
    constructor(x?: number, y?: number);
    copy(): Vector;
    add(x: number, y: number): this;
    add(value: number): this;
    add(vector: this): this;
    add(vector: {
        x: number;
        y: number;
    }): this;
    subtract(x: number, y: number): this;
    subtract(value: number): this;
    subtract(vector: this): this;
    subtract(vector: {
        x: number;
        y: number;
    }): this;
    multiply(x: number, y: number): this;
    multiply(value: number): this;
    multiply(vector: this): this;
    multiply(vector: {
        x: number;
        y: number;
    }): this;
    divide(x: number, y: number): this;
    divide(value: number): this;
    divide(vector: this): this;
    divide(vector: {
        x: number;
        y: number;
    }): this;
    getMagnitude(): number;
    getDirection(): this;
    getAngle(): Angle;
    getCompassDirection(): CompassDirection;
    rotateAround(vector: Vector, angle: Angle): this;
}
export {};
