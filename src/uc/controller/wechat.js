// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';
import API from 'wechat-api';
export default class extends think.controller.base {
    init(http) {
        super.init(http);

    }
    async __before() {
            //网站配置
            this.setup = await this.model("setup").getset();
            this.api = new API(this.setup.wx_AppID, this.setup.wx_AppSecret);
        }
        /**
         * 判断是否登录
         * @returns {boolean}
         */
    async islogin() {
            //前台判断是否登录
            let user = await this.session('webuser');
            let res = think.isEmpty(user) ? false : user.uid;
            return res;

        }
        /**
         * 微信服务器验证
         * index action
         * @return {Promise} []
         */
    indexAction() {
        let echostr = this.get('echostr');
        return this.end(echostr);
    }
    reply(message) {
        this.http.res.reply(message);
    }

    //获取分类信息
    async category(id, field) {
            id = id || 0;
            field = field || "";
            if (think.isEmpty(id)) {
                //this.fail('没有指定数据分类！');
                this.http.error = new Error('没有指定数据分类！');
                return think.statusAction(702, this.http);
            }
            let cate = await this.model("category").info(id, field);
            //console.log(cate);
            if (cate && 1 == cate.status) {

                switch (cate.display) {
                    case 0:
                        //this.fail('该分类禁止显示')
                        this.http.error = new Error('该分类禁止显示！');
                        return think.statusAction(702, this.http);
                        break;
                        //TODO:更多分类显示状态判断
                    default:

                        return cate;
                }

            } else {

                //this.fail("分类不存在或者被禁用！");
                this.http.error = new Error('分类不存在或者被禁用！');
                return think.statusAction(702, this.http);
            }
        }
        //关键词消息回复
    async textAction() {
        console.log(this.http);
        let message = this.post();
        console.log("message-------------------" + message);

        let key = message.Content.trim();
        let kmodel = this.model('wx_keywords');
        let isKey = await kmodel.field('rule_id').where({ keyword_name: key }).find();
        if (!think.isEmpty(isKey)) {
            //是关键字
            let rulemodel = this.model('wx_keywords_rule');
            let replyliststr = await rulemodel.where({ id: isKey.rule_id }).getField('reply_id', true);
            let replylisttmp = replyliststr.split(',');
            let replylist = [];
            for (let i in replylisttmp) {
                if (replylisttmp[i] != '') {
                    replylist.push(replylisttmp[i]);
                }
            }
            if (!think.isEmpty(replylist)) {
                let randomi = parseInt(Math.random() * replylist.length);
                let replymodel = this.model('wx_replylist');
                let data = await replymodel.where({ id: replylist[randomi] }).getField('content', true);
                return this.reply(data);
            }
        }
        //普通消息回复
        let replymodel = this.model('wx_replylist');
        let datas = await replymodel.where({ reply_type: 2 }).order("create_time DESC").select();
        let data = datas[0];
        let content;
        switch (data.type) {
            case "text":
                content = data.content;
                break;
            case "news":
                content = JSON.parse(data.content);
                break;
        }
        this.reply(content);

    }

    //事件关注
    async eventAction() {
        let message = this.post();
        switch (message.Event) {

            case "subscribe": //首次关注
                console.log("首次关注------" + message.FromUserName);
                let userinfo = await getUser(this.api, message.FromUserName);
                console.log("userinfo-----------" + JSON.stringify(userinfo));
                // let member=await this.model("member").where({ username: userinfo.nickname }).find();
                // // console.log("member-----------" + JSON.stringify(member));
                // if (!think.isEmpty(member)) {
                //     userinfo.uid=member.id;
                // }else{
                //     userinfo.username=userinfo.nickname;
                //     userinfo.real_name=userinfo.nickname;
                //     userinfo.email=userinfo.nickname+'@qq.com';
                //     userinfo.password='7fe293a2a8994cca42668d5a37747d4f';
                //     // member=await this.model("member").add(userinfo);
                //     userinfo.uid=member;
                //     // console.log("member-----------" + JSON.stringify(member));
                // }
                let resuser =await this.model("wx_user").where({ openid: userinfo.openid }).find();
                if (think.isEmpty(resuser.openid)) {
                    await this.model("wx_user").add(userinfo);
                    console.log("添加，userinfo-----------" + JSON.stringify(userinfo));
                }else{
                    await this.model("wx_user").where({openid:userinfo.openid}).update(userinfo);
                    console.log("更新，userinfo-----------" + JSON.stringify(userinfo));
                }

                let datas = await this.model("wx_replylist").where({ reply_type: 1 }).order("create_time DESC").select();
                let data = datas[0];
                let content;
                switch (data.type) {
                    case "text":
                        content = data.content;
                        break;
                    case "news":
                        content = JSON.parse(data.content);
                        break;
                }
                // console.log("bieber_wx_url-------------"+this.cookie("bieber_wx_url"));
                this.reply(content);
                // await action("topic/index","index");
                // this.redirect(this.setup.wx_url);
                break;
            case "unsubscribe": //取消关注
                console.log("取消关注-------------");
                // let wx_user = await this.model("wx_user").where({ openid: message.FromUserName }).delete();
                // wx_user = await this.model("member").where({ openid: message.FromUserName }).delete();
                console.log("message------" + message.FromUserName);
                await this.session('wx_openid', null);
                break;
            case "CLICK": //click事件坚挺
                let res = await this.model("wx_material").find(message.EventKey);
                let news_item = JSON.parse(res.material_wx_content);
                let list = news_item.news_item;
                for (let v of list) {
                    v.picurl = v.thumb_url;
                }
                this.reply(list);
                //todo
                break;
            case "SCAN": //扫码事件监听
                //todo
                console.log(message);
                break;
            default:
                console.log(message);
                break;
        }
        // this.reply(JSON.stringify(message));
    }
    __call() {
        this.reply(DEFULT_AUTO_REPLY);
    }


