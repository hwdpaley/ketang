// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------

'use strict';

import Base from './base.js';
import pingpp from 'pingpp';
import http from 'http';
import fs from 'fs';
import API from 'wechat-api';
import JSSDK from './jssdk.js';
export default class extends Base {
    async __before() {
        //网站配置
        // AppID  美媒课堂  wxb2f228dd2a965317
        // ec9b5b93eb0f7b1d6a32b03e9e2bcf7c
        this.setup = await this.model("setup").getset();
        this.api = new API(this.setup.wx_AppID, this.setup.wx_AppSecret);
        this.jssdk = JSSDK; //new JSSDK(this.setup.wx_AppID, this.setup.wx_AppSecret);
        this.jssdk.setAppid(this.setup.wx_AppID, this.setup.wx_AppSecret);

        // let uurl = this.setup.wx_url + this.http.url;
        // console.log("url-------------" + uurl);
        // this.assign("wxhttp", this.setup.wx_url);
        // if (is_weixin(this.userAgent())) {
        //     await this.oauthAction();
        //     let aa = function(jssdk, url) {
        //         let deferred = think.defer();
        //         jssdk.getSignPackage(url, (err, signPackage) => {
        //             if (!think.isEmpty(signPackage)) {
        //                 deferred.resolve(signPackage);
        //             } else {
        //                 console.error(err);
        //             }
        //         });
        //         return deferred.promise;
        //     }
        //     let signPackage = await aa(this.jssdk, uurl);
        //     // console.log(signPackage);
        //     this.assign("signPackage", signPackage);

        // }else{
        //     return this.display('no');
        // }
    }
    /**
     * index action
     * @return {Promise} []
     */
    indexAction() {
        //auto render template file index_index.html
        return this.display();
    }
    async oauthAction() {
        //判断是否是微信浏览器
        //微信公众账号内自动登陆
        let openid = await this.session("wx_openid");
        //openid =null;// await this.session("wx_openid",null);
        console.log("openid oauthAction--------" + openid);
        if (is_weixin(this.userAgent()) && (think.isEmpty(openid) || typeof openid == 'undefined')) {
            // 先把url暂存起来
            console.log("openid bieber_wx_url--------"+JSON.stringify(this.http.url) );
            this.cookie("bieber_wx_url", this.http.url);
            var oauthUrl = pingpp.wxPubOauth.createOauthUrlForCode(this.setup.wx_AppID, `${this.setup.wx_url}/uc/kanjia/getopenid?showwxpaytitle=1`, true);
            // console.log("oauthAction-----------" + oauthUrl)
            this.redirect(oauthUrl);
        }
        

    }
    async oauth11Action() {
        //判断是否是微信浏览器
        //微信公众账号内自动登陆
        let openid = await this.session("wx_openid");
        //openid =null;// await this.session("wx_openid",null);
        console.log("oauthAction 11 --------" + openid);
        if (is_weixin(this.userAgent()) && (think.isEmpty(openid) || typeof openid == 'undefined')) {
            // 先把url暂存起来
            this.cookie("bieber_wx_url", this.http.url);
            var oauthUrl = pingpp.wxPubOauth.createOauthUrlForCode(this.setup.wx_AppID, `${this.setup.wx_url}/uc/kanjia/getopenid?showwxpaytitle=1`, true);
            // console.log("oauthAction-----------" + oauthUrl)
            this.redirect(oauthUrl);
        }
        let userinfo = await getUser(this.api, openid);
        console.log("微信 userinfo oauthAction 11 -------------" + JSON.stringify(userinfo));
        //如果没有关注先跳到关注页面
        if (userinfo.subscribe == 0) {

            console.log("关注美媒课堂")
            this.redirect('/uc/kanjia/follow');
            return false;
        };
        if (!think.isEmpty(userinfo.openid)) {


            userinfo.subscribe_time = new Date().getTime();
            let wx_user = await this.model("wx_user").where({ openid: openid }).find();
            if (think.isEmpty(wx_user)) {
                //后台没有微信数据？还没有关注过，先记录下来
                let member = await this.model("member").where({ openid: openid }).find();
                // console.log("member-----------" + JSON.stringify(member));
                if (!think.isEmpty(member)) {
                    userinfo.uid = member.id;
                } else {
                    userinfo.username = userinfo.nickname;
                    userinfo.real_name = userinfo.nickname;
                    userinfo.email = userinfo.nickname + '@qq.com';
                    userinfo.password = '7fe293a2a8994cca42668d5a37747d4f';
                    member = await this.model("member").add(userinfo);
                    userinfo.uid = member;
                    // console.log("member-----------" + JSON.stringify(member));
                }
                await this.model("wx_user").add(userinfo);
                this.redirect("/uc/kanjia/signin");
            } else {

                //检查微信号是否跟网站会员绑定
                if (think.isEmpty(wx_user.uid)) {
                    // 没绑定跳转绑定页面
                    // this.redirect("/uc/weixin/signin");
                    let member = await this.model("member").where({ openid: userinfo.openid }).find();
                    // console.log("member-----------" + JSON.stringify(member));
                    if (!think.isEmpty(member)) {
                        userinfo.uid = member.id;
                    } else {
                        userinfo.username = userinfo.nickname;
                        userinfo.real_name = userinfo.nickname;
                        userinfo.email = userinfo.nickname + '@qq.com';
                        userinfo.password = '7fe293a2a8994cca42668d5a37747d4f';
                        member = await this.model("member").add(userinfo);
                        userinfo.uid = member;
                        // console.log("member-----------" + JSON.stringify(member));
                    }
                    await this.model("wx_user").where({ openid: openid }).update(userinfo);
                    this.redirect("/uc/kanjia/signin");
                } else

                {
                    //更新微信头像
                    let filePath = think.RESOURCE_PATH + '/upload/avatar/' + wx_user.uid;
                    think.mkdir(filePath)
                    await this.spiderImage(userinfo.headimgurl, filePath + '/avatar.png')
                    //绑定直接登陆
                    let last_login_time = await this.model("member").where({ id: wx_user.uid }).getField("last_login_time", true);
                    userinfo = await this.model("member").where({ id: wx_user.uid }).find();
                    let isVip = await this.model("member").get_vip(wx_user.id);
                    let wx_userInfo = {
                        'uid': wx_user.uid,
                        'username': userinfo.username,
                        'last_login_time': last_login_time,
                        'real_name': userinfo.real_name,
                        'isVip': isVip,
                        'groupid': userinfo.groupid
                    };
                    let now = await this.cookie('now');
                    await this.model('smsignin').where({ now: now }).update({ name: userinfo.mobile, pass: userinfo.password });
                    console.log("webuser 11-------------ok," + JSON.stringify(wx_userInfo));
                    await this.session('webuser', wx_userInfo);
                    this.redirect('/uc/kanjia/follow');
                    // this.redirect("/");
                    return false;
                }
            }
        }
        // else{
        //     let wx_user = await this.model("wx_user").where({ openid: openid }).find();
        //     if (think.isEmpty(wx_user)||think.isEmpty(wx_user.uid)) {
        //         if (think.isEmpty(wx_user)){
        //             let userinfo = await getUser(this.api, openid);
        //             userinfo.username=userinfo.nickname;
        //             userinfo.real_name=userinfo.nickname;
        //             userinfo.email=userinfo.nickname+'@qq.com';
        //             userinfo.password='7fe293a2a8994cca42668d5a37747d4f';
        //             await this.model("wx_user").add(userinfo);
        //         }
        //         // this.redirect("/uc/kanjia/signin");
        //     }
        // }

    }
    /**
     * 获取微信公众账号用户信息并保存到本地库
     */
    async getusersAction(){
        // this.meta_title="获取粉丝信息";
        let user_model = this.model('wx_user');
        let api = new API(this.setup.wx_AppID, this.setup.wx_AppSecret);
        let self = this;
        //获取关注者列表
        let users = function(api) {
            let deferred = think.defer();
            api.getFollowers((err,result)=>{
                if(!think.isEmpty(result)){
                   deferred.resolve(result);
                }else{
                    Console.error('err'+err)
                } 
            });
            return deferred.promise;
        }
        let res = await users(api);
        console.log("users----------"+JSON.stringify(res));
        let useropenid = res['data']['openid'];
        let count = res['count'];
        //self.end(useropenid);
        //think.log(res);
        //批量获取用户基本信息
        let isadd = false;
        let tmp_openids = [];
        for(let i=0;i<count;i++){
            tmp_openids.push(useropenid[i]);
            if((i+1)%100 == 0 || i == (count-1)){
                //think.log('dd','aaa');
                 let userinfo = function(api) {
                    let deferinfo = think.defer();
                    api.batchGetUsers(tmp_openids,(err,result)=>{
                        if(!think.isEmpty(result)){
                        deferinfo.resolve(result);
                        }else{
                            Console.error('err'+err);
                        } 
                    });
                    return deferinfo.promise;
                }
                let resusers = await userinfo(api);
                let resinfo = resusers['user_info_list'];
                //console.log(resusers);
                //return false;
               //self.end(resinfo);
                console.log("开始：")
               for (let key in resinfo) {
                       let element = resinfo[key];
                       //self.end(element.openid);
                       console.log('-------------'+element.openid);
                       //let addres = await user_model.add(element);
                       //let nickname = element.nickname.replace(/(\\x[a-fA-F0-9]{2})*/g, ' ');
                       //let nickname = element.nickname.replace(/[\x80-\xfe]*/g, ' ');
                       //let nickname = removeFourChar(element.nickname);
                       let subscribe_time = element.subscribe_time*1000;
                       //element.nickname = nickname;
                       element.subscribe_time =subscribe_time;
                       
                       let addres = await user_model.thenAdd(element,{openid:element.openid});
                       console.log(addres);
                       if(addres.type=='exist'){
                           await user_model.where({openid:element.openid}).update(element);
                           isadd = true;
                       }
               }
               tmp_openids = [];
            }
        }
        // if(isadd){
        //     this.success({name:"操作成功！",url:"/admin/mpbase/userlist"});
        // }else{
        //     this.fail("error");
        // }
    }
    //用微信客户端获取getopenid
    async getopenidAction() {
        //获取用户openid
        let code = this.get("code");
        // console.log(code);
        //获取openid
        let getopenid = () => {
            let deferred = think.defer();
            pingpp.wxPubOauth.getOpenid(this.setup.wx_AppID, this.setup.wx_AppSecret, code, function(err, openid) {
                //console.log(openid);
                deferred.resolve(openid);
                // ...
                // pass openid to extra['open_id'] and create a charge
                // ...
            });
            return deferred.promise;
        };
        let openid = await getopenid();
        console.log("getopenid openid-------------" + JSON.stringify(openid));
        //9think.log(think.isEmpty(openid));
        let userinfo = await getUser(this.api, openid);
        console.log("getopenid  userinfo-------------" + JSON.stringify(userinfo));

        //如果没有关注先跳到关注页面，如果没获取到信息，则去微信号上同步一下
        if (userinfo.subscribe == 0) 
        {
            console.log("getusersAction-------------" + JSON.stringify(openid));
            await this.getusersAction();
            let wx_user = await this.model("wx_user").where({ openid: openid }).find();
            if (think.isEmpty(wx_user)) {
                this.redirect('/uc/kanjia/follow');
                return false;
            }
            userinfo = wx_user;
            console.log("getusers  userinfo-------------" + JSON.stringify(userinfo));
           // console.log(1111111111111)
           // this.redirect('/uc/kanjia/follow');
           // return false;

        };
        //userinfo.subscribe_time = userinfo.subscribe_time * 1000;
        userinfo.subscribe_time = new Date().getTime();
        let wx_user = await this.model("wx_user").where({ openid: openid,subscribe:1 }).find();

        //存储Openid
        await this.session('wx_openid', openid);
        if (think.isEmpty(wx_user)) {
            wx_user = await this.model("wx_user").where({ openid: openid }).getField('id',true);
            if(!think.isEmpty(wx_user)){
                await this.model("wx_user").where({ openid: openid }).update(userinfo);
            }else{
                await this.model("wx_user").add(userinfo);
            }
        } 
        this.redirect(this.cookie("bieber_wx_url"));
        
    }

