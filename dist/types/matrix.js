"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

// [a c e]
// [b d f]
// [0 0 1]
var Matrix =
/*#__PURE__*/
function () {
  function Matrix() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var c = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var d = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    var e = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var f = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    (0, _classCallCheck2.default)(this, Matrix);
    (0, _defineProperty2.default)(this, "m11", void 0);
    (0, _defineProperty2.default)(this, "m12", void 0);
    (0, _defineProperty2.default)(this, "m13", void 0);
    (0, _defineProperty2.default)(this, "m21", void 0);
    (0, _defineProperty2.default)(this, "m22", void 0);
    (0, _defineProperty2.default)(this, "m23", void 0);
    (0, _defineProperty2.default)(this, "m31", void 0);
    (0, _defineProperty2.default)(this, "m32", void 0);
    (0, _defineProperty2.default)(this, "m33", void 0);
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

  (0, _createClass2.default)(Matrix, [{
    key: "copy",
    value: function copy() {
      return new Matrix(this.m11, this.m12, this.m21, this.m22, this.m31, this.m32);
    }
  }, {
    key: "translate",
    value: function translate(vector) {
      this.m31 += this.m11 * vector.x + this.m21 * vector.y;
      this.m32 += this.m12 * vector.x + this.m22 * vector.y;
      return this;
    }
  }, {
    key: "scale",
    value: function scale(vector) {
      this.m11 *= vector.x;
      this.m12 *= vector.x;
      this.m21 *= vector.y;
      this.m22 *= vector.y;
      return this;
    }
  }, {
    key: "rotate",
    value: function rotate(angle) {
      if (angle.value !== 0) {
        var cosTheta = Math.cos(angle.value);
        var sinTheta = Math.sin(angle.value);
        var m11 = this.m11,
            m12 = this.m12,
            m21 = this.m21,
            m22 = this.m22;
        this.m11 = m11 * cosTheta - m12 * sinTheta;
        this.m12 = m12 * cosTheta + m11 * sinTheta;
        this.m21 = m21 * cosTheta - m22 * sinTheta;
        this.m22 = m22 * cosTheta + m21 * sinTheta;
      }

      return this;
    }
  }, {
    key: "inverse",
    value: function inverse() {
      this.m11 *= -1;
      this.m12 *= -1;
      this.m21 *= -1;
      this.m22 *= -1;
      return this;
    }
  }]);
  return Matrix;
}();

exports.default = Matrix;