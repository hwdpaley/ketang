// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';

var _nodeCrontab = require("node-crontab");

var _nodeCrontab2 = _interopRequireDefault(_nodeCrontab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fn = function fn() {
    //定时任务具体逻辑
    //调用一个 Action
    //订单在规定时间位付款自动作废方法
    think.http("/admin/crontab/cloa", true);
};

//1 分钟执行一次
// let jobId = crontab.scheduleJob("*/1 * * * *", fn);
// 开发环境下立即执行一次看效果
// if(think.env === "development"){
//     fn();
// }
//# sourceMappingURL=crontab.js.map