    /**
     * 获取用户分组
     */
    groupsAction() {
            //let api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');
            // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
            let self = this;
            this.api.getGroups((err, result) => {
                if (!think.isEmpty(result)) {
                    //think.log(result['groups'],"test");
                    for (let val of result['groups']) {
                        think.log(val['name'], "test");
                    };
                    self.end(result);
                } else {
                    console.error('err' + err);
                }

            });
        }
        /**
         * 查询用户在哪个分组
         */
    getwithgroupAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        this.api.getWhichGroup('oVe9Ew0zHFp0up1CeNcK2J5RL4xs', (err, result) => {
            if (!think.isEmpty(result)) {
                think.log(result, "test");
                self.end(result);
            } else {
                console.error('err' + err);
            }

        });
    }

    /**
     * 创建用户分组
     */
    creategroupAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        this.api.createGroup('旅游', (err, result) => {
            if (!think.isEmpty(result)) {
                think.log(result, "test");
                self.end(result);
            } else {
                console.error('err' + err);
            }

        });
    }

    /**
     * 群发文本消息
     */
    masssendtextAction() {
            // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
            //let api = new API('wxe8c1b5ac7db990b6', 'ebcd685e93715b3470444cf6b7e763e6');
            let self = this;
            this.api.massSendText('你好，恭喜你中奖了,这是测试信息', ['oXJPVwCuRDHRshz1yz5t-1Fdh9Ig', 'oXJPVwA0peWnTbnx3aDytJtCwdeo'], (err, result) => {
                if (!think.isEmpty(result)) {
                    think.log(result, "masssendtext");
                    self.end(result);
                } else {
                    console.error('err' + err);
                }

            });
        }
        /**
         * 群发图文消息
         */
    masssendnewsAction() {
        //let api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        this.api.massSendNews('kiW60VzuoCNnoIgdpmrQ8mUaCeDHGOTg4z_ug1DtPkI', ['oXJPVwCuRDHRshz1yz5t-1Fdh9Ig', 'oXJPVwN4JY0Y3fAVDuvl3EWh2_uQ'], (err, result) => {
            //api.massSendNews('ys1SXTdWnZhTZQB77MODarSaJ36xfoTG15deo5aGM3eRvEiuT034AMaUocc66uq9','0',(err,result)=>{
            if (!think.isEmpty(result)) {
                think.log(result, "masssendnews");
                self.end(result);
            } else {
                console.error('err' + err);
            }

        });
    }

    /**
     * 获取永久素材列表
     */
    getmaterialsAction() {
        //let api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        this.api.getMaterials('image', 0, 10, (err, result) => {
            if (!think.isEmpty(result)) {
                think.log(result, "test");
                self.end(result);
            } else {
                console.error('err' + err);
            }

        });
    }

    /**
     * 上传永久素材（缩略图）
     */
    uploadmaterialAction() {

        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        //{"media_id":"Snt_yv6I9f5KMAJKz4GNZAjZSXJeIgZVbUgRey2STH8","url":"https://mmbiz.qlogo.cn/mmbiz/yNHpDQhqmZmaEjdMt6hokMa5ic2a8tjEmDp2tHVAxe3orww1bN4YIiayUBThKC9k3PKyr7OxeZ0vIklb2tMaKDXw/0?wx_fmt=jpeg"}
        this.api.uploadMaterial('D:\\webStorm\\CmsWing\\www\\static\\admin\\img\\m0.jpg', 'thumb', (err, result) => {
            //api.uploadThumbMaterial('D:\\webStorm\\CmsWing\\www\\static\\admin\\img\\m21.jpg',(err,result)=>{
            if (!think.isEmpty(result)) {
                think.log(result, "uploadmaterial");
                self.end(result);
            } else {
                console.error('err' + err);
            }

        });
    }

    /**
     * 获取永久素材
     */
    getmaterialAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        this.api.getMaterial('PW4hZzpj-j3qdr_hpRFsePOXn8w4YkAPcKfrOfnvVDCHcYZsp81YZcjLiUMiKg3s', (err, result) => {
            if (!think.isEmpty(result)) {
                think.log(result, "getmaterial");
                self.end(result);
            } else {
                console.error('err' + err);
            }

        });
    }

    /**
     * 获取临时素材
     */
    getmediaAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        this.api.getMedia('PW4hZzpj-j3qdr_hpRFsePOXn8w4YkAPcKfrOfnvVDCHcYZsp81YZcjLiUMiKg3s', (err, result) => {
            if (!think.isEmpty(result)) {
                think.log(result, "getmedia");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    }

    /**
     * 新增永久图文素材
     */
    uploadNewsMaterialAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        this.api.uploadNewsMaterial({
            "articles": [{
                "thumb_media_id": "_P6PWPwDdEROB-VD0RWrThuI-CfLgi3vm88mOWHvqtyAmU8Jp3UU1sNs2wfAaYf7",
                "author": "HH",
                "title": "Happy Day",
                "content_source_url": "www.qq.com",
                "content": "hello word",
                "digest": "test",
                "show_cover_pic": "1"
            }]
        }, (err, result) => {
            if (!think.isEmpty(result)) {
                think.log(result, "uploadNewsMaterial");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    }


    /**
     * 上传多媒体文件（图文）
     */
    uploadnewsAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        this.api.uploadNews({
            "articles": [{
                "thumb_media_id": "_P6PWPwDdEROB-VD0RWrThuI-CfLgi3vm88mOWHvqtyAmU8Jp3UU1sNs2wfAaYf7",
                "author": "HH",
                "title": "Happy Day",
                "content_source_url": "www.qq.com",
                "content": "hello word",
                "digest": "test",
                "show_cover_pic": "1"
            }]
        }, (err, result) => {
            if (!think.isEmpty(result)) {
                think.log(result, "uploadnews");
                self.end(result);
            } else {
                console.error('err' + err);
            }

        });
    }

    /**
     * 上传图文消息内的图片获取URL
     */
    uploadimageAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        this.api.uploadImage('D:\\webStorm\\CmsWing\\www\\static\\admin\\img\\a3.png', (err, result) => {
            if (!think.isEmpty(result)) {
                think.log(result, "uploadimag");
                self.end(result);
            } else {
                console.error('err' + err);
            }

        });
    }

    /**
     * 临时(获取thumb_media_id)
     */
    uploadmediaAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        this.api.uploadMedia('D:\\webStorm\\CmsWing\\www\\static\\admin\\img\\m0.jpg', 'thumb', (err, result) => {
            if (!think.isEmpty(result)) {
                think.log(result, "uploadmedia");
                self.end(result);
            } else {
                console.error('err' + err);
            }

        });
    }

    /**
     * 测试
     */
    async testAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        let self = this;
        let picpath = await this.model('picture').find(34);
        this.api.uploadMedia(think.ROOT_PATH + '/www/' + picpath.path, 'thumb', (err, result) => {
            if (!think.isEmpty(result)) {
                think.log(result, "getmaterial");
                self.end(result);
            } else {
                console.error('err' + err);
            }
        });
    }

    /**
     * 获取关注者列表
     */
    async getusersAction() {
            //let api = new API('wxec8fffd0880eefbe', 'a084f19ebb6cc5dddd2988106e739a07');
            // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
            let self = this;
            this.api.getFollowers((err, result) => {
                if (!think.isEmpty(result)) {

                    think.log(result, "getuser");
                    self.end(result['data']);
                } else {
                    Console.error('err' + err)
                }
            });
        }
        /**
         * 获取用户基本信息
         */

    async getuserinfoAction() {

        let getuserinfo = function(api, openid) {
            let deferred = think.defer();
            api.getUser({ openid: openid, lang: 'zh_CN' }, (err, result) => {
                if (!think.isEmpty(result)) {
                    think.log(result, "getuserinfo");
                    deferred.resolve(result);
                } else {
                    Console.error('err' + err)
                }
            });
            return deferred.promise;
        }
        let openid = await this.cache('getuserinfo');
        let result = await getuserinfo(this.api, openid);
        return result;
        // think.log(openid, "openid");
        // // let deferred = think.defer();
        // // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        // let self = this;
        // this.api.getUser({ openid: openid, lang: 'zh_CN' }, (err, result) => {
        //     if (!think.isEmpty(result)) {
        //         think.log(result, "getuserinfo");
        //         // this.session('getuserinfo',result);
        //         return self.end(result);
        //         // return result;
        //         // deferred.resolve(result);
        //         // return deferred.promise;
        //     } else {
        //         Console.error('err' + err)
        //     }
        //     // return deferred.promise;
        // });
    }

    /**
     * 批量获取用户基本信息
     */
    async getusersinfoAction() {
        // let api = new API('wx31783e0b591a7f4b', 'c4cca2d1622fd3e6f70aa78d2621db3b');
        // let self = this;//tina,tony
        this.api.batchGetUsers(['oXJPVwCuRDHRshz1yz5t-1Fdh9Ig', 'oXJPVwN4JY0Y3fAVDuvl3EWh2_uQ'], (err, result) => {
            if (!think.isEmpty(result)) {
                think.log(result, "getusersinfo");
                self.end(result);
            } else {
                Console.error('err' + err)
            }
        });
    }


}
