# Deployment Guide

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy your Next.js portfolio. Follow these steps:

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push your code to GitHub:**
   ```bash
   git add .
   git commit -m "Initial portfolio commit"
   git remote add origin <your-github-repo-url>
   git push -u origin main
   ```

2. **Go to Vercel:**
   - Visit [vercel.com](https://vercel.com)
   - Sign up or log in with your GitHub account

3. **Import your repository:**
   - Click "Add New Project"
   - Select your portfolio repository
   - Vercel will automatically detect Next.js settings
   - Click "Deploy"

4. **Done!** Your site will be live at `https://your-project-name.vercel.app`

### Method 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   vercel
   ```

3. **Follow the prompts:**
   - Link to your Vercel account
   - Confirm project settings
   - Deploy!

### Custom Domain (Optional)

1. Go to your project settings on Vercel
2. Navigate to "Domains"
3. Add your custom domain
4. Update your domain's DNS settings as instructed

## Environment Variables

If you add any environment variables in the future:

1. Create a `.env.local` file (already in .gitignore)
2. Add your variables:
   ```
   NEXT_PUBLIC_API_URL=your_api_url
   ```
3. In Vercel dashboard, go to Settings > Environment Variables
4. Add the same variables there

## Build Command

The build command is already configured in `package.json`:
```bash
npm run build
```

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure images are in the correct path (`public/images/`)
- Check the Vercel build logs for specific errors

### Images Not Loading
- Make sure images are in `public/images/` directory
- Image paths in code should be `/images/filename.png`
- Vercel automatically optimizes images with Next.js Image component

### Port Already in Use (Local Development)
- The dev server will automatically use the next available port
- Or stop the process using port 3000: `lsof -ti:3000 | xargs kill -9`

## Performance Optimization

Your portfolio is already optimized with:
- ✅ Next.js Image optimization
- ✅ Automatic code splitting
- ✅ Static generation where possible
- ✅ Tailwind CSS purging
- ✅ Framer Motion lazy loading

## Analytics (Optional)

To add Vercel Analytics:

1. In Vercel dashboard, go to your project
2. Navigate to Analytics tab
3. Enable Analytics
4. Install the package:
   ```bash
   npm install @vercel/analytics
   ```
5. Add to your layout:
   ```tsx
   import { Analytics } from '@vercel/analytics/react';
   
   export default function RootLayout({ children }) {
     return (
       <html>
         <body>
           {children}
           <Analytics />
         </body>
       </html>
     );
   }
   ```

## Support

If you encounter any issues:
- Check [Next.js Documentation](https://nextjs.org/docs)
- Check [Vercel Documentation](https://vercel.com/docs)
- Check [Vercel Community](https://github.com/vercel/next.js/discussions)
