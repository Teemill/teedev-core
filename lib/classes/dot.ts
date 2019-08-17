import {
  clone,
  isArray,
  isPlainObject,
} from 'lodash';

export class Dot {
  public static get(
    path     : string | string[],
    object   : any | any[],
    delimiter: string = '.',
  ): any | any[] | undefined {
    path = clone(path);

    if (!isArray(path)) {
      path = path.split(delimiter);
    }
    
    if (isPlainObject(object)) {
      const key = path.shift();

      if (!key) {
        return object;
      }
      
      const value = object[key];

      return Dot.get(
        path,
        value,
        delimiter,
      );
    }

    if (isArray(object)) {
      return object
        .map((item) => Dot.get(
          path,
          item,
          delimiter,
        ));
    }

    if (
      !path ||
      path.length === 0
    ) {
      return object;
    }

    return undefined;
  }

  public static getMany(
    paths     : string[],
    object   : any | any[],
    delimiter: string = '.',
  ) {
    return paths.map((path) => Dot.get(
      path,
      object,
      delimiter,
    ));
  }
};
