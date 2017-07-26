// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

'use strict';
/**
 * model
 */

exports.__esModule = true;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_think$model$base) {
    (0, _inherits3.default)(_class, _think$model$base);

    function _class() {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, _think$model$base.apply(this, arguments));
    }

    /**
     * 获取用户组并进行缓存
     * @returns {Promise}
     */
    // async getgroup(map={}){
    //     let list = await think.cache("all_member_group", () => {
    //         return this.select();
    //     }, {timeout: 365 * 24 * 3600});
    //     if(think.isEmpty(map)){
    //         return list;
    //     }else {
    //         return think._.filter(list, map);
    //     }
    //  }
    _class.prototype.get_rolename = function () {
        var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(uid) {
            var role_id, name;
            return _regenerator2.default.wrap(function _callee$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            uid = uid || 0;
                            //TODO 缓存处理续

                            _context.next = 3;
                            return this.model('auth_user_role').where({ user_id: uid }).field("role_id").find();

                        case 3:
                            role_id = _context.sent;
                            _context.next = 6;
                            return this.field('desc').find(role_id.role_id);

                        case 6:
                            name = _context.sent;
                            return _context.abrupt('return', name.desc);

                        case 8:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, _callee, this);
        }));

        function get_rolename(_x) {
            return _ref.apply(this, arguments);
        }

        return get_rolename;
    }();

    return _class;
}(think.model.base);

exports.default = _class;
//# sourceMappingURL=auth_role.js.map