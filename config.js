// 配置
window.Config = {

  // 站点名
  SiteName: 'Site-Up-Status',

  // 站点链接
  SiteUrl: '/',

  // UptimeRobot Api Keys
  // 支持 Monitor-Specific 和 Read-Only 两种 Api Key
  ApiKeys: [
    'ur1534617-b5e59455de9ad6ac4ce0d590'
  ],

  // 是否显示监测站点的链接
  ShowLink: false,

  // 日志天数
  // 虽然免费版说仅保存60天日志，但测试好像API可以获取90天的
  // 不过时间不要设置太长，容易卡，接口请求也容易失败
  CountDays: 60,

  // 导航栏菜单
  Navi: [
    {
      text: 'Server Status',
      url: 'https://server.gwen.ink/'
    },
    {
      text: 'GitHub',
      url: 'https://github.com/GWen124/geekyouth/'
    },
    {
      text: '项目主页',
      url: 'https://github.com/GWen124/Site-Up-Status'
    }
  ]
};
