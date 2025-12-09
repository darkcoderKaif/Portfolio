# Vercel पर Quick Deploy Steps 🚀

## सबसे आसान तरीका (5 minutes में):

### Step 1: Vercel Website पर जाएं
👉 https://vercel.com पर जाएं और GitHub से login करें

### Step 2: New Project बनाएं
1. Dashboard में **"Add New Project"** button पर click करें
2. **"Import Git Repository"** section में अपना repo select करें: `darkcoderKaif/Portfolio`
3. **"Import"** पर click करें

### Step 3: Settings Configure करें (बहुत जरूरी!)

**Root Directory:**
- **Root Directory** field में: `Neon-Portfolio` लिखें
- यह सबसे important step है! ❗

**Build Settings:**
- Framework Preset: **"Other"** या **"Vite"** select करें
- Build Command: `npm run build` (auto-detect होगा)
- Output Directory: `dist/public` (auto-detect होगा)
- Install Command: `npm install` (auto-detect होगा)

### Step 4: Deploy करें
- **"Deploy"** button पर click करें
- 2-3 minutes wait करें
- ✅ Success! आपका portfolio live है!

---

## Deploy के बाद:

आपको एक URL मिलेगा जैसे:
- `https://portfolio-xxxxx.vercel.app`

यह URL automatically हर deployment के साथ update होगा!

---

## अगर कोई Problem हो:

1. **Build Fail हो रहा है?**
   - Root Directory में `Neon-Portfolio` set करें
   - Build Logs check करें

2. **Files नहीं load हो रहे?**
   - Output Directory `dist/public` होना चाहिए
   - Build successfully complete होना चाहिए

---

## Alternative: Railway (अगर Vercel में problem हो)

Railway full-stack apps के लिए बेहतर है:
👉 https://railway.app
- GitHub connect करें
- Auto-deploy हो जाएगा!

