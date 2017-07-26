'use strict';

var _thinkWechat = require('think-wechat');

var _thinkWechat2 = _interopRequireDefault(_thinkWechat);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

think.middleware('parse_wechat', (0, _thinkWechat2.default)({
  pathname: 'uc/wechat', //默认，可配置为其他路径，与公众号对应的服务器URL设置一致
  wechat: {
    token: think.config("setup.wx_Token"),
    appid: think.config("setup.wx_AppID"),
    encodingAESKey: 'dPcV8ASnbOiBNSi0hdZyEvf27459CY84AdTZcbqoR58'
  }
})); // +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
/**
 * this file will be loaded before server started
 * you can register middleware
 * https://thinkjs.org/doc/middleware.html
 */

/**
 * 
 * think.middleware('xxx', http => {
 *   
 * })
 * 
 */
//import debugToolbar from 'think-debug-toolbar';
//
//let conf = {
//    panels: ['request', 'session', 'view', 'template', 'response', 'config', 'info'],
//    depth: 4,
//    extra_attrs: '',
//    disabled: false,
//    sort: false
//};
//
//think.middleware('debug_toolbar', debugToolbar(conf));
//# sourceMappingURL=middleware.js.map