# NBCoin 官网多语言支持指南

## 概述

本指南说明如何在 NBCoin 官网中启用和使用多语言支持功能。当前阶段默认隐藏多语言功能，专注于中文版本开发。

## 架构设计

### 文件结构
```
lib/i18n/
├── config.ts          # 国际化配置
├── translations.ts    # 文本翻译
└── useLocale.ts       # 语言管理 Hook

components/
└── LocaleSwitcher.tsx # 语言切换器

docs/
└── i18n-setup.md      # 本指南
```

### 核心组件

1. **LocaleProvider**: 语言上下文提供者
2. **useTranslation**: 翻译 Hook
3. **LocaleSwitcher**: 语言切换器组件

## 启用多语言支持

### 步骤 1: 修改配置

在 `lib/i18n/config.ts` 中启用语言切换器：

```typescript
export const i18nConfig = {
  // ... 其他配置
  localeSwitcher: {
    show: true, // 改为 true 启用
    position: 'header'
  }
}
```

### 步骤 2: 添加语言切换器到页面

在 Header 组件中添加语言切换器：

```typescript
import LocaleSwitcher from '@/components/LocaleSwitcher'

export default function Header() {
  return (
    <header>
      {/* ... 现有内容 ... */}
      <LocaleSwitcher />
    </header>
  )
}
```

### 步骤 3: 使用翻译函数

在组件中使用翻译：

```typescript
import { useTranslation } from '@/lib/i18n/useLocale'

export default function Hero() {
  const { t } = useTranslation()
  
  return (
    <section>
      <h1>{t('hero.title')}</h1>
      <p>{t('hero.description')}</p>
    </section>
  )
}
```

## 添加新语言

### 步骤 1: 在配置中添加语言

```typescript
// lib/i18n/config.ts
export const i18nConfig = {
  locales: ['zh-CN', 'en-US', 'ja-JP'], // 添加日语
  localeNames: {
    'zh-CN': '中文',
    'en-US': 'English',
    'ja-JP': '日本語'  // 添加日语名称
  }
}
```

### 步骤 2: 创建语言包

```typescript
// lib/i18n/translations.ts
export const jaJP = {
  hero: {
    title: '安定、高速起動',
    subtitle: '後で拡張しやすい',
    description: 'NBCoin (NBC) は...'
  }
  // ... 其他翻译
}

export const translations = {
  'zh-CN': zhCN,
  'en-US': enUS,
  'ja-JP': jaJP  // 添加日语包
}
```

### 步骤 3: 更新语言检测

```typescript
// lib/i18n/useLocale.ts
const localeMap: Record<string, string> = {
  'zh': 'zh-CN',
  'en': 'en-US',
  'ja': 'ja-JP'  // 添加日语映射
}
```

## 最佳实践

### 1. 文本键值管理

- 使用点分隔的键值结构：`hero.title`, `features.description`
- 按功能模块组织键值
- 保持键值的一致性和可读性

### 2. 翻译质量

- 确保翻译的准确性和本地化
- 考虑文化差异和表达习惯
- 使用专业翻译服务（重要内容）

### 3. 性能优化

- 按需加载语言包
- 使用 React.memo 优化组件
- 避免不必要的重新渲染

### 4. SEO 优化

- 为每种语言设置正确的 `lang` 属性
- 使用 hreflang 标签
- 创建语言特定的 URL 结构

## 路由策略

### 子路径路由 (推荐)

```
/zh-CN/          # 中文版
/en-US/          # 英文版
/ja-JP/          # 日文版
```

启用方法：

```typescript
// lib/i18n/config.ts
export const localeRouting = {
  useSubPath: true,  // 启用子路径
  useQueryParam: false,
  useCookie: true
}
```

### 查询参数路由

```
/?lang=zh-CN      # 中文版
/?lang=en-US      # 英文版
```

### Cookie 存储

用户语言偏好会保存在 cookie 中，下次访问时自动应用。

## 测试

### 1. 功能测试

- 语言切换是否正常工作
- 翻译是否正确显示
- 语言偏好是否正确保存

### 2. 兼容性测试

- 不同浏览器测试
- 移动端测试
- 无障碍访问测试

### 3. 性能测试

- 页面加载速度
- 语言切换响应时间
- 内存使用情况

## 故障排除

### 常见问题

1. **语言切换器不显示**
   - 检查 `i18nConfig.localeSwitcher.show` 设置
   - 确认组件已正确导入

2. **翻译不生效**
   - 检查文本键值是否正确
   - 确认语言包已正确配置
   - 检查组件是否正确使用 `useTranslation`

3. **语言偏好不保存**
   - 检查 cookie 设置
   - 确认 localStorage 权限

### 调试技巧

- 使用浏览器开发者工具检查 cookie
- 在控制台输出当前语言状态
- 检查网络请求中的语言参数

## 未来扩展

### 计划功能

1. **自动语言检测**
   - 基于用户 IP 地址
   - 基于浏览器语言设置
   - 基于用户历史行为

2. **动态语言包加载**
   - 按需加载语言包
   - 减少初始包大小
   - 提升加载性能

3. **社区翻译**
   - 开放翻译贡献
   - 翻译质量审核
   - 版本管理

4. **RTL 语言支持**
   - 阿拉伯语
   - 希伯来语
   - 其他从右到左的语言

## 总结

当前阶段，多语言功能已完整架构但默认隐藏。当需要启用时，只需修改配置文件即可。这种设计确保了：

- 当前专注中文版本开发
- 未来扩展的灵活性
- 代码的可维护性
- 用户体验的一致性

建议在以下情况下启用多语言支持：
1. 核心功能开发完成
2. 有足够的翻译资源
3. 有明确的国际化需求
4. 团队有维护多语言版本的能力
