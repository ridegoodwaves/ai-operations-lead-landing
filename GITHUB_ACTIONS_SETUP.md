# GitHub Actions CI/CD Setup Guide

This guide will help you set up continuous integration and deployment for your AI consulting landing page using GitHub Actions and Vercel.

## 🚀 Quick Setup (5 minutes)

### Step 1: Get Vercel Credentials

1. **Install Vercel CLI** (if not already installed):
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Link your project**:
   ```bash
   vercel link
   ```
   - Choose your team/organization
   - Link to existing project or create new one
   - This creates `.vercel/project.json` with your credentials

4. **Get your credentials**:
   ```bash
   cat .vercel/project.json
   ```
   Note down:
   - `projectId` (VERCEL_PROJECT_ID)
   - `orgId` (VERCEL_ORG_ID)

5. **Get your Vercel token**:
   - Go to [Vercel Dashboard → Settings → Tokens](https://vercel.com/account/tokens)
   - Create new token with appropriate scope
   - Copy the token (VERCEL_TOKEN)

### Step 2: Configure GitHub Secrets

1. Go to your GitHub repository
2. Navigate to **Settings → Secrets and variables → Actions**
3. Click **New repository secret** and add:

   | Secret Name | Value | Description |
   |-------------|--------|-------------|
   | `VERCEL_TOKEN` | Your Vercel token | API token for deployments |
   | `VERCEL_ORG_ID` | Organization ID from `.vercel/project.json` | Your team/personal account ID |
   | `VERCEL_PROJECT_ID` | Project ID from `.vercel/project.json` | Specific project identifier |

### Step 3: Test the Pipeline

1. **Commit and push** your changes:
   ```bash
   git add .
   git commit -m "Add CI/CD pipeline"
   git push origin main
   ```

2. **Check GitHub Actions**:
   - Go to your repo → **Actions** tab
   - You should see the workflow running
   - Green checkmarks = success ✅

3. **Verify deployment**:
   - Check your Vercel dashboard
   - Your site should be live at your Vercel URL

## 📋 What the Pipeline Does

### On Every Push/PR:
- ✅ **Code Quality**: ESLint checks for code quality
- ✅ **Type Safety**: TypeScript compilation check
- ✅ **Build Test**: Ensures the app builds successfully
- ✅ **Security**: Dependency vulnerability scan

### On Main Branch Push:
- 🚀 **Production Deploy**: Automatic deployment to Vercel production
- 📊 **Performance**: Optimized build artifacts

### On Pull Requests:
- 🔍 **Preview Deploy**: Creates preview deployment
- 💬 **Auto Comment**: Adds preview URL to PR comments
- 🛡️ **Quality Gates**: Blocks merge if tests fail

## 🔧 Available NPM Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run lint` | Run ESLint checks |
| `npm run lint:fix` | Fix auto-fixable ESLint issues |
| `npm run type-check` | Run TypeScript type checking |
| `npm run validate` | Full validation (lint + type-check + build) |
| `npm run deploy` | Manual Vercel production deployment |
| `npm run preview` | Manual Vercel preview deployment |

## 🛠️ Local Development Workflow

1. **Create feature branch**:
   ```bash
   git checkout -b feature/new-section
   ```

2. **Make changes and test locally**:
   ```bash
   npm run dev
   npm run validate  # Check quality before commit
   ```

3. **Commit and push**:
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin feature/new-section
   ```

4. **Create Pull Request**:
   - GitHub will automatically run quality checks
   - Preview deployment will be created
   - Team can review with live preview

5. **Merge to main**:
   - Automatic production deployment
   - Live site updated instantly

## 🚨 Troubleshooting

### Common Issues:

#### ❌ "VERCEL_TOKEN not found"
- **Solution**: Double-check GitHub secrets are set correctly
- Verify secret names match exactly (case-sensitive)

#### ❌ Build fails with ESLint errors
- **Solution**: Run `npm run lint:fix` locally
- Fix remaining issues manually
- Commit and push fixes

#### ❌ TypeScript compilation errors
- **Solution**: Run `npm run type-check` locally
- Fix type errors in your code
- Ensure all imports are correct

#### ❌ Vercel deployment fails
- **Solution**: Check Vercel dashboard for detailed logs
- Verify `vercel.json` configuration
- Ensure all environment variables are set

### Getting Help:

1. **Check GitHub Actions logs**:
   - Go to Actions tab → Click on failed workflow
   - Expand failed steps for detailed error messages

2. **Check Vercel deployment logs**:
   - Go to Vercel dashboard → Click on deployment
   - Review build and function logs

3. **Local debugging**:
   ```bash
   npm run validate  # Run full checks locally
   vercel dev        # Test Vercel functions locally
   ```

## 🔐 Security Features

### Automatic Security Checks:
- **Dependency Audit**: Scans for known vulnerabilities
- **Security Headers**: Configured in `vercel.json`
- **Content Security**: X-Frame-Options, X-XSS-Protection
- **HTTPS Enforcement**: Strict-Transport-Security header

### Best Practices Enforced:
- Code quality gates (ESLint)
- Type safety (TypeScript)
- Build verification before deployment
- Automated vulnerability scanning

## 📈 Monitoring & Analytics

### Built-in Monitoring:
- **Vercel Analytics**: Automatically enabled
- **Build Metrics**: Build time and size tracking
- **Deployment Status**: Success/failure notifications

### GitHub Integration:
- **Status Checks**: PR merge protection
- **Automated Comments**: Preview URLs in PRs
- **Action Logs**: Detailed pipeline history

## 🎯 Next Steps

1. **Set up custom domain** in Vercel dashboard
2. **Configure environment variables** for different stages
3. **Add test suite** and update `npm run test` script
4. **Set up monitoring** alerts for failed deployments
5. **Configure branch protection** rules in GitHub

---

## 📝 Configuration Files Reference

- **`.github/workflows/ci.yml`** - GitHub Actions workflow
- **`vercel.json`** - Vercel deployment configuration
- **`package.json`** - NPM scripts and dependencies
- **`.vercel/project.json`** - Vercel project settings (auto-generated)

Your CI/CD pipeline is now ready! 🎉

Every push to main will automatically deploy to production, and every PR will get a preview deployment for testing.