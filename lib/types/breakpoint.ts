import {
  minBy,
  maxBy,
  orderBy,
} from 'lodash';

export type BreakpointSize = 'xl' | 'lg' | 'md' | 'sm' | 'xs';

export class Breakpoint {
  public size: BreakpointSize;
  public width: number;

  constructor(size: BreakpointSize, width: number) {
    this.size = size;
    this.width = width;
  }

  static get(width: number): Breakpoint
  static get(size: BreakpointSize): Breakpoint

  static get(arg: any): Breakpoint | undefined {
    switch (typeof arg) {
      case 'number':
        const orderedBreakpoints = orderBy(
          breakpoints,
          ['width'],
          ['asc'],
        );

        return orderedBreakpoints.reduce(
          (acc, breakpoint) => breakpoint.width < arg ? breakpoint : acc,
          orderedBreakpoints[0],
        );

      case 'string':
        return breakpoints.find(breakpoint => breakpoint.size === arg);
    
      default:
        return undefined;
    }
  }

  static smallest(): Breakpoint
  static smallest(breakpoints: Breakpoint[]): Breakpoint

  static smallest(arg?: Breakpoint[]): Breakpoint {
    if (
      !arg ||
      arg.length === 0
    ) {
      return minBy(breakpoints, 'width')!;
    }

    return minBy(arg, 'width')!;
  }

  static largest(): Breakpoint
  static largest(breakpoints: Breakpoint[]): Breakpoint

  static largest(arg?: Breakpoint[]): Breakpoint {
    if (
      !arg ||
      arg.length === 0
    ) {
      return maxBy(breakpoints, 'width')!;
    }

    return maxBy(arg, 'width')!;
  }

  equalTo(width: number): boolean {
    return this.width === width;
  }

  lessThan(width: number): boolean {
    return this.width < width;
  }

  greaterThan(width: number): boolean {
    return this.width > width;
  }
};

export const breakpoints: Breakpoint[] = [
  new Breakpoint('xs', 0),    // max 639px
  new Breakpoint('sm', 640),  // max 767px
  new Breakpoint('md', 768),  // max 1023px
  new Breakpoint('lg', 1024), // max 1279px
  new Breakpoint('xl', 1280), // max ?px
];
