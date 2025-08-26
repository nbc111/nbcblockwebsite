# NBCoin (NBC) 公链官网

这是一个去中心化的公链平台官网，专注于为开发者提供稳定、高效、可扩展的区块链基础设施。

## 技术栈

- **Next.js 14** - React 框架
- **TypeScript** - 类型安全
- **Tailwind CSS** - 样式框架
- **响应式设计** - 支持移动端和桌面端

## 特性

- 🚀 **快速开发** - 完整的开发工具链和SDK
- 🛡️ **稳定可靠** - 99.9%的网络稳定性
- 📈 **无限扩展** - 支持水平和垂直扩展
- 🔧 **易于维护** - 完整的监控和运维工具
- 🌐 **跨链兼容** - 支持多种区块链标准
- 💼 **社区驱动** - 开源透明，社区治理

## 快速开始

### 安装依赖

```bash
npm install
# 或
yarn install
```

### 开发模式

```bash
npm run dev
# 或
yarn dev
```

### 构建生产版本

```bash
npm run build
# 或
yarn build
```

### 启动生产版本

```bash
npm start
# 或
yarn start
```

## 项目结构

```
chainofficial/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 主页面
├── components/             # React 组件
│   ├── Header.tsx         # 导航栏
│   ├── Hero.tsx           # 英雄区域
│   ├── Features.tsx       # 特性介绍
│   ├── Benefits.tsx       # 优势展示
│   ├── Technology.tsx     # 技术架构
│   ├── CTA.tsx            # 行动召唤
│   ├── Whitepaper.tsx     # 白皮书/文档区域
│   ├── Footer.tsx         # 页脚
│   └── LocaleSwitcher.tsx # 语言切换器（隐藏状态）
├── lib/                    # 工具库
│   └── i18n/              # 国际化支持
│       ├── config.ts      # 国际化配置
│       ├── translations.ts # 文本翻译
│       └── useLocale.ts   # 语言管理 Hook
├── docs/                   # 文档
│   └── i18n-setup.md      # 多语言设置指南
├── tailwind.config.js      # Tailwind 配置
├── next.config.js          # Next.js 配置
└── package.json            # 项目依赖
```

## 设计理念

本官网重点突出以下两个核心价值：

1. **稳定、高效** - 通过优化的架构和工具，确保公链能够稳定运行并提供高性能
2. **可扩展性** - 采用模块化设计，支持无限扩展，满足生态发展需求

## 关于 NBCoin (NBC)

NBCoin (NBC) 是一个去中心化的公链平台，专注于为开发者提供稳定、高效的区块链基础设施。我们的使命是构建一个开源透明、社区驱动的区块链生态系统，通过技术创新推动去中心化应用的发展。

## 自定义

- 修改 `tailwind.config.js` 中的颜色配置
- 在 `components/` 目录中添加或修改组件
- 更新 `app/page.tsx` 中的页面结构

## 多语言支持

项目已预留完整的多语言支持架构，当前阶段默认隐藏：

- **配置**: `lib/i18n/config.ts` - 控制多语言功能开关
- **翻译**: `lib/i18n/translations.ts` - 管理所有文本内容
- **Hook**: `lib/i18n/useLocale.ts` - 语言状态管理
- **组件**: `components/LocaleSwitcher.tsx` - 语言切换器
- **文档**: `docs/i18n-setup.md` - 详细设置指南

启用多语言支持只需修改配置文件中的 `show: true` 即可。

## 部署

支持部署到 Vercel、Netlify 等平台，或自建服务器。

## 许可证

MIT License
