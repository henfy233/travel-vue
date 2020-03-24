import AppConfig from '@/config/index' // 引入项目配置

export default {
  logined: false, // 是否登录
  user: null, // 当前用户
  defaultRoute: AppConfig.defaultRoute || '/',

  // 推送消息
  readedMessages: [],
  unreadMessages: [],
  auths: [], // 每个用户的所有权限

  // 当前页信息
  currentRoute: {
    config: null,
    treePath: [],
  },
}
