// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

exports.__esModule = true;

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _base = require('./base.js');

var _base2 = _interopRequireDefault(_base);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_Base) {
  (0, _inherits3.default)(_class, _Base);

  function _class() {
    (0, _classCallCheck3.default)(this, _class);
    return (0, _possibleConstructorReturn3.default)(this, _Base.apply(this, arguments));
  }

  _class.prototype.init = function init(http) {
    _Base.prototype.init.call(this, http);
    this.tactive = "promotion";
  };
  /**
   * index action
   * @return {Promise} []
   */


  _class.prototype.indexAction = function indexAction() {
    //auto render template file index_index.html
    return this.display();
  };

  /**
   * goods action
   * 商品促销
   */


  _class.prototype.goodsAction = function goodsAction() {
    this.end("商品促销");
  };

  /**
   * 订单促销
   */


  _class.prototype.orderAction = function orderAction() {
    this.end("订单促销");
  };

  /**
   * 捆绑销售
   */


  _class.prototype.bundingAction = function bundingAction() {
    this.end("捆绑销售");
  };

  /**
   * 团购
   */


  _class.prototype.tuanAction = function tuanAction() {
    this.end("团购");
  };

  /**
   * 限时抢购
   */


  _class.prototype.flashAction = function flashAction() {
    this.end("限时抢购");
  };

  /**
   * 代金卷
   */


  _class.prototype.voucherAction = function voucherAction() {
    this.end("代金卷");
  };

  return _class;
}(_base2.default);

exports.default = _class;
//# sourceMappingURL=promotion.js.map