    /**
     * 没有关注提示关注
     */
    async followAction() {
        //console.log(this.setup)
        //创建关注二维码
        //TODO
        // let titck =await createLimitQRCode(this.api,1);
        // console.log(titck);
        let res = await createLimitQRCode(this.api, 100);
        let qrcod = this.api.showQRCodeURL(res.ticket);
        this.assign("qrurl", qrcod);
        console.log("qrurl============" + qrcod);
        //think.log(qrcod);
        // this.end(qrcod);
        this.meta_title = `扫码关注`;
        //判断浏览客户端
        if (checkMobile(this.userAgent())) {
            return this.display(`mobile/${this.http.controller}/${this.http.action}`);
        } else {
            return this.display();
        }
    }

    /**
     * 微信账号与网站会员绑定
     */
    async signinAction() {
        // await this.session('wx_openid',"o33lBt0Pz3rEXUARWtUUO5GxuUG0");
        let open_id;
        if (think.isEmpty(this.cookie("wx_openid"))) {
            open_id = await this.session("wx_openid");
            this.cookie("wx_openid", open_id);
        } else {
            open_id = this.cookie("wx_openid");
        }

        //清除openid，如果中途失败，可重新激活注册流程
        await this.session('wx_openid', null);
        let wx_info = await this.model("wx_user").where({ openid: open_id }).find();
        this.assign("wx_info", wx_info);
        this.meta_title = "完善信息";
        this.assign("openid", open_id);
        this.assign("headimgurl", wx_info.headimgurl)
        //todo
        console.log("signinAction----" + `mobile/${this.http.controller}/${this.http.action}`);
        if (checkMobile(this.userAgent())) {
            return this.display(`mobile/${this.http.controller}/phone`);
        } else {
            return this.display();
        }
        // this.end("网站会员绑定页面")
    }
    /**完善资料绑定 */
    async organizingAction() {
        let data = this.post();
        //验证
        let res;
        if (think.isEmpty(data.username)) {
            return this.fail("用户昵称不能为空！");
        } else {
            res = await this.model("member").where({ username: ltrim(data.username) }).find();
            if (!think.isEmpty(res)) {
                return this.fail("用户昵称已存在，请重新填写！")
            }
        }
        if (think.isEmpty(data.mobile)) {
            return this.fail("手机号码不能为空！")
        } else {
            res = await this.model("member").where({ mobile: data.mobile }).find();
            if (!think.isEmpty(res)) {
                return this.fail("手机号码已存在，请重新填写！")
            }
        }
        if (think.isEmpty(data.email)) {
            return this.fail("电子邮箱不能为空！")
        } else {
            res = await this.model("member").where({ email: data.email }).find();
            if (!think.isEmpty(res)) {
                return this.fail("电子邮箱已存在，请重新填写！")
            }
        }
        if (think.isEmpty(data.password) && think.isEmpty(data.password2)) {
            return this.fail("密码不能为空！")
        } else {

            if (data.password != data.password2) {
                return this.fail("两次输入的密码不一致，请重新填写！")
            }
        }
        data.status = 1;
        data.reg_time = new Date().valueOf();
        data.reg_ip = _ip2int(this.ip());
        data.password = encryptPassword(data.password);
        let reg = await this.model("member").add(data);

        if (!think.isEmpty(reg)) {
            //用户副表
            await this.model("wx_user").where({ openid: data.openid }).update({ uid: reg });
            //更新微信头像
            let filePath = think.RESOURCE_PATH + '/upload/avatar/' + reg;
            think.mkdir(filePath)
            await this.spiderImage(data.headimgurl, filePath + '/avatar.png')
        }
        console.log(data);
        await this.model("member").autoLogin({ id: reg }, this.ip()); //更新用户登录信息，自动登陆
        let wx_userInfo = {
            'uid': reg,
            'username': data.username,
            'last_login_time': data.reg_time,
        };
        await this.session('webuser', wx_userInfo);
        //成功后储存opid,防止无限登陆
        await this.session('wx_openid', data.openid);
        this.cookie('wx_openid', null);
        return this.success({ name: "绑定成功", url: "/uc/index" });


    }
    async organizingphoneAction() {
        let data = this.post();
        //验证
        let res;
        let reg;
        if (think.isEmpty(data.username)) {
            return this.fail("用户昵称不能为空！");
        } else {
            // res = await this.model("member").where({ username: ltrim(data.username) }).find();
            // if (!think.isEmpty(res)) {
            //     return this.fail("用户昵称已存在，请重新填写！")
            // }
        }
        if (think.isEmpty(data.mobile)) {
            return this.fail("手机号码不能为空！")
        } else {
            // res = await this.model("wx_user").where({ phone: data.mobile }).find();
            // if (!think.isEmpty(res)) {
            //     return this.fail("手机号码已存在，请重新填写！")
            // }
        }
        // if (think.isEmpty(data.email)) {
        //     return this.fail("电子邮箱不能为空！")
        // } else {
        //     res = await this.model("member").where({ email: data.email }).find();
        //     if (!think.isEmpty(res)) {
        //         return this.fail("电子邮箱已存在，请重新填写！")
        //     }
        // }
        // if (think.isEmpty(data.password) && think.isEmpty(data.password2)) {
        //     return this.fail("密码不能为空！")
        // } else {

        //     if (data.password != data.password2) {
        //         return this.fail("两次输入的密码不一致，请重新填写！")
        //     }
        // }
        data.real_name = data.username;
        data.email = data.mobile + "@qq.com";
        data.password = "123456";
        data.status = 1;
        data.reg_time = new Date().valueOf();
        data.reg_ip = _ip2int(this.ip());
        data.groupid = 2; //初级会员
        data.password = encryptPassword(data.password);
        res = await this.model("member").where({ mobile: data.mobile }).find();

        if (!think.isEmpty(res)) {
            console.log("res member----" + JSON.stringify(res));
            // reg = await this.model("member").where({ mobile: data.mobile }).update(data);
            // console.log("reg update----"+JSON.stringify(reg));
            reg = res.id;
        } else {
            reg = await this.model("member").add(data);
            console.log("reg add----" + JSON.stringify(reg));
        }

        // let reg = await this.model("wx_user").where({openid:data.openid}).update(data);
        if (!think.isEmpty(reg)) {
            //用户副表
            await this.model("wx_user").where({ openid: data.openid }).update({ uid: reg, phone: data.mobile });
            //更新微信头像
            let filePath = think.RESOURCE_PATH + '/upload/avatar/' + reg;
            think.mkdir(filePath)
            await this.spiderImage(data.headimgurl, filePath + '/avatar.png')
        }
        console.log(data);
        await this.model("member").autoLogin({ id: reg }, this.ip()); //更新用户登录信息，自动登陆
        let wx_userInfo = {
            'uid': reg,
            'username': data.username,
            'last_login_time': data.reg_time,
        };
        await this.session('webuser', wx_userInfo);
        //成功后储存opid,防止无限登陆
        await this.session('wx_openid', data.openid);
        this.cookie('wx_openid', null);
        return this.success({ name: "绑定成功", url: this.cookie("bieber_wx_url") });


    }
    /**登录绑定 */
    async logonbindingAction() {
        let data = this.post();
        //console.log(data);
        let username = this.post('username');
        let password = this.post('password');
        password = encryptPassword(password);
        console.log(data);

        let res = await this.model("member").signin(username, password, this.ip(), 5, 0);
        if (0 < res.uid) {
            //记录用户登录行为
            // await this.model("action",).log("user_login", "member", res.uid, res.uid, this.ip(), this.http.url);
            //console.log(11111111111111);
            let wx_info = await this.model("wx_user").where({ openid: data.openid }).find();
            await this.model("wx_user").where({ openid: data.openid }).update({ uid: res.uid });
            //更新微信头像
            let filePath = think.RESOURCE_PATH + '/upload/avatar/' + res.uid;
            think.mkdir(filePath)
            await this.spiderImage(data.headimgurl, filePath + '/avatar.png')
            res.username = wx_info.nickname;
            await this.session('webuser', res);
            //成功后储存opid,防止无限登陆
            await this.session('wx_openid', data.openid);
            this.cookie('wx_openid', null);
            //TODO 用户密钥
            return this.success({ name: "绑定成功", url: this.cookie("bieber_wx_url") });
        } else { //登录失败
            let fail;
            switch (res) {
                case -1:
                    fail = '用户不存在或被禁用';
                    break; //系统级别禁用
                case -2:
                    fail = '密码错误';
                    break;
                default:
                    fail = '未知错误';
                    break; // 0-接口参数错误（调试阶段使用）
            }
            this.fail(fail);
        }
    }
    /**
     * 更新微信头像
     */
    spiderImage(imgUrl, filePath) {
        let deferred = think.defer();
        http.get(imgUrl, function(res) {
            var imgData = "";
            res.setEncoding("binary");
            res.on("data", function(chunk) {
                imgData += chunk;
            });

            res.on("end", function() {
                fs.writeFileSync(filePath, imgData, "binary");
                deferred.resolve(filePath);
            });
        });
        return deferred.promise;
    }
    async tuokecopyAction() {

        // data: {
        //         "docid": did,
        //         "name": user_name.val(),
        //         "phone": user_phone.val(),
        //         // csrfmiddlewaretoken: $.cookie("csrftoken")
        //     }
        if (is_weixin(this.userAgent())) {
            let data = this.post();
            console.log(data);
            let openid = await this.session("wx_openid");

            //已是微信用户，

            let map = {
                openid: openid,
                docid: data.docid
            };
            let res = await this.model("doc_wxuser").where(map).find();
            console.log(res);
            if (!think.isEmpty(res)) {
                console.log("have---------" + res);
                return this.success({ status: 0, name: "用户已经报名!" });
                //已经报名
            } else {

                let mmap = {
                    openid: openid,
                    docid: data.docid,
                    status: 1,
                    create_time: new Date().valueOf()
                }
                console.log(mmap);
                res = await this.model("doc_wxuser").add(mmap);
                //报名人数+1
                let document = this.model('document');
                let info = await document.detail(data.docid);
                info.addnums++;
                console.log("info.nums" + info.addnums);
                //报名人数+1
                let doc = await document.updates(info);

                return this.success({ status: 0, name: "用户报名成功!" });
            }
        } else {
            //PC端
            let data = this.post();
            console.log(data);
            let islogin = data.uid;
            // if (!islogin) {
            //     //未登录，提示登录
            //     return this.success({ status: -1, name: "请先登录，谢谢参与" });
            // }
            console.log("islogn----------" + islogin);
            let document = this.model('document');
            let info = await document.detail(data.docId);
            // console.log("tuoke info------"+JSON.stringify(info));
            if (info.uid == islogin) {
                return this.success({ status: 0, name: "您已经拥有该拓客模板!" });
            }
            info.uid = islogin;
            // info.id = null;
            info.create_time = new Date().getTime();
            info.position = 0;
            let cname = data.cname;
            let mytuokeid = await this.model('category').where({ name: cname }).find();
            console.log("mytuokeid.id===================" + mytuokeid.id);
            info.category_id = mytuokeid.id; //我的拓客模板
            // console.log("tuoke info. 111------"+JSON.stringify(info));
            
            let table =await this.model("model").get_table_name(info.model_id);
            let details = await think.model(table,think.config("db")).find(info.id);
            details.online=0;
            // console.log("details------"+JSON.stringify(details));
            info=think.extend({},info,details);
            // console.log("tuoke info. 222------"+JSON.stringify(info));
            info.id=null;
            let res = await document.updates(info);
            console.log("tuoke copy------"+JSON.stringify(res));
            
            return this.success({ status: 0, name: "拓客模板拷贝成功!" });
        }
        return this.success({ status: -1, name: "用户报名失败!" });
    }
    //我也要玩 /uc/kanjia/myplay/.  id/{{info.id}}/wxuid/{{wxuid}} 
    async myplayAction() {

        // data: {
        //         "docid": did,
        //         "wxuid": wxuid,
        //     }
        
        let data = this.post();
        console.log("post data---------"+JSON.stringify(data));
        let openid = await this.session("wx_openid");
        let mywx=await this.model('wx_user').where({id:data.wxuid}).find();
        let map = {
            openid: mywx.openid,
            docid: data.docid,
            pid:0
        };
        let mykj=await this.model('doc_wxuser').where(map).find();
        let msg='您发起了砍价!';
        if(!think.isEmpty(mykj)){
            //已经发起砍价活动，
            msg='您已经发起了砍价!';
        }else{
            return this.json({ status: 1});
        }
        console.log("msg----------"+JSON.stringify(msg));
        let url='/uc/kanjia/kanjia/id/'+data.docid+'/wxuid/'+data.wxuid;
        return this.json({ status: 0, msg: msg,url:url });
    }
    async myplayjoinAction() {

        // data: {
        //         "docid": did,
        //         "wxuid": wxuid,
                // "name": user_name.val(),
                // "phone": user_phone.val(),
        //     }
        
        let data = this.post();
        console.log("post data---------"+JSON.stringify(data));
        let openid = await this.session("wx_openid");
        // 跟新用户数据
        let da = {
            nickname: data.name,
            phone: data.phone,
        };
        let mywx=await this.model('wx_user').where({id:data.wxuid}).update(da);
        // let map = {
        //     openid: mywx.openid,
        //     docid: data.docid,
        //     pid:0
        // };
        // let mykj=await this.model('doc_wxuser').where(map).find();
        // let msg='您发起了砍价!';
        // if(!think.isEmpty(mykj)){
        //     //已经发起砍价活动，
        //     msg='您已经发起了砍价!';
        // }else{
        //     return this.json({ status: 1});
        // }
        let msg='您发起了砍价!';
        console.log("msg----------"+JSON.stringify(msg));
        let url='/uc/kanjia/kanjia/id/'+data.docid+'/wxuid/'+data.wxuid;
        return this.json({ status: 0, msg: msg,url:url });
    }
    //给他砍价
    async takanjiaAction() {

        // data: {
        //         "docid": did,
        //         "wxuid": wxuid,
        //          "lprice":222,
        //          "hprice":777,
        //          "djprice":99,
        //          "nowprice":1000
        //     }
        let data = this.post();
        console.log("post data---------"+JSON.stringify(data));
        let price =Math.floor(Math.random()*(data.hprice-data.lprice+1)+data.lprice*1.0);
        let msg='帮Ta砍价成功!';
        data.nowprice=data.nowprice*1.0;
        data.djprice=data.djprice*1.0;
        if(data.nowprice<=data.djprice){
            msg='已经到底价了！';
            return this.json({ status: 0, msg: msg });
        }
        let b=data.nowprice*1.0-price;
        let c=data.djprice*1.0;
        // console.log("b-c---------"+JSON.stringify(b)+","+c);
        if(b<=c){
            price=data.djprice;
        }else{
            price=data.nowprice*1.0-price;
        }
        console.log("price---------"+JSON.stringify(price));
        
        // return this.json({ status: 0, msg: msg,price:price });
        let openid = await this.session("wx_openid");
        
        let tawx=await this.model('wx_user').where({id:data.wxuid}).find();
        // let mywx=await this.model('wx_user').where({openid:openid}).find();
        let map = {
            openid: tawx.openid,
            docid: data.docid,
            pid:0
        };
        let takj=await this.model('doc_wxuser').where(map).find();
        //查看24小时内，我是否已经发起了砍价
        map={
            openid: openid,
            docid: data.docid,
            pid:takj.id
        };
        let mylist=await this.model('doc_wxuser').where(map).order("create_time DESC").select();
        
        let url='/uc/kanjia/kanjia/id/'+data.docid+'/wxuid/'+data.wxuid;
        
        if(think.isEmpty(mylist)){
            //未砍价过
            let da={
                pid:takj.id,
                openid:openid,
                create_time:new Date().getTime(),
                docid:data.docid,
                status:1,
                memory:price
            };
            let a=await this.model('doc_wxuser').add(da);
            if(think.isEmpty(a)){
                msg='帮Ta砍价失败!';
                return this.json({ status: 0, msg: msg,price:price});
            }
        }else{
            let now=new Date().getTime();
            let kjtime=mylist[0].create_time;
            let t=3600*1000;//1 小时 24小时 24*3600000
            if((now-kjtime)<t){//小时之内已经有砍价活动
                msg='您已经帮Ta砍过价了!';
                return this.json({ status: 0, msg: msg,price:price,kjtime:kjtime,tt:now-kjtime});
            }else{
                think.rander
                let da={
                    pid:takj.id,
                    openid:openid,
                    create_time:new Date().getTime(),
                    docid:data.docid,
                    status:1,
                    memory:price
                };
                let a=await this.model('doc_wxuser').add(da);
                if(think.isEmpty(a)){
                    msg='帮Ta砍价失败!';
                    return this.json({ status: 0, msg: msg,price:price});
                }
            }
        }

        console.log("msg----------"+JSON.stringify(msg));
        // let url='/uc/kanjia/kanjia/id/'+data.docid+'/wxuid/'+data.wxuid;
        return this.json({ status: 0, msg: msg,url:url ,price:price});
    }
    //给自己砍价
    async mykanjiaAction() {

        // data: {
        //         "docid": did,
        //         "wxuid": wxuid,
        //          "lprice":222,
        //          "hprice":777,
        //          "djprice":99,
        //          "nowprice":1000
        //     }
        let data = this.post();
        console.log("post data---------"+JSON.stringify(data));
        let price =Math.floor(Math.random()*(data.hprice-data.lprice+1)+data.lprice*1.0);
        let msg='帮自己砍价成功!';
        data.nowprice=data.nowprice*1.0;
        data.djprice=data.djprice*1.0;
        if(data.nowprice<=data.djprice){
            msg='已经到底价了！';
            return this.json({ status: 0, msg: msg });
        }
        let b=data.nowprice*1.0-price;
        let c=data.djprice*1.0;
        // console.log("b-c---------"+JSON.stringify(b)+","+c);
        if(b<=c){
            price=data.djprice;
        }else{
            price=data.nowprice*1.0-price;
        }
        console.log("price---------"+JSON.stringify(price));
        
        // return this.json({ status: 0, msg: msg,price:price });
        let openid = await this.session("wx_openid");
        
        let tawx=await this.model('wx_user').where({id:data.wxuid}).find();
        // let mywx=await this.model('wx_user').where({openid:openid}).find();
        let map = {
            openid: tawx.openid,
            docid: data.docid,
            pid:0
        };
        let takj=await this.model('doc_wxuser').where(map).find();
        //查看24小时内，我是否已经发起了砍价
        map={
            openid: openid,
            docid: data.docid,
            pid:takj.id
        };
        let mylist=await this.model('doc_wxuser').where(map).order("create_time DESC").select();
        
        let url='/uc/kanjia/kanjia/id/'+data.docid+'/wxuid/'+data.wxuid;
        
        if(think.isEmpty(mylist)){
            //未砍价过
            let da={
                pid:takj.id,
                openid:openid,
                create_time:new Date().getTime(),
                docid:data.docid,
                status:1,
                memory:price
            };
            let a=await this.model('doc_wxuser').add(da);
            if(think.isEmpty(a)){
                msg='帮自己砍价失败!';
                return this.json({ status: 0, msg: msg,price:price});
            }
        }else{
            let now=new Date().getTime();
            let kjtime=mylist[0].create_time;
            let t=3600*100;//1 小时 24小时 24*3600000
            if((now-kjtime)<t){//小时之内已经有砍价活动
                msg='最近您已经帮自己砍过价了!';
                return this.json({ status: 0, msg: msg,price:price,kjtime:kjtime,tt:now-kjtime});
            }else{
                think.rander
                let da={
                    pid:takj.id,
                    openid:openid,
                    create_time:new Date().getTime(),
                    docid:data.docid,
                    status:1,
                    memory:price
                };
                let a=await this.model('doc_wxuser').add(da);
                if(think.isEmpty(a)){
                    msg='帮自己砍价失败!';
                    return this.json({ status: 0, msg: msg,price:price});
                }
            }
        }

        console.log("msg----------"+JSON.stringify(msg));
        // let url='/uc/kanjia/kanjia/id/'+data.docid+'/wxuid/'+data.wxuid;
        return this.json({ status: 0, msg: msg,url:url ,price:price});
    }
    async h1Action() {
        return this.display();
    }
    
