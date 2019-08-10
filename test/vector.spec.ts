import 'mocha';

import { expect } from 'chai';
import { Vector } from '../lib';

describe('Vector Type', () => {
  describe('constructor', () => {
    it('new instance returns [0, 0]', () => {
      const result = new Vector();
  
      expect(result.x).to.equal(0);
      expect(result.y).to.equal(0);
    });
  
    it('new instance with initial state', () => {
      const result = new Vector(10, -5);
  
      expect(result.x).to.equal(10);
      expect(result.y).to.equal(-5);
    });
  });

  describe('copy', () => {
    it('should create a duplicate instance', () => {
      const result = new Vector(10, -5);
  
      expect(result).to.equal(result);
      expect(result.copy()).to.not.equal(result);
    });
  });

  describe('add', () => {
    it('should return the Vector plus Vector', () => {
      const result = new Vector(10, -5).add(new Vector(10, 5));
  
      expect(result.x).to.equal(20);
      expect(result.y).to.equal(0);
    });

    it('should return the Vector plus VectorLike object', () => {
      const result = new Vector(10, -5).add({ x: 10, y: 5 });
  
      expect(result.x).to.equal(20);
      expect(result.y).to.equal(0);
    });

    it('should return the Vector plus single number param', () => {
      const result = new Vector(10, -5).add(5);

      expect(result.x).to.equal(15);
      expect(result.y).to.equal(0);
    });

    it('should return the Vector plus two number params', () => {
      const result = new Vector(10, -5).add(5, 7);
  
      expect(result.x).to.equal(15);
      expect(result.y).to.equal(2);
    });
  });

  describe('subtract', () => {
    it('should return the Vector subtracted from Vector', () => {
      const result = new Vector(10, -5).subtract(new Vector(10, 5));

      expect(result.x).to.equal(0);
      expect(result.y).to.equal(-10);
    });

    it('should return the Vector subtracted from VectorLike object', () => {
      const result = new Vector(10, -5).subtract({ x: 10, y: 5 });

      expect(result.x).to.equal(0);
      expect(result.y).to.equal(-10);
    });

    it('should return the Vector subtracted from single number param', () => {
      const result = new Vector(10, -5).subtract(5);
  
      expect(result.x).to.equal(5);
      expect(result.y).to.equal(-10);
    });

    it('should return the Vector subtracted from two number params', () => {
      const result = new Vector(10, -5).subtract(5, 7);
  
      expect(result.x).to.equal(5);
      expect(result.y).to.equal(-12);
    });
  });

  describe('divide', () => {
    it('should return the Vector divided by Vector', () => {
      const result = new Vector(10, -5).divide(new Vector(2, 3));
  
      expect(result.x).to.equal(5);
      expect(result.y).to.equal(-5 / 3);
    });

    it('should return the Vector divided by VectorLike object', () => {
      const result = new Vector(10, -5).divide({ x: 2, y: 3 });
  
      expect(result.x).to.equal(5);
      expect(result.y).to.equal(-5 / 3);
    });

    it('should return the Vector divided by single number param', () => {
      const result = new Vector(10, -5).divide(2);

      expect(result.x).to.equal(5);
      expect(result.y).to.equal(-2.5);
    });

    it('should return the Vector divided by two number params', () => {
      const result = new Vector(10, -5).divide(2, 3);

      expect(result.x).to.equal(5);
      expect(result.y).to.equal(-5 / 3);
    });
  });

  describe('multiply', () => {
    it('should return the Vector multiplied by Vector', () => {
      const result = new Vector(10, -5).multiply(new Vector(2, 3));
  
      expect(result.x).to.equal(20);
      expect(result.y).to.equal(-15);
    });

    it('should return the Vector multiplied by VectorLike object', () => {
      const result = new Vector(10, -5).multiply({ x: 2, y: 3 });
  
      expect(result.x).to.equal(20);
      expect(result.y).to.equal(-15);
    });

    it('should return the Vector multiplied by single number param', () => {
      const result = new Vector(10, -5).multiply(2);
  
      expect(result.x).to.equal(20);
      expect(result.y).to.equal(-10);
    });

    it('should return the Vector multiplied by two number params', () => {
      const result = new Vector(10, -5).multiply(2, 3);
  
      expect(result.x).to.equal(20);
      expect(result.y).to.equal(-15);
    });
  });

  describe('getMagnitude', () => {
    it('should return the magitude of the vector', () => {
      const result = new Vector(10, 2).getMagnitude();

      expect(result).to.equal(Math.sqrt(104));
    });
  });

  describe('getDirection', () => {
    it('should return the normalised direction of the vector', () => {
      const result = new Vector(10, 2).getMagnitude();

      expect(result).to.equal(Math.sqrt(104));
    });
  });
});
