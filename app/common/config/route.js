"use strict";

exports.__esModule = true;
// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
/**
 * Created by Arterli on 2016/1/24.
 */
exports.default = {
    admin: { //系统后台
        reg: /^admin/
    },
    uc: { //前台用户中心
        reg: /^uc/
    },
    mod: { //模型
        reg: /^mod/
    },
    ext: { //扩展
        reg: /^ext/
    },
    api: { //api
        reg: /^api/
    },
    //默认走topic
    topic: {//网站信息统一输出口

    }
};
//# sourceMappingURL=route.js.map