    //砍价 /uc/kanjia/play/id/{{info.id}}/wxuid/{{info.uid}}
    // http://ketang.gzxinbibo.com/uc/kanjia/kanjia/id/467/wxuid/12
    async kanjiaAction() {
        let uurl = this.setup.wx_url + this.http.url;
        console.log("url-------------" + uurl);
        this.assign("wxhttp", this.setup.wx_url);
        let id = this.get("id");
        console.log("id==========" + id);
        let docwxuid = this.get("wxuid");
        console.log("docwxuid==========" + docwxuid);
        let docwxuser=await this.model('wx_user').where({id:docwxuid}).find();
        if(think.isEmpty(docwxuid)||!Number(docwxuid)||think.isEmpty(docwxuser)){
            return this.display('no');
        }
        console.log("docwxuser==========" + JSON.stringify(docwxuser));
        if (is_weixin(this.userAgent())) {
            await this.oauthAction();
            let aa = function(jssdk, url) {
                let deferred = think.defer();
                jssdk.getSignPackage(url, (err, signPackage) => {
                    if (!think.isEmpty(signPackage)) {
                        deferred.resolve(signPackage);
                    } else {
                        console.error(err);
                    }
                });
                return deferred.promise;
            }
            let signPackage = await aa(this.jssdk, uurl);
            // console.log(signPackage);
            this.assign("signPackage", signPackage);

        }else{
            return this.display('no');
        }

        let openid = await this.session("wx_openid");
        console.log("openid kanjia-------------," + openid);
        if(think.isEmpty(openid)){
            return this.json({});
        }
        let wxuid=await this.model('wx_user').where({openid:openid}).getField('id',true);
        console.log("wxuid-------------," + wxuid);
        if(think.isEmpty(wxuid)){
            let userinfo = await getUser(this.api, openid);
            console.log("userinfo----------"+JSON.stringify(userinfo));
            wxuid=await this.model("wx_user").add(userinfo);
            //保存
        }

        
        

        let document = this.model('document');
        let info = await document.detail(id);
        info.ismy=0;
        if(docwxuid==wxuid){//文档显示uid 与当前微信uid一致，则是自己在砍价
            info.ismy=1;
        }
        info.wxurl=docwxuser.headimgurl;
        info.nickname=docwxuser.nickname;
        info.uid=docwxuser.id;//info uid 就是发布的作者
        info.wxuid=wxuid;
        // this.assign("docid", id);
        // let islogin = await this.islogin();
        // this.assign("userid", islogin);
        let str = info.content;
        if (!think.isEmpty(str)) {
            let img=image_view(str, 640, 4);
            // if (checkMobile(this.userAgent())) {
            //     //手机端
            //     img = image_view(str, 640, 4);
            // } else {
            //     //pc端

            //     img = image_view(str, 847, 0);
            // }
            info.content = img
        }
        str = info.playmethod;
        if (!think.isEmpty(str)) {
            // let img;
            // if (checkMobile(this.userAgent())) {
            //     //手机端
            //     img = image_view(str, 640, 4);
            // } else {
            //     //pc端

            //     img = image_view(str, 847, 0);
            // }
            info.playmethod = image_view(str, 640, 4);
        }
        //console.log(info);
        //分类信息
        let cate = await this.category(info.category_id);
        cate = think.extend({}, cate);
        //seo
        this.meta_title = info.title; //标题
        this.keywords = info.keyname ? info.keyname : ''; //seo关键词
        this.description = info.description ? info.description : ""; //seo描述
        //keywords
        let keywords;
        if (!think.isEmpty(info.keyname)) {
            keywords = (info.keyname).split(",");
        }
        this.assign("keywords", keywords);
        //访问统计
        await document.where({ id: info.id }).increment('view');
        //外链
        // if (!think.isEmpty(info.link_id) && info.link_id != 0) {
        //     return this.redirect(info.link_id);
        // }
        

        //获取模板
        let temp;
        let model = await this.model('model').get_model(info.model_id, 'name');
        console.log("model-------" + JSON.stringify(model));
        // 详情模版 TODO
        // 手机版模版

        this.assign('category', cate);
        // console.log(info);
        // 目录/文章/段落
        let pid;
        let pinfo;
        if (info.pid != 0) {
            let i = info.id;
            //
            while (i != 0) {
                let nav = await document.where({ id: i }).find();
                if (nav.pid == 0) {
                    pinfo = nav;
                    pid = nav.id;
                }
                i = nav.pid;
            }

        } else {
            pinfo = info;
            pid = info.id;
        }
        // 获取最后更新时间
        let lastinfo = await document.where({ topid: pid }).order("update_time DESC").find();
        //console.log(lasttime);
        this.assign("lastinfo", lastinfo);
        // console.log(pid);
        let plist = await document.where({ pid: pid }).order("level DESC").select();
        this.assign("pinfo", pinfo);
        this.assign("plist", plist);
        //console.log(plist);
        if (plist[0]) {
            //let lastlevel = plist[0].level;
            //console.log(lastlevel);
            this.assign("lastlevel", plist[0]);
        }
        // console.log(plist);
        // 文档无限级目录
        let ptree_ = await document.where({ topid: pid }).field('id,title,pid,name,level as sort').select();
        let ptree = get_children(ptree_, pid, 1);
        //console.log(ptree);
        this.assign('topid', pid);
        this.assign("ptree", ptree);

        // 如果是目录并且模板为空,模块为视频时，目录id，显示最后更新的主题
        if (info.type == 1 && (think.isEmpty(info.template) || info.template == 0) && info.model_id == 6) {
            if (plist[0]) {
                console.log(111111);
                let model_id = plist[0].model_id;
                let p_id = plist[0].id;
                let table = await this.model("model").get_table_name(model_id);
                let p_info = await this.model(table).find(p_id);
                info = think.extend(info, p_info);

            }
        }
        info.fmurl = await get_pic(info.cover_id,5,300,180);
        
        info.haibao = await get_pic(info.haibao,5,414,545);
        // console.log("haibao---------" + JSON.stringify(info.haibao));
        // console.log("haibao---------" + JSON.stringify(info));
        // console.log("tuoke.  pic---------" + JSON.stringify(pic));
        // info.fmurl = 'http://' + this.setup.QINIU_DOMAIN_NAME + '/' + pic.path;
        info.twourl = await get_cover2(info.twourl, this.setup.QINIU_DOMAIN_NAME);
       
        //当前用户所在会员组的名称
        // let webuser = await this.session("webuser");
        // let gid=await this.model('member').where({ id: info.uid }).field('groupid').find();
        // let dpname = await this.model('member_group').where({ groupid: gid.groupid }).field('name').find();
        // // console.log("webuser---------" + JSON.stringify(groupList));
        // info.dpname = dpname.name;
        info.dpname =info.title;

        let n=new Date().getTime();
        info.time=parseInt((info.etime-n)/1000+n);
        // info.cut=90;//砍掉的金额
        // info.nums=50;//砍价人数
        // info.dpname='道贺传奇传奇';
        // console.log("info.etime---------" + JSON.stringify(info.etime)+","+info.time);
        this.assign("info", info);
        //console.log("description-------------" + info.description);
        // this.assign("desc", info.description);
        // let openid;
        //先检查是否已经存在跟节点，如果没有，则创建，有则获取所属节点信息
        let kjlist=[];
        let kjmap={docid:id,pid:0,openid:docwxuser.openid};
        // console.log("kjmap---------" + JSON.stringify(kjmap));
        let kjlist0=await this.model('doc_wxuser').where(kjmap).find();
        // console.log("kjlist0---------" + JSON.stringify(kjlist0));
        if(think.isEmpty(kjlist0)){
            // console.log('已经发起砍价-------');
            kjlist0={
                pid:0,
                openid:docwxuser.openid,
                create_time:new Date().getTime(),
                docid:id,
                status:1,
                memory:info.cpoprice
            };
            await this.model('doc_wxuser').add(kjlist0);
            kjlist0.nowprice=kjlist0.memory;
        }else{
            kjlist=await this.model('doc_wxuser').where({docid:info.id,pid:kjlist0.id}).order("create_time DESC").select();
            if(!think.isEmpty(kjlist)){
                for(let k of kjlist){
                    let us=await this.model('wx_user').where({openid:k.openid}).find();
                    k.nickname=us.nickname;
                    k.headimgurl=us.headimgurl;
                    k.phone=us.phone;
                }
                kjlist0.nowprice=kjlist[0].memory;
            }else{
                kjlist0.nowprice=kjlist0.memory;
            }
        }
        this.assign("kjlist", kjlist);
        this.assign("kjlist0", kjlist0);
        //手机模版
        if (!think.isEmpty(info.template) && info.template != 0) {
            temp = info.template; //todo 已设置详情模板
        } else if (!think.isEmpty(cate.template_m_detail)) {
            temp = cate.template_m_detail; //分类已经设置模板
        } else {
            temp = model;
        }
        //内容分页
        if (!think.isEmpty(info.content)) {
            info.content = info.content.split("_ueditor_page_break_tag_");
        }
        if (!think.isEmpty(info.playmethod)) {
            info.playmethod = info.playmethod.split("_ueditor_page_break_tag_");
        }
        console.log("kabjiaeAction 手机========" + `${this.http.controller}/${temp}`);
        return this.display(`mobile/${this.http.controller}/${temp}`);

    }
    /**
    http://ketang.gzxinbibo.com/uc/kanjia/demo?id=xxxxxx

    */
    async demoAction() {
        let uurl = this.setup.wx_url + this.http.url;
        console.log("url-------------" + uurl);
        this.assign("wxhttp", this.setup.wx_url);
        if (is_weixin(this.userAgent())) {
            await this.oauthAction();
            let aa = function(jssdk, url) {
                let deferred = think.defer();
                jssdk.getSignPackage(url, (err, signPackage) => {
                    if (!think.isEmpty(signPackage)) {
                        deferred.resolve(signPackage);
                    } else {
                        console.error(err);
                    }
                });
                return deferred.promise;
            }
            let signPackage = await aa(this.jssdk, uurl);
            // console.log(signPackage);
            this.assign("signPackage", signPackage);
        }else{
            return this.display('no');
        }

        let id = this.get("id");
        console.log("id==========" + id);
        let document = this.model('document');
        let info = await document.detail(id);
        this.assign("docid", id);
        let islogin = await this.islogin();
        this.assign("userid", islogin);
        let str = info.content;
        if (!think.isEmpty(str)) {
            let img;
            if (checkMobile(this.userAgent())) {
                //手机端
                img = image_view(str, 640, 4);
            } else {
                //pc端

                img = image_view(str, 847, 0);
            }
            info.content = img
        }
        //console.log(info);
        //分类信息
        let cate = await this.category(info.category_id);
        cate = think.extend({}, cate);
        //seo
        this.meta_title = info.title; //标题
        this.keywords = info.keyname ? info.keyname : ''; //seo关键词
        this.description = info.description ? info.description : ""; //seo描述
        //keywords
        let keywords;
        if (!think.isEmpty(info.keyname)) {
            keywords = (info.keyname).split(",");
        }
        this.assign("keywords", keywords);
        //访问统计
        await document.where({ id: info.id }).increment('view');
        //外链
        // if (!think.isEmpty(info.link_id) && info.link_id != 0) {
        //     return this.redirect(info.link_id);
        // }
        // 获取面包屑信息
        // let breadcrumb = await this.model('category').get_parent_category(cate.id, true);
        // this.assign('breadcrumb', breadcrumb);

        // 上一篇
        // let previous = await document.where({ id: ['>', info.id], category_id: info.category_id, 'pid': 0, 'status': 1 }).order('id DESC').find();
        // this.assign('previous', previous)
        //     // 下一篇
        // let next = await document.where({ id: ['<', info.id], category_id: info.category_id, 'pid': 0, 'status': 1 }).order('id DESC').find();
        // this.assign('next', next)

        //获取模板
        let temp;
        let model = await this.model('model').get_model(info.model_id, 'name');
        console.log("model-------" + JSON.stringify(model));
        // 详情模版 TODO
        // 手机版模版

        this.assign('category', cate);
        // console.log(info);
        // 目录/文章/段落
        let pid;
        let pinfo;
        if (info.pid != 0) {
            let i = info.id;
            //
            while (i != 0) {
                let nav = await document.where({ id: i }).find();
                if (nav.pid == 0) {
                    pinfo = nav;
                    pid = nav.id;
                }
                i = nav.pid;
            }

        } else {
            pinfo = info;
            pid = info.id;
        }
        // 获取最后更新时间
        let lastinfo = await document.where({ topid: pid }).order("update_time DESC").find();
        //console.log(lasttime);
        this.assign("lastinfo", lastinfo);
        console.log(pid);
        let plist = await document.where({ pid: pid }).order("level DESC").select();
        this.assign("pinfo", pinfo);
        this.assign("plist", plist);
        //console.log(plist);
        if (plist[0]) {
            //let lastlevel = plist[0].level;
            //console.log(lastlevel);
            this.assign("lastlevel", plist[0]);
        }
        console.log(plist);
        // 文档无限级目录
        let ptree_ = await document.where({ topid: pid }).field('id,title,pid,name,level as sort').select();
        let ptree = get_children(ptree_, pid, 1);
        //console.log(ptree);
        this.assign('topid', pid);
        this.assign("ptree", ptree);

        // 如果是目录并且模板为空,模块为视频时，目录id，显示最后更新的主题
        if (info.type == 1 && (think.isEmpty(info.template) || info.template == 0) && info.model_id == 6) {
            if (plist[0]) {
                console.log(111111);
                let model_id = plist[0].model_id;
                let p_id = plist[0].id;
                let table = await this.model("model").get_table_name(model_id);
                let p_info = await this.model(table).find(p_id);
                info = think.extend(info, p_info);

            }
        }
        info.fmurl = await get_cover2(info.fmurl, this.setup.QINIU_DOMAIN_NAME);
        // console.log("tuoke.  pic---------" + JSON.stringify(pic));
        // info.fmurl = 'http://' + this.setup.QINIU_DOMAIN_NAME + '/' + pic.path;
        info.twourl = await get_cover2(info.twourl, this.setup.QINIU_DOMAIN_NAME);
        // info.twourl = '//' + this.setup.QINIU_DOMAIN_NAME + '/' + pic.path;
        // console.log("tuokeAction---------" + JSON.stringify(info));
        // let reg=new RegExp("\"//*","g"); //创建正则RegExp对象   
        // info.content=info.content.replace(reg,"\"http://");
        // let userList =await this.session("userList");
        // if(think.isEmpty(userList))
        // {
        //     userList = await this.model('member').field('id,real_name,groupid').select();
        //     let groupList = await this.model('member_group').field('groupid,name').select();
        //     userList.forEach((u)=>{
        //         groupList.forEach((k) => {
        //             if(k.groupid==u.groupid){
        //                 u.groupname=k.name;
        //             }
        //         });
        //     });

        //     console.log("userList------"+JSON.stringify(userList) );
        //     await this.session("userList",userList);
        // }
        let webuser = await this.session("webuser");
        let gid=await this.model('member').where({ id: info.uid }).field('groupid').find();
        let dpname = await this.model('member_group').where({ groupid: gid.groupid }).field('name').find();
        // console.log("webuser---------" + JSON.stringify(groupList));
        info.dpname = dpname.name;


        // info.dpname='道贺传奇传奇';
        // console.log("info---------" + JSON.stringify(info));
        this.assign("info", info);
        //console.log("description-------------" + info.description);
        this.assign("desc", info.description);
        let openid;
        if (checkMobile(this.userAgent())) {
            //手机用户
            openid = await this.session("wx_openid");

            let map = {
                openid: openid,
                docid: id
            };

            if (typeof openid == 'undefined') {
                this.assign("pay_type", 0);
            } else {
                let res = await this.model("doc_wxuser").where(map).find();
                console.log(res);
                //是否已经报名
                if (res.openid != undefined) {
                    this.assign("pay_type", 1);
                } else {
                    //未报名
                    this.assign("pay_type", 0);
                }
            }
            //手机模版
            if (!think.isEmpty(info.template) && info.template != 0) {
                temp = info.template; //todo 已设置详情模板
            } else if (!think.isEmpty(cate.template_m_detail)) {
                temp = cate.template_m_detail; //分类已经设置模板
            } else {
                temp = model;
            }

            //内容分页
            if (!think.isEmpty(info.content)) {
                info.content = info.content.split("_ueditor_page_break_tag_");
            }
            console.log("tuokeAction 手机========" + `${this.http.controller}/${temp}`);
            return this.display(`mobile/${this.http.controller}/${temp}`);
        }
        if (!islogin) {
            //未登录，提示登录
            return this.success({ status: -1, name: "请先登录，谢谢参与" });
        }
        // PC用户
        let oid = await this.model("wx_user").where({ uid: islogin }).find();
        if (!think.isEmpty(oid)) {
            console.log("PC用户--------------" + JSON.stringify(oid));
            openid = oid.openid;
            let map = {
                openid: openid,
                docid: id
            };
            console.log("PC用户 oid,--------------" + JSON.stringify(map));
            let res = await this.model("doc_wxuser").where(map).find();
            //是否已经报名
            if (!think.isEmpty(res)) {
                this.assign("pay_type", 1);
            } else {
                //未报名
                this.assign("pay_type", 0);
            }
        } else {
            //未报名
            this.assign("pay_type", 0);
        }
        // if (!think.isEmpty(info.template) && info.template != 0) {
        //     temp = info.template; //已设置详情模板
        // } else if (!think.isEmpty(cate.template_detail)) {
        //     temp = cate.template_detail; //分类已经设置模板
        // } else {
        //     temp = model;
        // }
        // console.log(temp);
        //console.log(info);
        //内容分页
        if (!think.isEmpty(info.content)) {
            info.content = info.content.split("_ueditor_page_break_tag_");
        }

        // if(model=="myshop"){
        //     return this.display(`${this.http.controller}/myshop`);
        // }
        if (!think.isEmpty(info.template) && info.template != 0) {
            console.log("info.template,--------------" + JSON.stringify(info.template));
            temp = info.template; //todo 已设置详情模板
        } else if (!think.isEmpty(cate.template_detail)) {
            console.log("cate.template_detail,--------------" + JSON.stringify(cate.template_detail));
            temp = cate.template_detail; //分类已经设置模板
        } else {
            console.log("model,--------------" + JSON.stringify(model));
            temp = model;
        }
        console.log("tuokeAction========" + `${this.http.controller}/${temp}`);
        return this.display(`${this.http.controller}/${temp}`);


    }
    async mydpAction() {
        let uurl = this.setup.wx_url + this.http.url;
        console.log("mydp url-------------" + uurl);
        if (is_weixin(this.userAgent())) {
            await this.oauthAction();
            let aa = function(jssdk, url) {
                let deferred = think.defer();
                jssdk.getSignPackage(url, (err, signPackage) => {
                    if (!think.isEmpty(signPackage)) {
                        deferred.resolve(signPackage);
                    } else {
                        console.error(err);
                    }
                });
                return deferred.promise;
            }
            let signPackage = await aa(this.jssdk, uurl);
            // console.log(signPackage);
            this.assign("signPackage", signPackage);
        }else{
            return this.display('no');
        }
        let id = this.get("id");
        let webuser = await this.session("webuser");
        let document = this.model('document');
        let info;
        if (think.isEmpty(id)) {
            //查找当前微信人员的所属店铺，上架，第一个

            console.log("webuser----------" + JSON.stringify(webuser));
            let members = await this.model("member").where({ groupid: webuser.groupid }).field('id').select();
            let ms = [];
            for (let m of members) {
                ms.push(m.id);
            }
            console.log("ms----------" + JSON.stringify(ms));
            // let id = this.get("id");
            // console.log("dp id=========="+id);

            let infos = await document.where({ uid: ["IN", ms], category_id: 140 }).select();
            // console.log("infos----------"+JSON.stringify(infos));

            if (!think.isEmpty(infos)) {
                info = infos[0];
            } else {
                infos = await document.where({ uid: ["IN", [1]], category_id: 140 }).select();
                info = infos[0];
            }
            id = info.id;
        } else {
            info = await document.detail(id);
        }
        // this.assign("docid", id);
        this.assign("userid", webuser.uid);
        this.assign("groupid", id);


        // this.assign("wxhttp", this.setup.wx_url);
        let str = info.content;
        if (!think.isEmpty(str)) {
            let img;
            if (checkMobile(this.userAgent())) {
                //手机端
                img = image_view(str, 640, 4);
            } else {
                //pc端

                img = image_view(str, 847, 0);
            }
            info.content = img
        }
        //console.log(info);
        //分类信息
        let cate = await this.category(info.category_id);
        cate = think.extend({}, cate);
        //seo
        this.meta_title = info.title; //标题
        this.keywords = info.keyname ? info.keyname : ''; //seo关键词
        this.description = info.description ? info.description : ""; //seo描述
        //keywords
        let keywords;
        if (!think.isEmpty(info.keyname)) {
            keywords = (info.keyname).split(",");
        }
        this.assign("keywords", keywords);
        //访问统计
        // await document.where({ id: info.id }).increment('view');


        //获取模板
        let temp;
        let model = await this.model('model').get_model(info.model_id, 'name');
        console.log("model-------" + JSON.stringify(model));
        let table = await this.model("model").get_table_name(info.model_id);
        let p_info = await this.model(table).find(info.id);
        info = think.extend(info, p_info);

        // 详情模版 TODO
        // 手机版模版

        //  this.assign('category', cate);
        // // console.log(info);
        //  // 目录/文章/段落
        //  let pid;
        //  let pinfo;
        //  if (info.pid != 0) {
        //      let i = info.id;
        //      //
        //      while (i != 0) {
        //          let nav = await document.where({ id: i }).find();
        //          if (nav.pid == 0) {
        //              pinfo = nav;
        //              pid = nav.id;
        //          }
        //          i = nav.pid;
        //      }

        //  } else {
        //      pinfo = info;
        //      pid = info.id;
        //  }
        //  // 获取最后更新时间
        //  let lastinfo = await document.where({ topid: pid }).order("update_time DESC").find();
        //  //console.log(lasttime);
        //  this.assign("lastinfo", lastinfo);
        //  console.log(pid);
        //  let plist = await document.where({ pid: pid }).order("level DESC").select();
        //  this.assign("pinfo", pinfo);
        //  this.assign("plist", plist);
        //  //console.log(plist);
        //  if (plist[0]) {
        //      //let lastlevel = plist[0].level;
        //      //console.log(lastlevel);
        //      this.assign("lastlevel", plist[0]);
        //  }
        //  console.log(plist);
        //  // 文档无限级目录
        //  let ptree_ = await document.where({ topid: pid }).field('id,title,pid,name,level as sort').select();
        //  let ptree = get_children(ptree_, pid, 1);
        //  //console.log(ptree);
        //  this.assign('topid', pid);
        //  this.assign("ptree", ptree);

        // 如果是目录并且模板为空,模块为视频时，目录id，显示最后更新的主题
        // if (info.type == 1 && (think.isEmpty(info.template) || info.template == 0) && info.model_id == 6) {
        //     if (plist[0]) {
        //         console.log(111111);
        //         let model_id = plist[0].model_id;
        //         let p_id = plist[0].id;
        //         let table = await this.model("model").get_table_name(model_id);
        //         let p_info = await this.model(table).find(p_id);
        //         info = think.extend(info, p_info);

        //     }
        // }
        info.fmurl = await get_cover2(info.fmurl, this.setup.QINIU_DOMAIN_NAME);
        // console.log("tuoke.  pic---------" + JSON.stringify(pic));
        // info.fmurl = 'http://' + this.setup.QINIU_DOMAIN_NAME + '/' + pic.path;
        info.twourl = await get_cover2(info.twourl, this.setup.QINIU_DOMAIN_NAME);
        // info.twourl = '//' + this.setup.QINIU_DOMAIN_NAME + '/' + pic.path;


        let dpname = await this.model('member_group').getDpName({ groupid: webuser.groupid });
        console.log("dpname-------" + JSON.stringify(dpname));
        info.dpname = dpname.name;
        info.title = dpname.name;
        // console.log("info---------" + JSON.stringify(info));
        let wxhttp = this.setup.wx_url + '/uc/kanjia/mydp/id/' + id;
        this.assign("wxhttp", wxhttp);
        console.log("info-------" + JSON.stringify(info));
        this.assign("info", info);
        //console.log("description-------------" + info.description);
        this.assign("desc", info.description);
        let openid;
        if (checkMobile(this.userAgent())) {
            //手机用户

            //手机模版
            if (!think.isEmpty(info.template) && info.template != 0) {
                temp = info.template; //todo 已设置详情模板
            } else if (!think.isEmpty(cate.template_m_detail)) {
                temp = cate.template_m_detail; //分类已经设置模板
            } else {
                temp = model;
            }

            //内容分页
            if (!think.isEmpty(info.content)) {
                info.content = info.content.split("_ueditor_page_break_tag_");
            }
            console.log("tuokeAction 手机========" + `${this.http.controller}/${temp}`);
            return this.display(`mobile/${this.http.controller}/${temp}`);
        }

        // PC用户


        //内容分页
        if (!think.isEmpty(info.content)) {
            info.content = info.content.split("_ueditor_page_break_tag_");
        }

        // if(model=="myshop"){
        //     return this.display(`${this.http.controller}/myshop`);
        // }
        if (!think.isEmpty(info.template) && info.template != 0) {
            temp = info.template; //todo 已设置详情模板
        } else if (!think.isEmpty(cate.template_m_detail)) {
            temp = cate.template_m_detail; //分类已经设置模板
        } else {
            temp = model;
        }
        // model='mytest';
        console.log("tuokeAction========" + `${this.http.controller}/${model}`);
        return this.display(`${this.http.controller}/${model}`);


    }
    async yqxAction() {
        let uurl = this.setup.wx_url + this.http.url;
        console.log("url-------------" + uurl);
        this.assign("wxhttp", this.setup.wx_url);
        let id = this.get("id");
        console.log("id==========" + id);
        // let docwxuid = this.get("wxuid");
        // console.log("docwxuid==========" + docwxuid);
        // let docwxuser=await this.model('wx_user').where({id:docwxuid}).find();
        if(!Number(id)){
            return this.display('no');
        }
        if (is_weixin(this.userAgent())) {
            await this.oauthAction();
        }
        else{
            return this.display('no');
        }

        let openid = await this.session("wx_openid");
        if(think.isEmpty(openid)){
            return this.json({});
        }
        let wxuid=await this.model('wx_user').where({openid:openid}).getField('id',true);
        if(think.isEmpty(wxuid)){
            return this.json({});
        }
        console.log("wxuid-------------," + wxuid);
        if (this.isPost()) {
            let id=this.get('id');
            let data=this.post();
            console.log("id-------"+JSON.stringify(id));
            let res={"success":true,"code":120506,"msg":"谢谢您的参与！","obj":null,"map":null,"list":null};
            return this.json(res);
        }else{

            let document = this.model('document');
            let info= await document.detail(this.get('id'));
            // console.log("info-------"+JSON.stringify(info));
            // let temp;
            let model = await this.model('model').get_model(info.model_id, 'name');
            // console.log("model-------" + JSON.stringify(model));
            let table = await this.model("model").get_table_name(info.model_id);
            // console.log("table-------" + JSON.stringify(table));
            let p_info = await this.model(table).find(info.id);
            info = think.extend(info, p_info);
            info.jsdata=await get_file(info.jsdata,'savename',true);
            if(!think.isEmpty(info.cover_id)){
                info.cover_id = await get_cover(info.cover_id, 'path');
            }else{
                info.cover_id = info.code+'.png';
            }
            
            info.wxuid=wxuid;
            console.log("info-------"+JSON.stringify(info));
            this.assign("info", info);
            return this.display(`mobile/${this.http.controller}/yqx`);
        }
    }
    //{"success":true,"code":200,"msg":"操作成功","obj":{"ticket":"kgt8ON7yVITDhtdwci0qeaxAFX8N1wrDOM-K390Ecj6lXzRSE6pZN_tLpVa0M_8k_Gtlx5dByUECjNEwcp0tKw","appId":"wx8a61ef75c858990e"},"map":null,"list":null}
    async yqx1Action() {
        // this.active = ['/', '/yqx', '/lmeOWxwg.html'];
        return this.display(`mobile/${this.http.controller}/test1`);
    }
    async logserverAction() {
        let data =this.post();
        console.log("data-------"+JSON.stringify(data));
        // this.active = ['/', '/yqx', '/lmeOWxwg.html'];
        return this.json({"header":{"code":10200,"timing":2,"count":0,"desc":"ok"}});
    }
    async ticketAction() {
        // this.active = ['/', '/yqx', '/lmeOWxwg.html'];
        let aa = function(jssdk) {
                let deferred = think.defer();
                jssdk.getJsApiTicket((err, ticket) => {
                    deferred.resolve(ticket);
                    // if (!think.isEmpty(signPackage)) {
                    //     deferred.resolve(signPackage);
                    // } else {
                    //     console.error(err);
                    // }
                });
                return deferred.promise;
            }
        let ticket = await aa(this.jssdk);
        console.log("ticket-------"+JSON.stringify(ticket));
        return this.json({
            "success":true,
            "code":200,
            "msg":"操作成功",
            "obj":{
                "ticket":ticket,
                "appId":this.setup.wx_AppID
            },
            "map":null,"list":null});
    }
    async tjAction() {
        let id =this.get('id');
        console.log("id-------"+JSON.stringify(id));
        let data=this.post();
        let phone=data["eq[f_phone]"];
        let name=data["eq[f_name]"];
        console.log("data-------"+phone+","+name);
        if(!Number(phone)||phone.length!=11){
            return this.json({"success":false,"code":130002,"msg":"请检查电话号码！","obj":null,"map":null,"list":null});
        }
        let openid = await this.session("wx_openid");
        console.log("openid-------"+JSON.stringify(openid));
        if(think.isEmpty(openid)){
            return this.json({"success":false,"code":130000,"msg":"请在微信中打开！","obj":null,"map":null,"list":null});
        }
        let uid=await this.model('wx_user').where({openid:openid}).getField('id',true);
        if(think.isEmpty(uid)){
            return this.json({"success":false,"code":130000,"msg":"请先关注公众号！","obj":null,"map":null,"list":null});
        }
        let docuser=await this.model('doc_wxuser').where({openid:openid,docid:id,status:1}).find();
        if(!think.isEmpty(docuser)){
            return this.json({"success":false,"code":130000,"msg":"您已经报过名！","obj":null,"map":null,"list":null});
        }
        let da={
            docid:id,
            pid:0,
            openid:openid,
            status:1,
            create_time:new Date().getTime()
        };
        await this.model('doc_wxuser').add(da);
        
        da={
            phone:phone,
            nickname:name
        };
        await this.model('wx_user').where({id:uid}).update(da);
        
        
        // {"success":true,"code":120506,"msg":"谢谢您的参与！","obj":null,"map":null,"list":null}
        return this.json({"success":false,"code":130000,"msg":"您已经报名成功！","obj":null,"map":null,"list":null});
        // this.active = ['/', '/yqx', '/lmeOWxwg.html'];
        // return this.display('test1');
    }
    
}