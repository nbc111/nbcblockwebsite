export const i18nConfig = {
  // 默认语言
  defaultLocale: 'zh-CN',
  
  // 支持的语言列表
  locales: ['zh-CN', 'en-US'],
  
  // 语言显示名称
  localeNames: {
    'zh-CN': '中文',
    'en-US': 'English'
  },
  
  // 语言切换器配置
  localeSwitcher: {
    show: false, // 当前阶段隐藏，未来可启用
    position: 'header' // 位置：header, footer, sidebar
  }
}

// 语言检测配置
export const localeDetection = {
  // 是否自动检测用户语言
  autoDetect: false,
  
  // 支持的语言检测
  supportedLocales: ['zh-CN', 'en-US'],
  
  // 回退语言
  fallbackLocale: 'zh-CN'
}

// 路由配置
export const localeRouting = {
  // 是否使用子路径路由 (/zh-CN/, /en-US/)
  useSubPath: false,
  
  // 是否使用查询参数 (?lang=zh-CN)
  useQueryParam: false,
  
  // 是否使用 cookie 存储语言偏好
  useCookie: true,
  
  // cookie 名称
  cookieName: 'nbcoin-locale'
}
