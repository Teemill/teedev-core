const degreesToRadians = Math.PI / 180;
const radiansToDegrees = 180 / Math.PI;

type Unit = 'degrees' | 'radians';

export class Angle {
  angle: number
  unit:  Unit

  constructor(
    angle: number = 0,
    unit:  Unit   = 'degrees',
  ) {
    this.angle = angle;
    this.unit  = unit;
  }

  set value(value: number) {
    this.angle = value;
  }

  get value() {
    return this.angle;
  }

  get radians() {
    return this.angle * degreesToRadians;
  }

  get degrees() {
    return this.angle * radiansToDegrees;
  }

  add(value: number | this) {
    if (value instanceof Angle) {
      this.angle += value.angle;
    } else if (typeof value === 'number') {
      this.angle += value;
    }

    return this;
  }

  subtract(value: number | this) {
    if (value instanceof Angle) {
      this.angle -= value.angle;
    } else if (typeof value === 'number') {
      this.angle -= value;
    }

    return this;
  }

  multiply(value: number) {
    this.angle *= value;

    return this;
  }

  divide(value: number) {
    this.angle /= value;

    return this;
  }

  toDegrees() {
    this.angle = this.degrees;

    return this;
  }

  toRadians() {
    this.angle = this.radians;

    return this;
  }
}
