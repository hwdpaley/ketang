// +----------------------------------------------------------------------
// | Bieber [ 美媒网站内容管理框架 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2017 http://www.gzxinbibo.com All rights reserved.
// +----------------------------------------------------------------------
// | Author: Tony <912697590@qq.com>
// +----------------------------------------------------------------------
'use strict';
/**
 * db config
 * @type {Object}
 */
export default {
  type: 'mysql',
  log_sql: false,
  adapter: {
    mysql: {
      host: 'rm-wz9i6b839885mow0i.mysql.rds.aliyuncs.com',
      port: '3306',
      database: 'ketang',
      user: 'bieber2011',
      password: 'B163e802a1388B163e802a1388',
      prefix: 'bb_',
      encoding: 'UTF8MB4_GENERAL_CI'
    },
    mongo: {

    }
  }
};
