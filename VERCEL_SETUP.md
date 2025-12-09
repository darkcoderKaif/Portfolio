# Vercel Deployment Setup

## Important: Configure Root Directory

Since your project is in the `Neon-Portfolio` subdirectory, you need to configure Vercel to use it as the root:

1. Go to your Vercel project settings
2. Navigate to **Settings** → **General**
3. Under **Root Directory**, click **Edit**
4. Set it to: `Neon-Portfolio`
5. Save the changes

This will tell Vercel to look for `package.json` and run build commands from the `Neon-Portfolio` directory.

## Alternative: Use Railway or Render

**Note:** Vercel is optimized for serverless functions and static sites. Your portfolio uses a full Express server, which works better on:

- **Railway** (Recommended) - https://railway.app
- **Render** - https://render.com

These platforms are better suited for full-stack Node.js applications like yours.

See `DEPLOYMENT.md` for detailed instructions on deploying to Railway or Render.

