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
     * 更新广告
     *
     * @param spaceid 广告位id
     * @returns {Promise.<void>}
     */

   async upad(spaceid){
       //获取广告模板
        let json,replace=[],adtemp='',info,setting;
       let space = await this.find({where:{spaceid:spaceid}});
       let temp = await this.model('ext_ad_temp').find({where:{name:space.type}});
        //console.log(temp);
        let match = temp.temp.match(/\[(\S+?)\]/g);
        if(!think.isEmpty(match)){
        if(temp.num==1&&temp.option==0){
         info = await this.model("ext_ad").where({spaceid:space.spaceid,status:1}).order("sort ASC,addtime DESC").find();
         if(!think.isEmpty(info.setting)){
            setting = JSON.parse(info.setting);
            setting[0].width=space.width;
            setting[0].height=space.height;
            json=JSON.stringify(setting[0]);
               for(let val of match){
                   val= val.replace(/(^\[)|(\]$)/g, "");
                   let param = val.split('|');
                   //console.log(param);
                   if(param[0]==="url"){
                       if(think.isEmpty(setting[0].url)){
                           replace.push("javascript:void(0)")
                       }else {
                           replace.push(setting[0][param[0]])
                       }
                   }else if(!think.isEmpty(param[1])){
                       replace.push(await call_user_func(param[1],setting[0][param[0]]));
                   }else {
                       replace.push(setting[0][param[0]])
                   }
               }
             adtemp = str_replace(match,replace,temp.temp);
         }else {

         }
           }else if(temp.num==1&&temp.option==1){
            info = await this.model("ext_ad").where({spaceid:space.spaceid,status:1}).order("sort ASC,addtime DESC").select();
            let loop = temp.temp.match(/\{loop\}([\S\s]*?){\/loop\}/);
            //let loop = temp.temp.split("{loop}");
            let loopmatch = loop[1].match(/\[(\S+?)\]/g);
            let looparr = [];
            let jsonarr=[]
            for(let v of info){
                if(!think.isEmpty(v.setting)){
                    setting = JSON.parse(v.setting);
                    setting[0].width=space.width;
                    setting[0].height=space.height;
                    console.log(setting);
                    jsonarr.push(setting[0])
                    json=JSON.stringify(jsonarr);
                    let reparr=[];
                    for(let val of loopmatch){
                        val= val.replace(/(^\[)|(\]$)/g, "");
                        let param = val.split('|');
                       //console.log(param);
                        if(param[0]=="url"){
                            console.log(22222222222)
                            if(think.isEmpty(setting[0].url)){
                                reparr.push("javascript:void(0)")
                            }else {
                                reparr.push(setting[0][param[0]])
                            }
                        }else if(!think.isEmpty(param[1])){
                            reparr.push(await call_user_func(param[1],setting[0][param[0]]));
                        }else {
                            reparr.push(setting[0][param[0]])
                        }
                    }
                    console.log(reparr);
                    let loopstr = str_replace(loopmatch,reparr,loop[1]);
                    looparr.push(loopstr);
                }
            }
            // console.log(looparr.join(""));
            adtemp = temp.temp.replace(loop[0], looparr.join(""));
            // console.log(adtemp);
        }


        }
        //更新本广告位的广告数量
        let items = await this.model('ext_ad').where({spaceid:space.spaceid}).count();
        await this.where({spaceid:space.spaceid}).update({code:adtemp,json:json,items:items});
        //清除广告缓存
        think.cache("all_ad",null);
       }

       async showad(spaceid){
               //let list ="22";
               let list = await think.cache("all_ad", () => {
                   return this.select();
               }, {timeout: 365 * 24 * 3600});
           //console.log(list);
           if(think.isEmpty(spaceid)){
                   return list;
               }else {
                   return think._.filter(list,{spaceid:Number(spaceid)});
               }

       }


}