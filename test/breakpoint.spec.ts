import 'mocha';

import { expect } from 'chai';
import { Breakpoint } from '../lib';

describe('Breakpoint Type', () => {
  describe('constructor', () => { 
    it('new instance with initial state', () => {
      const result = new Breakpoint('xs', 600);
  
      expect(result.size).to.equal('xs');
      expect(result.width).to.equal(600);
    });
  });

  describe('get', () => { 
    it('should return breakpoint for a given width', () => {
      let result = Breakpoint.get(700);

      expect(result.size).to.equal('sm');
      expect(result.width).to.equal(640);

      result = Breakpoint.get(600);
  
      expect(result.size).to.equal('xs');
      expect(result.width).to.equal(0);

      result = Breakpoint.get(9999);
  
      expect(result.size).to.equal('xl');
      expect(result.width).to.equal(1280);
    });

    it('should return breakpoint for a given size', () => {
      let result = Breakpoint.get('sm');
  
      expect(result.size).to.equal('sm');
      expect(result.width).to.equal(640);

      result = Breakpoint.get('xs');
  
      expect(result.size).to.equal('xs');
      expect(result.width).to.equal(0);

      result = Breakpoint.get('xl');
  
      expect(result.size).to.equal('xl');
      expect(result.width).to.equal(1280);
    });
  });

  describe('smallest', () => { 
    it('should return the smallest breakpoint from standard set', () => {
      const result = Breakpoint.smallest();

      expect(result.size).to.equal('xs');
    });

    it('should return the smallest breakpoint from passed set', () => {
      let result = Breakpoint.smallest([
        Breakpoint.get('md'),
        Breakpoint.get('sm'),
        Breakpoint.get('xl'),
      ]);

      expect(result.size).to.equal('sm');

      result = Breakpoint.smallest([
        Breakpoint.get('xl'),
        Breakpoint.get('lg'),
        Breakpoint.get('xl'),
      ]);

      expect(result.size).to.equal('lg');
    });
  });

  describe('largest', () => { 
    it('should return the largest breakpoint from standard set', () => {
      const result = Breakpoint.largest();

      expect(result.size).to.equal('xl');
    });

    it('should return the largest breakpoint from passed set', () => {
      let result = Breakpoint.largest([
        Breakpoint.get('md'),
        Breakpoint.get('sm'),
        Breakpoint.get('xs'),
      ]);

      expect(result.size).to.equal('md');

      result = Breakpoint.largest([
        Breakpoint.get('xl'),
        Breakpoint.get('lg'),
        Breakpoint.get('lg'),
      ]);

      expect(result.size).to.equal('xl');
    });
  });

  describe('equalTo', () => { 
    it('should check if the breakpoint has a width equal to value', () => {
      expect(
        new Breakpoint('sm', 600)
          .equalTo(600),
      ).to.be.true;

      expect(
        new Breakpoint('sm', 600)
          .equalTo(500),
      ).to.be.false;
    });
  });
  
  describe('lessThan', () => { 
    it('should check if the breakpoint has a width less than value', () => {
      expect(
        new Breakpoint('sm', 600)
          .lessThan(700),
      ).to.be.true;

      expect(
        new Breakpoint('sm', 600)
          .lessThan(500),
      ).to.be.false;
    });
  });

  describe('greaterThan', () => { 
    it('should check if the breakpoint has a width greater than value', () => {
      expect(
        new Breakpoint('sm', 600)
          .greaterThan(500),
      ).to.be.true;

      expect(
        new Breakpoint('sm', 600)
          .greaterThan(700),
      ).to.be.false;
    });
  });
});
