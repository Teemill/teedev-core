"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _index = require("../index");

function round(value, decimals) {
  var multiple = Math.pow(10, decimals);
  return Math.round(value * multiple) / multiple;
}

function assertVectorLike(arg1, arg2) {
  if (arg1 instanceof Vector) {
    return arg1;
  } else if (typeof arg1 === 'number' && !arg2) {
    return {
      x: arg1,
      y: arg1
    };
  } else if (typeof arg1 === 'number' && typeof arg2 === 'number') {
    return {
      x: arg1,
      y: arg2
    };
  }

  return new Vector();
}

var Vector =
/*#__PURE__*/
function () {
  function Vector() {
    var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    (0, _classCallCheck2.default)(this, Vector);
    (0, _defineProperty2.default)(this, "x", void 0);
    (0, _defineProperty2.default)(this, "y", void 0);
    this.x = x;
    this.y = y;
  }

  (0, _createClass2.default)(Vector, [{
    key: "copy",
    value: function copy() {
      return new Vector(this.x, this.y);
    }
  }, {
    key: "add",
    value: function add(arg1, arg2) {
      var vector = assertVectorLike(arg1, arg2);
      this.x += vector.x;
      this.y += vector.y;
      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(arg1, arg2) {
      var vector = assertVectorLike(arg1, arg2);
      this.x -= vector.x;
      this.y -= vector.y;
      return this;
    }
  }, {
    key: "multiply",
    value: function multiply(arg1, arg2) {
      var vector = assertVectorLike(arg1, arg2);
      this.x *= vector.x;
      this.y *= vector.y;
      return this;
    }
  }, {
    key: "divide",
    value: function divide(arg1, arg2) {
      var vector = assertVectorLike(arg1, arg2);
      this.x /= vector.x;
      this.y /= vector.y;
      return this;
    }
  }, {
    key: "getMagnitude",
    value: function getMagnitude() {
      return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2));
    }
  }, {
    key: "getDirection",
    value: function getDirection() {
      return this.divide(this.getMagnitude());
    }
  }, {
    key: "getAngle",
    value: function getAngle() {
      return new _index.Angle(Math.atan2(this.y, this.x));
    }
  }, {
    key: "getCompassDirection",
    value: function getCompassDirection() {
      var direction = this.getAngle().toDegrees().angle;

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
  }, {
    key: "rotateAround",
    value: function rotateAround(vector, angle) {
      var a = angle.toRadians().angle;
      var xDiff = this.x - vector.x;
      var yDiff = this.y - vector.y;
      this.x = round(xDiff * Math.cos(a) - yDiff * Math.sin(a) + vector.x, 12);
      this.y = round(yDiff * Math.cos(a) - xDiff * Math.sin(a) + vector.y, 12);
      return this;
    }
  }]);
  return Vector;
}();

exports.default = Vector;