# Vercel पर Deploy करने के Steps (हिंदी में)

## Method 1: Vercel Website से (सबसे आसान) ⭐

### Step 1: Vercel Account बनाएं
1. https://vercel.com पर जाएं
2. "Sign Up" पर click करें
3. GitHub account से login करें (recommended)

### Step 2: Project Import करें
1. Vercel dashboard में "Add New Project" पर click करें
2. "Import Git Repository" section में अपना GitHub repo select करें: `darkcoderKaif/Portfolio`
3. "Import" पर click करें

### Step 3: Project Settings Configure करें
**बहुत जरूरी:**
1. **Root Directory** में: `Neon-Portfolio` लिखें (यह बहुत important है!)
2. **Framework Preset:** "Other" या "Vite" select करें
3. **Build Command:** `npm run build` (auto-detect होगा)
4. **Output Directory:** `dist/public` (auto-detect होगा)
5. **Install Command:** `npm install` (auto-detect होगा)

### Step 4: Environment Variables (अगर जरूरत हो)
- अगर आपके app में database या API keys हैं, तो यहाँ add करें
- `NODE_ENV=production` automatically set हो जाएगा

### Step 5: Deploy करें
1. "Deploy" button पर click करें
2. कुछ minutes wait करें
3. आपका portfolio live हो जाएगा! 🎉

---

## Method 2: Vercel CLI से (Advanced)

### Step 1: Vercel CLI Install करें
```bash
npm install -g vercel
```

### Step 2: Login करें
```bash
vercel login
```

### Step 3: Deploy करें
```bash
cd Neon-Portfolio
vercel
```

Follow the prompts और आपका project deploy हो जाएगा!

---

## Troubleshooting

### अगर Build Fail हो रहा है:
1. **Root Directory check करें:** Settings में `Neon-Portfolio` set होना चाहिए
2. **Build logs check करें:** Vercel dashboard में "Build Logs" देखें
3. **Node.js version:** Vercel automatically latest version use करेगा

### अगर Static Files नहीं load हो रहे:
- `outputDirectory` में `dist/public` होना चाहिए
- Build successfully complete होना चाहिए

---

## Important Notes

⚠️ **Note:** आपका portfolio एक full Express server है, जो Vercel पर perfectly work नहीं कर सकता क्योंकि Vercel serverless functions के लिए बना है।

**Better Alternatives:**
- **Railway** - Full-stack apps के लिए perfect (https://railway.app)
- **Render** - भी बहुत अच्छा option (https://render.com)

लेकिन अगर आप Vercel पर deploy करना चाहते हैं, तो static files के लिए यह काम करेगा।

---

## Success के बाद

Deploy successful होने के बाद:
- आपको एक Vercel URL मिलेगा: `https://your-project.vercel.app`
- Custom domain भी add कर सकते हैं
- Automatic deployments: हर बार GitHub में push करने पर automatically deploy होगा

