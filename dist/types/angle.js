"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var degreesToRadians = Math.PI / 180;
var radiansToDegrees = 180 / Math.PI;

var Angle =
/*#__PURE__*/
function () {
  function Angle() {
    var angle = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var unit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'degrees';
    (0, _classCallCheck2.default)(this, Angle);
    (0, _defineProperty2.default)(this, "angle", void 0);
    (0, _defineProperty2.default)(this, "unit", void 0);
    this.angle = angle;
    this.unit = unit;
  }

  (0, _createClass2.default)(Angle, [{
    key: "add",
    value: function add(value) {
      if (value instanceof Angle) {
        this.angle += value.angle;
      } else if (typeof value === 'number') {
        this.angle += value;
      }

      return this;
    }
  }, {
    key: "subtract",
    value: function subtract(value) {
      if (value instanceof Angle) {
        this.angle -= value.angle;
      } else if (typeof value === 'number') {
        this.angle -= value;
      }

      return this;
    }
  }, {
    key: "multiply",
    value: function multiply(value) {
      this.angle *= value;
      return this;
    }
  }, {
    key: "divide",
    value: function divide(value) {
      this.angle /= value;
      return this;
    }
  }, {
    key: "toDegrees",
    value: function toDegrees() {
      this.angle = this.degrees;
      return this;
    }
  }, {
    key: "toRadians",
    value: function toRadians() {
      this.angle = this.radians;
      return this;
    }
  }, {
    key: "value",
    set: function set(value) {
      this.angle = value;
    },
    get: function get() {
      return this.angle;
    }
  }, {
    key: "radians",
    get: function get() {
      return this.angle * degreesToRadians;
    }
  }, {
    key: "degrees",
    get: function get() {
      return this.angle * radiansToDegrees;
    }
  }]);
  return Angle;
}();

exports.default = Angle;