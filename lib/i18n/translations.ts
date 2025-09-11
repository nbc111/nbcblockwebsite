// 文本键值定义 - 便于未来多语言扩展
export const textKeys = {
  // 通用
  common: {
    loading: 'common.loading',
    error: 'common.error',
    success: 'common.success',
    cancel: 'common.cancel',
    confirm: 'common.confirm',
    close: 'common.close',
    back: 'common.back',
    next: 'common.next',
    previous: 'common.previous',
    language: 'common.language',
    androidOnlyMessage: 'common.androidOnlyMessage'
  },
  
  // 导航
  navigation: {
    features: 'navigation.features',
    benefits: 'navigation.benefits',
    technology: 'navigation.technology',
    whitepaper: 'navigation.whitepaper',
    wallet: 'navigation.wallet',
    contact: 'navigation.contact',
    developers: 'navigation.developers'
  },
  
  // 英雄区域
  hero: {
    title: 'hero.title',
    subtitle: 'hero.subtitle',
    description: 'hero.description',
    startBuilding: 'hero.startBuilding',
    learnMore: 'hero.learnMore',
    stability: 'hero.stability',
    openSource: 'hero.openSource',
    scalability: 'hero.scalability',
    tpsCapability: 'hero.tpsCapability',
    transparent: 'hero.transparent',
    crossChain: 'hero.crossChain',
    interoperability: 'hero.interoperability'
  },
  
  // 特性
  features: {
    title: 'features.title',
    description: 'features.description',
    rapidDevelopment: 'features.rapidDevelopment',
    rapidDevelopmentDesc: 'features.rapidDevelopmentDesc',
    stability: 'features.stability',
    stabilityDesc: 'features.stabilityDesc',
    scalability: 'features.scalability',
    scalabilityDesc: 'features.scalabilityDesc',
    maintainability: 'features.maintainability',
    maintainabilityDesc: 'features.maintainabilityDesc',
    crossChain: 'features.crossChain',
    crossChainDesc: 'features.crossChainDesc',
    communityDriven: 'features.communityDriven',
    communityDrivenDesc: 'features.communityDrivenDesc'
  },
  
  // 优势
  benefits: {
    title: 'benefits.title',
    description: 'benefits.description',
    networkStability: 'benefits.networkStability',
    networkStabilityDesc: 'benefits.networkStabilityDesc',
    security: 'benefits.security',
    securityDesc: 'benefits.securityDesc',
    performance: 'benefits.performance',
    performanceDesc: 'benefits.performanceDesc',
    unlimitedScaling: 'benefits.unlimitedScaling',
    unlimitedScalingDesc: 'benefits.unlimitedScalingDesc',
    modularDesign: 'benefits.modularDesign',
    modularDesignDesc: 'benefits.modularDesignDesc',
    ecosystemCompatibility: 'benefits.ecosystemCompatibility',
    ecosystemCompatibilityDesc: 'benefits.ecosystemCompatibilityDesc'
  },
  
  // 技术
  technology: {
    title: 'technology.title',
    description: 'technology.description',
    consensus: 'technology.consensus',
    smartContracts: 'technology.smartContracts',
    crossChainBridge: 'technology.crossChainBridge',
    privacyProtection: 'technology.privacyProtection',
    applicationLayer: 'technology.applicationLayer',
    consensusLayer: 'technology.consensusLayer',
    networkLayer: 'technology.networkLayer',
    dataLayer: 'technology.dataLayer'
  },
  
  // 行动召唤
  cta: {
    title: 'cta.title',
    description: 'cta.description',
    viewDocs: 'cta.viewDocs',
    contributeCode: 'cta.contributeCode',
    developerQuestion: 'cta.developerQuestion',
    developerGuide: 'cta.developerGuide'
  },
  
  // 页脚
  footer: {
    description: 'footer.description',
    products: 'footer.products',
    support: 'footer.support',
    chainDeployment: 'footer.chainDeployment',
    nodeManagement: 'footer.nodeManagement',
    smartContracts: 'footer.smartContracts',
    crossChainBridge: 'footer.crossChainBridge',
    documentation: 'footer.documentation',
    technicalSupport: 'footer.technicalSupport',
    communityForum: 'footer.communityForum',
    contactUs: 'footer.contactUs',
    allRightsReserved: 'footer.allRightsReserved',
    privacyPolicy: 'footer.privacyPolicy',
    termsOfService: 'footer.termsOfService',
    cookiePolicy: 'footer.cookiePolicy'
  },
  
  // 模态框
  modal: {
    download: 'modal.download',
    downloadWallet: 'modal.downloadWallet',
    scanQRCode: 'modal.scanQRCode',
    scanToDownload: 'modal.scanToDownload',
    directDownload: 'modal.directDownload',
    visitWebsite: 'modal.visitWebsite'
  },

  // 白皮书
  whitepaper: {
    title: 'whitepaper.title',
    description: 'whitepaper.description',
    whitepaper: 'whitepaper.whitepaper',
    whitepaperDesc: 'whitepaper.whitepaperDesc',
    technicalDocs: 'whitepaper.technicalDocs',
    technicalDocsDesc: 'whitepaper.technicalDocsDesc',
    roadmap: 'whitepaper.roadmap',
    roadmapDesc: 'whitepaper.roadmapDesc',
    demoVideo: 'whitepaper.demoVideo',
    demoVideoDesc: 'whitepaper.demoVideoDesc',
    pdf: 'whitepaper.pdf',
    onlineDocs: 'whitepaper.onlineDocs',
    webpage: 'whitepaper.webpage',
    video: 'whitepaper.video',
    roadmapTitle: 'whitepaper.roadmapTitle',
    roadmapDescription: 'whitepaper.roadmapDescription',
    mainnetLaunch: 'whitepaper.mainnetLaunch',
    mainnetLaunchDesc: 'whitepaper.mainnetLaunchDesc',
    smartContracts: 'whitepaper.smartContracts',
    smartContractsDesc: 'whitepaper.smartContractsDesc',
    crossChain: 'whitepaper.crossChain',
    crossChainDesc: 'whitepaper.crossChainDesc',
    ecosystemExpansion: 'whitepaper.ecosystemExpansion',
    ecosystemExpansionDesc: 'whitepaper.ecosystemExpansionDesc',
    joinCommunity: 'whitepaper.joinCommunity'
  }
}

