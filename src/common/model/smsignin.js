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
export default class extends think.model.base {
    /**
     *TODO
     * @returns {*}
     */
    async checksmignin() {
        let now1h = new Date().getTime() - 3600 * 1000;
        let sms = await this.where({ now: ["<", now1h] }).select();
        if (!think.isEmpty(sms)) {
            console.log("now1h--------" + JSON.stringify(sms));
            let dd = [];
            for (let sm of sms) {
                dd.push(sm.id);
            }
            await this.where({ id: ["IN", dd] }).delete();
        }
        return true;
    }
}