'use strict';

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
/**
 * this file will be loaded before server started
 * you can define global functions used in controllers, models, templates
 */

/**
 * use global.xxx to define global functions
 *
 * global.fn1 = function(){
 *
 * }
 * 
 *global.xxx = async () => {
 *   let data = await Promise.resolve(111)
 *}
 */

/**
 * 获取模型字段信息 
 * @param model_id 模型id 或 模型名称
 * @param id 数据id
 * @param field 字段
 * @param return 整条数据或字段数据
 * @author arterli <arterli@qq.com>
 */
/* global getmodelfield */
global.getmodelfield = function () {
  var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(model_id, id, field) {
    var res, table, modelinfo;
    return _regenerator2.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            res = void 0;
            _context.next = 3;
            return think.model('model', think.config('db')).get_table_name(model_id);

          case 3:
            table = _context.sent;
            _context.next = 6;
            return think.model(table, think.config('db')).find(id);

          case 6:
            modelinfo = _context.sent;

            if (!think.isEmpty(field)) {
              res = modelinfo[field];
            } else {
              res = modelinfo;
            }
            return _context.abrupt('return', res);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 获取模型字段
 * @param model_id
 * @param field
 * @returns {*}
 */
global.get_model = function () {
  var _ref2 = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(model_id, field) {
    return _regenerator2.default.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return think.model('model', think.config('db')).get_model(model_id, field);

          case 2:
            return _context2.abrupt('return', _context2.sent);

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, undefined);
  }));

  return function (_x4, _x5) {
    return _ref2.apply(this, arguments);
  };
}();
//# sourceMappingURL=model.js.map