// 中文文本内容（当前使用）
export const zhCN = {
  common: {
    loading: '加载中...',
    error: '错误',
    success: '成功',
    cancel: '取消',
    confirm: '确认',
    close: '关闭',
    back: '返回',
    next: '下一步',
    previous: '上一步',
    language: '语言',
    androidOnlyMessage: '当前钱包App仅支持Android设备，请使用Android手机访问此页面下载'
  },
  
  navigation: {
    features: '特性',
    benefits: '优势',
    technology: '技术',
    whitepaper: '白皮书',
    wallet: '钱包',
    contact: '联系我们',
    developers: '开发者'
  },
  
  hero: {
    title: '高性能 · 可扩展',
    subtitle: '企业级区块链基础设施',
    description: 'NBCoin (NBC) 是一个基于 Layer 1 的高性能公链平台，采用先进的共识机制和分片技术，支持智能合约、跨链互操作和 DeFi 应用部署，为开发者提供完整的区块链基础设施。',
    startBuilding: '开始构建',
    learnMore: '了解更多',
    stability: '系统稳定性',
    openSource: '开源',
    scalability: '扩展能力',
    tpsCapability: 'TPS 处理能力',
    transparent: '透明可信',
    crossChain: '跨链',
    interoperability: '互操作能力'
  },
  
  features: {
    title: '核心特性',
    description: '专为高性能、安全和可扩展而设计的 Layer 1 公链平台，为开发者提供完整的区块链基础设施',
    rapidDevelopment: '开发者友好',
    rapidDevelopmentDesc: '提供完整的开发工具链、SDK 和 API，支持多种编程语言，让开发者快速构建和部署智能合约。',
    stability: '稳定可靠',
    stabilityDesc: '99.9%的系统稳定性，采用先进的共识机制和容错技术，确保网络持续运行。',
    scalability: '水平扩展',
    scalabilityDesc: '采用分片技术和 Layer 2 解决方案，支持水平扩展，可根据业务需求动态调整网络容量和性能。',
    maintainability: '易于维护',
    maintainabilityDesc: '提供完整的监控、日志和运维工具，让系统维护变得简单高效。',
    crossChain: '跨链互操作',
    crossChainDesc: '支持多种区块链标准和协议，实现与其他公链的互操作性和资产转移，构建完整的区块链生态。',
    communityDriven: '社区驱动',
    communityDrivenDesc: '开源透明，社区治理，开发者共同参与生态建设和决策。'
  },
  
  benefits: {
    title: '为什么选择 NBCoin (NBC)？',
    description: '我们专注于解决区块链开发中的核心痛点：性能、安全性和可扩展性',
    networkStability: '网络稳定性',
    networkStabilityDesc: '采用先进的共识机制和容错技术，确保网络高可用性，满足去中心化应用的严格要求。',
    security: '安全防护',
    securityDesc: '多层安全防护机制，包括智能合约审计、漏洞检测和实时威胁监控，保护您的资产安全。',
    performance: '高性能',
    performanceDesc: '优化的网络架构和智能路由，支持高并发交易处理，提供高性能的交易处理能力。',
    unlimitedScaling: '无限扩展',
    unlimitedScalingDesc: '支持水平扩展，采用分片技术和 Layer 2 解决方案，可根据业务需求动态调整网络容量。',
    modularDesign: '模块化设计',
    modularDesignDesc: '采用模块化架构，支持插件式扩展，可以轻松添加新功能和集成第三方服务。',
    ecosystemCompatibility: '生态兼容',
    ecosystemCompatibilityDesc: '支持多种区块链标准和协议，实现与其他公链的互操作性，构建完整的区块链生态。'
  },
  
  technology: {
    title: '技术架构',
    description: '基于先进的区块链技术构建，采用分层架构设计，确保性能、安全性和可扩展性的完美平衡',
    consensus: '共识机制',
    consensusDesc: '采用改进的PoS共识算法，确保网络安全性和交易确认速度',
    smartContracts: '智能合约',
    smartContractsDesc: '支持多种编程语言，提供安全的智能合约执行环境',
    crossChain: '跨链桥接',
    crossChainDesc: '内置跨链桥接功能，实现多链资产互通',
    privacy: '隐私保护',
    privacyDesc: '零知识证明技术，保护用户交易隐私',
    applicationLayer: '应用层',
    applicationLayerDesc: 'DApps, 智能合约, API',
    consensusLayer: '共识层',
    consensusLayerDesc: 'PoS, 验证节点, 区块生成',
    networkLayer: '网络层',
    networkLayerDesc: 'P2P网络, 节点发现, 数据传输',
    dataLayer: '数据层',
    dataLayerDesc: '区块链, 状态存储, 默克尔树',
    tps: 'TPS',
    seconds: '秒',
    confirmationTime: '确认时间',
    high: '高',
    availability: '可用性',
    sharding: '分片',
    scalability: '扩展性'
  },
  
  cta: {
    title: '准备构建去中心化未来？',
    description: '加入 NBCoin (NBC) 生态系统，体验高性能、安全、可扩展的公链平台。开源透明，社区驱动，共同构建下一代区块链基础设施。',
    viewDocs: '查看文档',
    contributeCode: '贡献代码',
    developerQuestion: '开发者？',
    developerGuide: '开发者指南'
  },
  
  footer: {
    description: '稳定、高效、可扩展的去中心化公链平台，为开发者提供完整的区块链基础设施和工具。',
    products: '产品',
    support: '支持',
    chainDeployment: '公链部署',
    nodeManagement: '节点管理',
    smartContracts: '智能合约',
    crossChainBridge: '跨链桥接',
    documentation: '文档中心',
    technicalSupport: '技术支持',
    communityForum: '社区论坛',
    contactUs: '联系我们',
    allRightsReserved: '保留所有权利。',
    privacyPolicy: '隐私政策',
    termsOfService: '服务条款',
    cookiePolicy: 'Cookie政策'
  },
  
  modal: {
    download: '下载',
    downloadWallet: '下载 中科 钱包',
    scanQRCode: '使用手机扫描二维码下载',
    scanToDownload: '扫描二维码下载应用',
    directDownload: '直接下载 APK',
    visitWebsite: '访问钱包网站'
  },

  // 白皮书
  whitepaper: {
    title: '了解更多',
    description: '深入了解 NBCoin (NBC) 的技术细节、发展规划和生态系统',
    whitepaper: '技术白皮书',
    whitepaperDesc: '深入了解 NBCoin (NBC) 的技术架构、共识机制和核心特性',
    technicalDocs: '技术文档',
    technicalDocsDesc: '开发者指南、API 文档和智能合约示例',
    roadmap: '路线图',
    roadmapDesc: '查看 NBCoin (NBC) 的发展规划和里程碑',
    demoVideo: '演示视频',
    demoVideoDesc: '观看平台功能演示和操作指南',
    pdf: 'PDF',
    onlineDocs: '在线文档',
    webpage: '网页',
    video: '视频',
    roadmapTitle: '发展路线图',
    roadmapDescription: '清晰的规划确保 NBCoin (NBC) 稳步发展，为用户提供可靠的服务',
    mainnetLaunch: '主网启动',
    mainnetLaunchDesc: 'NBCoin 主网正式上线，支持基础交易功能',
    smartContracts: '智能合约',
    smartContractsDesc: '发布智能合约平台，支持 DApp 开发',
    crossChain: '跨链桥接',
    crossChainDesc: '实现与其他主流公链的资产互通',
    ecosystemExpansion: '生态扩展',
    ecosystemExpansionDesc: '构建完整的 DeFi 生态系统',
    joinCommunity: '加入我们的社区'
  }
}

