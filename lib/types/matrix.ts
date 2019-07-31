import { Vector, Angle } from '../index';

// [a c e]
// [b d f]
// [0 0 1]

export default class Matrix {
  m11: number
  m12: number
  m13: number
  m21: number
  m22: number
  m23: number
  m31: number
  m32: number
  m33: number

  constructor(
    a: number = 1,
    b: number = 0,
    c: number = 0,
    d: number = 1,
    e: number = 0,
    f: number = 0,
  ) {
    this.m11 = a;
    this.m12 = b;
    this.m13 = 0;
    this.m21 = c;
    this.m22 = d;
    this.m23 = 0;
    this.m31 = e;
    this.m32 = f;
    this.m33 = 1;
  }

  copy() {
    return new Matrix(
      this.m11,
      this.m12,
      this.m21,
      this.m22,
      this.m31,
      this.m32,
    );
  }

  translate(vector: Vector) {
    this.m31 += (this.m11 * vector.x) + (this.m21 * vector.y);
    this.m32 += (this.m12 * vector.x) + (this.m22 * vector.y);

    return this;
  }

  scale(vector: Vector) {
    this.m11 *= vector.x;
    this.m12 *= vector.x;
    this.m21 *= vector.y;
    this.m22 *= vector.y;

    return this;
  }

  rotate(angle: Angle) {
    if (angle.value !== 0) {
      const cosTheta = Math.cos(angle.value);
      const sinTheta = Math.sin(angle.value);

      const {
        m11,
        m12,
        m21,
        m22,
      } = this;

      this.m11 = (m11 * cosTheta) - (m12 * sinTheta);
      this.m12 = (m12 * cosTheta) + (m11 * sinTheta);
      this.m21 = (m21 * cosTheta) - (m22 * sinTheta);
      this.m22 = (m22 * cosTheta) + (m21 * sinTheta);
    }

    return this;
  }

  inverse() {
    this.m11 *= -1;
    this.m12 *= -1;
    this.m21 *= -1;
    this.m22 *= -1;

    return this;
  }
}
