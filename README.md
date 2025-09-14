# NBCoin (NBC) Official Website

This is the official website for a decentralized public blockchain platform, focused on providing developers with stable, efficient, and scalable blockchain infrastructure.

## Tech Stack

- **Next.js 14** - React Framework
- **TypeScript** - Type Safety
- **Tailwind CSS** - Styling Framework
- **Responsive Design** - Mobile and Desktop Support

## Features

- 🚀 **Rapid Development** - Complete development toolchain and SDK
- 🛡️ **Stable & Reliable** - 99.9% network stability
- 📈 **Unlimited Scalability** - Support for horizontal and vertical scaling
- 🔧 **Easy Maintenance** - Complete monitoring and operations tools
- 🌐 **Cross-Chain Compatible** - Support for multiple blockchain standards
- 💼 **Community-Driven** - Open source and transparent, community governance

## Quick Start

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Development Mode

```bash
npm run dev
# or
yarn dev
```

### Build Production

```bash
npm run build
# or
yarn build
```

### Start Production

```bash
npm start
# or
yarn start
```

## Project Structure

```
chainofficial/
├── app/                    # Next.js 13+ App Router
│   ├── globals.css        # Global Styles
│   ├── layout.tsx         # Root Layout
│   └── page.tsx           # Main Page
├── components/             # React Components
│   ├── Header.tsx         # Navigation Bar
│   ├── Hero.tsx           # Hero Section
│   ├── Features.tsx       # Features Introduction
│   ├── Benefits.tsx       # Benefits Display
│   ├── Technology.tsx     # Technology Architecture
│   ├── CTA.tsx            # Call to Action
│   ├── Whitepaper.tsx     # Whitepaper/Documentation Section
│   ├── Footer.tsx         # Footer
│   └── LocaleSwitcher.tsx # Language Switcher (Hidden State)
├── lib/                    # Utility Libraries
│   └── i18n/              # Internationalization Support
│       ├── config.ts      # i18n Configuration
│       ├── translations.ts # Text Translations
│       └── useLocale.ts   # Language Management Hook
├── docs/                   # Documentation
│   └── i18n-setup.md      # Multi-language Setup Guide
├── tailwind.config.js      # Tailwind Configuration
├── next.config.js          # Next.js Configuration
└── package.json            # Project Dependencies
```

## Design Philosophy

This official website focuses on highlighting the following two core values:

1. **Stability & Efficiency** - Through optimized architecture and tools, ensuring the public blockchain can run stably and provide high performance
2. **Scalability** - Adopting modular design, supporting unlimited expansion to meet ecosystem development needs

## About NBCoin (NBC)

NBCoin (NBC) is a decentralized public blockchain platform focused on providing developers with stable and efficient blockchain infrastructure. Our mission is to build an open, transparent, and community-driven blockchain ecosystem that drives the development of decentralized applications through technological innovation.

## Customization

- Modify color configuration in `tailwind.config.js`
- Add or modify components in the `components/` directory
- Update page structure in `app/page.tsx`

## Multi-language Support

The project has a complete multi-language support architecture reserved, currently hidden by default:

- **Configuration**: `lib/i18n/config.ts` - Controls multi-language feature toggle
- **Translations**: `lib/i18n/translations.ts` - Manages all text content
- **Hook**: `lib/i18n/useLocale.ts` - Language state management
- **Component**: `components/LocaleSwitcher.tsx` - Language switcher
- **Documentation**: `docs/i18n-setup.md` - Detailed setup guide

To enable multi-language support, simply change `show: true` in the configuration file.

## Deployment

Supports deployment to Vercel, Netlify and other platforms, or self-hosted servers.

## License

MIT License