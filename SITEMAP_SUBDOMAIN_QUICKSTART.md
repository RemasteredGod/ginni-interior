# 🗺️ Sitemap Subdomain - Quick Start

## What I've Set Up For You

I've configured your project to host sitemaps on a subdomain (e.g., `sitemap.yourdomain.com`). Here's what was added:

### ✅ Files Created/Modified:

1. **`vercel.json`** - Vercel configuration for headers and rewrites
2. **`middleware.ts`** - Routes sitemap subdomain requests correctly
3. **`src/app/sitemap-index/page.tsx`** - Nice landing page listing all sitemaps
4. **`SITEMAP_SUBDOMAIN_SETUP.md`** - Complete setup guide with 3 different approaches
5. **`setup-sitemap-subdomain.sh`** - Quick setup script

## 🚀 Quick Setup (3 Steps)

### Step 1: Deploy to Vercel

```bash
vercel --prod
```

### Step 2: Add Subdomain in Vercel

1. Go to your [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your project
3. Settings → Domains
4. Add: `sitemap.yourdomain.com`

### Step 3: Configure DNS

Add a CNAME record to your DNS provider:

```
Type:  CNAME
Name:  sitemap
Value: cname.vercel-dns.com
TTL:   3600
```

## 🎯 What You'll Get

After setup, your sitemaps will be available at:

- `https://sitemap.yourdomain.com/sitemap.xml`
- `https://sitemap.yourdomain.com/sitemap2.xml`
- `https://sitemap.yourdomain.com/sitemap3.xml`
- `https://sitemap.yourdomain.com/atom.xml`
- `https://sitemap.yourdomain.com/atom1.xml`

Visit `https://sitemap.yourdomain.com/` for a nice index page!

## 📋 How It Works

1. **Middleware** intercepts requests to the sitemap subdomain
2. XML files are served directly from the `/public` folder
3. Non-XML requests redirect to your main domain
4. Root path shows a nice index page listing all sitemaps

## 🔍 Testing

After DNS propagates (15 mins - 48 hours):

```bash
# Test DNS resolution
nslookup sitemap.yourdomain.com

# Test sitemap access
curl -I https://sitemap.yourdomain.com/sitemap.xml
```

## 📚 Need More Info?

- **Complete Guide**: See `SITEMAP_SUBDOMAIN_SETUP.md` for 3 different approaches
- **Run Setup Script**: `./setup-sitemap-subdomain.sh`

## 💡 Why Use a Subdomain for Sitemaps?

✅ **SEO Benefits**: Clean separation, better organization  
✅ **Performance**: Dedicated caching strategy  
✅ **Maintenance**: Easy to update without touching main site  
✅ **Professional**: Shows attention to detail

## 🆘 Troubleshooting

**Subdomain not working?**

- Wait for DNS propagation (up to 48 hours)
- Check DNS records are correct
- Verify domain is added in Vercel dashboard

**404 errors?**

- Ensure files are in `/public` folder
- Check middleware.ts is deployed
- Verify vercel.json configuration

---

**Ready to go?** Just run `vercel --prod` and follow the steps above! 🚀
