# AI Operations Lead - Landing Page

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/ai-toolbelt-sprint)
[![CI/CD Pipeline](https://github.com/your-username/ai-toolbelt-sprint/workflows/CI/CD%20Pipeline/badge.svg)](https://github.com/your-username/ai-toolbelt-sprint/actions)
[![Vercel](https://img.shields.io/badge/vercel-deployed-brightgreen)](https://ai-operations-lead.vercel.app)

A modern, high-converting landing page for AI consulting services. Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Live Demo

**Production**: [https://ai-operations-lead.vercel.app](https://ai-operations-lead.vercel.app)

## 🎯 Features

- **Modern Design**: Clean, professional aesthetic with AI-themed geometric patterns
- **Responsive**: Mobile-first design that works on all devices
- **Performance**: Optimized for speed with Next.js 14 and static generation
- **Animations**: Smooth scroll-triggered animations with Framer Motion
- **Dark Mode**: System preference detection with manual toggle
- **Forms**: Validated contact forms with React Hook Form + Zod
- **SEO**: Optimized meta tags, structured data, and Open Graph
- **Analytics**: Vercel Analytics integration
- **Accessibility**: WCAG 2.1 AA compliant

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Fonts**: Inter (body) + Cal Sans (headings)
- **Deployment**: Vercel with CI/CD
- **Analytics**: Vercel Analytics

## 🏗️ Project Structure

```
├── src/
│   ├── app/                    # Next.js app directory
│   │   ├── globals.css         # Global styles & design system
│   │   ├── layout.tsx          # Root layout with theme provider
│   │   └── page.tsx            # Main landing page
│   ├── components/
│   │   ├── sections/           # Page sections
│   │   │   ├── hero.tsx        # Hero section with animations
│   │   │   ├── services.tsx    # Services & value props
│   │   │   ├── case-studies.tsx # Client testimonials
│   │   │   ├── pricing.tsx     # Pricing section
│   │   │   ├── contact.tsx     # Contact form
│   │   │   ├── header.tsx      # Navigation header
│   │   │   └── footer.tsx      # Site footer
│   │   └── ui/                 # Reusable UI components
│   │       ├── button.tsx      # Button variants
│   │       ├── card.tsx        # Card components
│   │       ├── input.tsx       # Form inputs
│   │       ├── textarea.tsx    # Text areas
│   │       └── theme-toggle.tsx # Dark mode toggle
│   ├── hooks/
│   │   └── use-theme.tsx       # Theme management
│   └── lib/
│       └── utils.ts            # Utility functions
├── .github/workflows/
│   └── ci.yml                  # GitHub Actions CI/CD
├── vercel.json                 # Vercel configuration
└── docs/
    ├── GITHUB_ACTIONS_SETUP.md # CI/CD setup guide
    └── DEPLOYMENT.md           # Deployment documentation
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Local Development

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/ai-toolbelt-sprint.git
   cd ai-toolbelt-sprint
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint checks |
| `npm run lint:fix` | Fix ESLint issues |
| `npm run type-check` | TypeScript type checking |
| `npm run validate` | Full validation (lint + type + build) |
| `npm run deploy` | Deploy to Vercel production |
| `npm run preview` | Deploy to Vercel preview |

## 🚢 Deployment

This project is configured with automated CI/CD using GitHub Actions and Vercel.

### Automatic Deployment

- **Production**: Push to `main` branch triggers automatic deployment
- **Preview**: Pull requests get preview deployments with automatic URLs
- **Quality Gates**: ESLint, TypeScript, and build checks must pass

### Setup CI/CD

1. **Follow the setup guide**: [GITHUB_ACTIONS_SETUP.md](./GITHUB_ACTIONS_SETUP.md)
2. **Configure Vercel secrets** in GitHub repository settings
3. **Push to main** branch to trigger first deployment

### Manual Deployment

```bash
# Deploy to production
npm run deploy

# Create preview deployment  
npm run preview
```

## 🎨 Design System

### Colors

- **Primary**: Deep Blue (#1e40af)
- **Secondary**: Bright Cyan (#06b6d4) 
- **Accent**: Emerald (#10b981)
- **Neutral**: Slate grays (#f8fafc to #0f172a)

### Typography

- **Headings**: Cal Sans (Google Fonts)
- **Body**: Inter (Google Fonts)
- **Responsive**: Fluid typography scaling

### Components

All components follow a consistent design system with:
- Accessible focus states
- Hover animations
- Dark mode support
- Mobile-responsive layouts

## 📊 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, CLS
- **Bundle Size**: Optimized with code splitting
- **Images**: Next.js Image optimization
- **Fonts**: Google Fonts with display=swap

## ♿ Accessibility

- **WCAG 2.1 AA** compliant
- **Keyboard navigation** support
- **Screen reader** optimized
- **Color contrast** ratios meet standards
- **Focus indicators** clearly visible

## 🔧 Configuration

### Environment Variables

Create `.env.local` for local development:

```env
# Optional: Disable Next.js telemetry
NEXT_TELEMETRY_DISABLED=1
```

### Vercel Configuration

See `vercel.json` for:
- Security headers
- Caching policies  
- Redirects and rewrites
- Build optimization

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Workflow

1. **Quality checks**: `npm run validate`
2. **Local testing**: `npm run dev`
3. **Build verification**: `npm run build`
4. **Create PR**: Automatic preview deployment

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: Check [DEPLOYMENT.md](./DEPLOYMENT.md) for deployment help
- **Issues**: Create a GitHub issue for bugs or feature requests
- **Setup**: Follow [GITHUB_ACTIONS_SETUP.md](./GITHUB_ACTIONS_SETUP.md) for CI/CD setup

## 🙏 Acknowledgments

- **Next.js** - React framework
- **Vercel** - Deployment platform
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide** - Icon library

---

Built with ❤️ for high-converting AI consulting services.