// 英文文本内容（未来使用）
export const enUS = {
  common: {
    loading: 'Loading...',
    error: 'Error',
    success: 'Success',
    cancel: 'Cancel',
    confirm: 'Confirm',
    close: 'Close',
    back: 'Back',
    next: 'Next',
    previous: 'Previous',
    language: 'Language',
    androidOnlyMessage: 'The wallet app currently only supports Android devices. Please use an Android phone to access this page for download.'
  },
  
  navigation: {
    features: 'Features',
    benefits: 'Benefits',
    technology: 'Technology',
    whitepaper: 'Whitepaper',
    wallet: 'Wallet',
    contact: 'Contact',
    developers: 'Developers'
  },
  
  hero: {
    title: 'High Performance · Scalable',
    subtitle: 'Enterprise-Grade Blockchain Infrastructure',
    description: 'NBCoin (NBC) is a Layer 1 high-performance public blockchain platform that uses advanced consensus mechanisms and sharding technology, supporting smart contracts, cross-chain interoperability, and DeFi application deployment, providing developers with complete blockchain infrastructure.',
    startBuilding: 'Start Building',
    learnMore: 'Learn More',
    stability: 'System Stability',
    openSource: 'Open Source',
    scalability: 'Scalability',
    tpsCapability: 'TPS Processing Power',
    transparent: 'Transparent & Trustworthy',
    crossChain: 'Cross-Chain',
    interoperability: 'Interoperability'
  },
  
  features: {
    title: 'Core Features',
    description: 'A Layer 1 public blockchain platform designed for high performance, security, and scalability, providing developers with complete blockchain infrastructure',
    rapidDevelopment: 'Developer Friendly',
    rapidDevelopmentDesc: 'Complete development toolchain, SDK and API support for multiple programming languages, enabling developers to quickly build and deploy smart contracts.',
    stability: 'Stable & Reliable',
    stabilityDesc: '99.9% system stability with advanced consensus mechanisms and fault tolerance technology ensuring continuous network operation.',
    scalability: 'Horizontal Scaling',
    scalabilityDesc: 'Sharding technology and Layer 2 solutions support horizontal scaling, dynamically adjusting network capacity and performance based on business needs.',
    maintainability: 'Easy Maintenance',
    maintainabilityDesc: 'Complete monitoring, logging and operational tools make system maintenance simple and efficient.',
    crossChain: 'Cross-Chain Interoperability',
    crossChainDesc: 'Support for multiple blockchain standards and protocols, enabling interoperability and asset transfers with other public chains, building a complete blockchain ecosystem.',
    communityDriven: 'Community Driven',
    communityDrivenDesc: 'Open source and transparent, community governance with developers participating in ecosystem building and decision-making.'
  },
  
  benefits: {
    title: 'Why Choose NBCoin (NBC)?',
    description: 'We focus on solving the core pain points in blockchain development: performance, security, and scalability',
    networkStability: 'Network Stability',
    networkStabilityDesc: 'Advanced consensus mechanisms and fault tolerance technology ensure high network availability, meeting the strict requirements of decentralized applications.',
    security: 'Security Protection',
    securityDesc: 'Multi-layer security protection mechanisms including smart contract auditing, vulnerability detection, and real-time threat monitoring to protect your assets.',
    performance: 'High Performance',
    performanceDesc: 'Optimized network architecture and intelligent routing support high-concurrency transaction processing, providing high-performance transaction capabilities.',
    unlimitedScaling: 'Unlimited Scaling',
    unlimitedScalingDesc: 'Support for horizontal scaling with sharding technology and Layer 2 solutions, dynamically adjusting network capacity based on business needs.',
    modularDesign: 'Modular Design',
    modularDesignDesc: 'Modular architecture supporting plugin-based extensions, easily adding new features and integrating third-party services.',
    ecosystemCompatibility: 'Ecosystem Compatibility',
    ecosystemCompatibilityDesc: 'Support for multiple blockchain standards and protocols, enabling interoperability with other public chains and building a complete blockchain ecosystem.'
  },
  
  technology: {
    title: 'Technical Architecture',
    description: 'Built on advanced blockchain technology with layered architecture design, ensuring the perfect balance of performance, security, and scalability',
    consensus: 'Consensus Mechanism',
    consensusDesc: 'Improved PoS consensus algorithm ensuring network security and transaction confirmation speed',
    smartContracts: 'Smart Contracts',
    smartContractsDesc: 'Support for multiple programming languages, providing a secure smart contract execution environment',
    crossChain: 'Cross-Chain Bridge',
    crossChainDesc: 'Built-in cross-chain bridging functionality enabling multi-chain asset interoperability',
    privacy: 'Privacy Protection',
    privacyDesc: 'Zero-knowledge proof technology protecting user transaction privacy',
    applicationLayer: 'Application Layer',
    applicationLayerDesc: 'DApps, Smart Contracts, API',
    consensusLayer: 'Consensus Layer',
    consensusLayerDesc: 'PoS, Validator Nodes, Block Generation',
    networkLayer: 'Network Layer',
    networkLayerDesc: 'P2P Network, Node Discovery, Data Transmission',
    dataLayer: 'Data Layer',
    dataLayerDesc: 'Blockchain, State Storage, Merkle Tree',
    tps: 'TPS',
    seconds: 's',
    confirmationTime: 'Confirmation Time',
    high: 'High',
    availability: 'Availability',
    sharding: 'Sharding',
    scalability: 'Scalability'
  },
  
  cta: {
    title: 'Ready to Build a Decentralized Future?',
    description: 'Join the NBCoin (NBC) ecosystem and experience a high-performance, secure, and scalable public blockchain platform. Open source, transparent, community-driven, working together to build next-generation blockchain infrastructure.',
    viewDocs: 'View Documentation',
    contributeCode: 'Contribute Code',
    developerQuestion: 'Developer?',
    developerGuide: 'Developer Guide'
  },
  
  footer: {
    description: 'A stable, efficient, and scalable decentralized public blockchain platform that provides developers with complete blockchain infrastructure and tools.',
    products: 'Products',
    support: 'Support',
    chainDeployment: 'Chain Deployment',
    nodeManagement: 'Node Management',
    smartContracts: 'Smart Contracts',
    crossChainBridge: 'Cross-Chain Bridge',
    documentation: 'Documentation',
    technicalSupport: 'Technical Support',
    communityForum: 'Community Forum',
    contactUs: 'Contact Us',
    allRightsReserved: 'All rights reserved.',
    privacyPolicy: 'Privacy Policy',
    termsOfService: 'Terms of Service',
    cookiePolicy: 'Cookie Policy'
  },
  
  modal: {
    download: 'Download',
    downloadWallet: 'Download ZKB Wallet',
    scanQRCode: 'Scan QR code with your phone to download',
    scanToDownload: 'Scan QR code to download app',
    directDownload: 'Direct Download APK',
    visitWebsite: 'Visit Wallet Website'
  },

  // 白皮书
  whitepaper: {
    title: 'Learn More',
    description: 'Deep dive into NBCoin (NBC) technical details, development plans, and ecosystem',
    whitepaper: 'Technical Whitepaper',
    whitepaperDesc: 'Deep dive into NBCoin (NBC) technical architecture, consensus mechanisms, and core features',
    technicalDocs: 'Technical Documentation',
    technicalDocsDesc: 'Developer guides, API documentation, and smart contract examples',
    roadmap: 'Roadmap',
    roadmapDesc: 'View NBCoin (NBC) development plans and milestones',
    demoVideo: 'Demo Video',
    demoVideoDesc: 'Watch platform feature demos and operation guides',
    pdf: 'PDF',
    onlineDocs: 'Online Docs',
    webpage: 'Webpage',
    video: 'Video',
    roadmapTitle: 'Development Roadmap',
    roadmapDescription: 'Clear planning ensures steady development of NBCoin (NBC), providing reliable services for users',
    mainnetLaunch: 'Mainnet Launch',
    mainnetLaunchDesc: 'NBCoin mainnet officially launches with basic transaction functionality',
    smartContracts: 'Smart Contracts',
    smartContractsDesc: 'Release smart contract platform supporting DApp development',
    crossChain: 'Cross-Chain Bridge',
    crossChainDesc: 'Enable asset interoperability with other mainstream public chains',
    ecosystemExpansion: 'Ecosystem Expansion',
    ecosystemExpansionDesc: 'Build a complete DeFi ecosystem',
    joinCommunity: 'Join Our Community'
  }
}

// 语言包映射
export const translations = {
  'zh-CN': zhCN,
  'en-US': enUS
}

// 获取文本内容的函数
export function getText(locale: string, key: string): string {
  const localeData = translations[locale as keyof typeof translations] || zhCN
  const keys = key.split('.')
  let value: any = localeData
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k]
    } else {
      // 回退到中文
      const fallbackValue = zhCN
      for (const fk of keys) {
        if (fallbackValue && typeof fallbackValue === 'object' && fk in fallbackValue) {
          value = (fallbackValue as any)[fk]
        }
      }
      break
    }
  }
  
  return typeof value === 'string' ? value : key
}
