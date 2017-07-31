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
     * 获取用户组并进行缓存
     * @returns {Promise}
     */
   async getgroup(map={}){
       let list = await think.cache("all_member_group", () => {
           return this.select();
       }, {timeout: 365 * 24 * 3600});
       if(think.isEmpty(map)){
           return list;
       }else {
           return think._.filter(list, map);
       }
    }
    async getDpName(map={}){
      let name= this.where(map).field('name').find();
      return name;
       // let list = await think.cache("dp_Name", () => {
       //      let name= this.where(map).field('name').find();
       //     return name;
       // }, {timeout: 365 * 24 * 3600});
       // // console.log("dp_Name-------" + JSON.stringify(list));
       // if(think.isEmpty(map)){
       //     return list;
       // }else {
       //      // let aa=think._.filter(list, map);
       //      let name= this.where(map).field('name').find();
       //      await think.cache("dp_Name",name, {timeout: 365 * 24 * 3600});
       //      console.log("name-------" + JSON.stringify(name));
       //     return name;
       // }
    }
    async get_dpuser(groupid) {
        let result = await think.model('mysql', think.config("db")).query(`SELECT * FROM bb_member_group where FIND_IN_SET(groupid, getChildLst(`+groupid+`));`);
        return result;
    }
    async get_dpcount(groupid) {
        let result = await think.model('mysql', think.config("db")).query(`SELECT count(*) as count FROM bb_member_group where FIND_IN_SET(groupid, getChildLst(`+groupid+`));`);
        // console.log("result-------" + JSON.stringify(result));
        return result[0].count-1;
    } 
}