import { Angle } from '../index';

function round(value: number, decimals: number) {
  const multiple = 10 ** decimals;
  return Math.round(value * multiple) / multiple;
}

type VectorLike = Vector | { x: number, y: number };

type CompassDirection = 'N'|'NE'|'E'|'SE'|'S'|'SW'|'W'|'NW'|null;

function assertVectorLike(x: number)                      : VectorLike;
function assertVectorLike(x: number, y: number)           : VectorLike;
function assertVectorLike(vector: Vector)                 : VectorLike;
function assertVectorLike(vector: {x: number, y: number}) : VectorLike;

function assertVectorLike(arg1?: any, arg2?: any): VectorLike {
  if (arg1 instanceof Vector) {
    return arg1;
  } else if (
    typeof arg1 === 'number' &&
    !arg2
  ) {
    return {
      x: arg1,
      y: arg1,
    };
  } else if (
    typeof arg1 === 'number' &&
    typeof arg2 === 'number'
  ) {
    return {
      x: arg1,
      y: arg2,
    };
  } else if (
    arg1 &&
    typeof arg1 === 'object'
  ) {
    return {
      x: arg1.x || 0,
      y: arg1.y || 0,
    };
  }

  return new Vector();
}

export default class Vector {
  public x: number
  public y: number

  constructor(
    x: number = 0,
    y: number = 0,
  ) {
    this.x = x;
    this.y = y;
  }

  public copy() {
    return new Vector(this.x, this.y);
  }

  public add(x: number, y: number)           : this;
  public add(value: number)                  : this;
  public add(vector: this)                   : this;
  public add(vector: {x: number, y: number}) : this;

  public add(arg1: any, arg2?: any): this {
    const vector = assertVectorLike(arg1, arg2);

    this.x += vector.x;
    this.y += vector.y;

    return this;
  }

  public subtract(x: number, y: number)           : this;
  public subtract(value: number)                  : this;
  public subtract(vector: this)                   : this;
  public subtract(vector: {x: number, y: number}) : this;

  public subtract(arg1: any, arg2?: any): this {
    const vector = assertVectorLike(arg1, arg2);

    this.x -= vector.x;
    this.y -= vector.y;

    return this;
  }

  public multiply(x: number, y: number)           : this;
  public multiply(value: number)                  : this;
  public multiply(vector: this)                   : this;
  public multiply(vector: {x: number, y: number}) : this;

  public multiply(arg1: any, arg2?: any): this {
    const vector = assertVectorLike(arg1, arg2);

    this.x *= vector.x;
    this.y *= vector.y;

    return this;
  }

  public divide(x: number, y: number)           : this;
  public divide(value: number)                  : this;
  public divide(vector: this)                   : this;
  public divide(vector: {x: number, y: number}) : this;

  public divide(arg1: any, arg2?: any): this {
    const vector = assertVectorLike(arg1, arg2);

    this.x /= vector.x;
    this.y /= vector.y;

    return this;
  }

  public getMagnitude() {
    return Math.sqrt((this.x ** 2) + (this.y ** 2));
  }

  public getDirection() {
    return this.divide(this.getMagnitude());
  }

  public getAngle() {
    return new Angle(Math.atan2(this.y, this.x));
  }

  public getCompassDirection(): CompassDirection {
    const direction = this.getAngle().toDegrees().angle;

    if (this.x === 0 && this.y === 0) {
      return null;
    }

    if (direction < -135) {
      return 'W';
    }

    if (direction < -45) {
      return 'N';
    }

    if (direction > 135) {
      return 'W';
    }

    if (direction > 45) {
      return 'S';
    }

    return 'E';
  }

  public rotateAround(vector: Vector, angle: Angle) {
    const a = angle.toRadians().angle;

    const xDiff = this.x - vector.x;
    const yDiff = this.y - vector.y;

    this.x = round(
      xDiff * Math.cos(a) - yDiff * Math.sin(a) + vector.x,
      12,
    );
    this.y = round(
      yDiff * Math.cos(a) - xDiff * Math.sin(a) + vector.y,
      12,
    );

    return this;
  }
}
