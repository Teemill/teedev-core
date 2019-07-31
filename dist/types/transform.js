"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

require("core-js/modules/es.array.concat");

require("core-js/modules/es.object.assign");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _index = require("../index");

var Transform =
/*#__PURE__*/
function (_Matrix) {
  (0, _inherits2.default)(Transform, _Matrix);

  function Transform() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2.default)(this, Transform);

    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(Transform)).call.apply(_getPrototypeOf2, [this].concat(params)));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "stack", void 0);
    _this.stack = [];
    return _this;
  }

  (0, _createClass2.default)(Transform, [{
    key: "push",
    value: function push() {
      this.stack.push(this.copy());
    }
  }, {
    key: "pop",
    value: function pop() {
      Object.assign(this, this.stack.pop());
      return this;
    }
  }]);
  return Transform;
}(_index.Matrix);

exports.default = Transform;