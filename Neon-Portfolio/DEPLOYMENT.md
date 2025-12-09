# Deployment Guide for Neon Portfolio

This guide will help you deploy your portfolio to various hosting platforms.

## Recommended Platforms

### 🚀 Railway (Recommended - Easiest)

Railway is the easiest option for full-stack Node.js applications.

**Steps:**
1. Go to [railway.app](https://railway.app) and sign up/login
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your `darkcoderKaif/Portfolio` repository
4. Railway will automatically detect the Node.js app
5. Add environment variables if needed (in the Variables tab)
6. Your app will be deployed automatically!

**Environment Variables (if needed):**
- `NODE_ENV=production`
- `PORT` (Railway sets this automatically)

**Note:** Railway provides a free tier with $5 credit per month.

---

### 🌐 Render (Alternative - Also Easy)

Render is another great option similar to Railway.

**Steps:**
1. Go to [render.com](https://render.com) and sign up/login
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Select your repository: `darkcoderKaif/Portfolio`
5. Configure:
   - **Name:** neon-portfolio (or any name you prefer)
   - **Environment:** Node
   - **Build Command:** `npm install && npm run build`
   - **Start Command:** `npm start`
   - **Root Directory:** `Neon-Portfolio` (if needed)
6. Click "Create Web Service"

**Environment Variables:**
- `NODE_ENV=production`
- `PORT=10000` (Render uses port 10000)

**Note:** Render provides a free tier with some limitations.

---

### ⚡ Vercel (Requires Setup)

Vercel works best with serverless functions. For a full Express server, you may need to refactor. However, if you want to try:

**Steps:**
1. Go to [vercel.com](https://vercel.com) and sign up/login
2. Click "Add New Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset:** Other
   - **Root Directory:** `Neon-Portfolio`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist/public`
5. Add environment variables
6. Deploy

**Note:** Vercel's free tier is generous but may have limitations for full Express servers.

---

### 🪂 Fly.io (Alternative)

Fly.io is great for full-stack applications.

**Steps:**
1. Install Fly CLI: `npm install -g @fly/cli`
2. Sign up at [fly.io](https://fly.io)
3. Run `fly launch` in the `Neon-Portfolio` directory
4. Follow the prompts

---

## Pre-Deployment Checklist

Before deploying, make sure:

- [ ] All code is committed and pushed to GitHub
- [ ] Environment variables are set (if your app uses a database or external APIs)
- [ ] Build command works locally: `npm run build`
- [ ] Start command works locally: `npm start`

## Testing Locally

Before deploying, test the production build:

```bash
cd Neon-Portfolio
npm run build
npm start
```

Visit `http://localhost:5000` to verify everything works.

## Environment Variables

If your app uses:
- **Database:** Set up database connection strings
- **API Keys:** Add them as environment variables in your hosting platform
- **Session Secrets:** Generate and add session secrets

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure Node.js version is compatible (check `package.json` engines if specified)

### App Doesn't Start
- Verify the `start` command in `package.json` is correct
- Check that the PORT environment variable is set correctly
- Review build logs for errors

### Static Files Not Loading
- Ensure `dist/public` directory exists after build
- Check that static file serving is configured correctly

## Need Help?

- Railway Docs: https://docs.railway.app
- Render Docs: https://render.com/docs
- Vercel Docs: https://vercel.com/docs

