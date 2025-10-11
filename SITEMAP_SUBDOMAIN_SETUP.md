# Sitemap Subdomain Setup Guide for Vercel

## Overview
This guide will help you set up a subdomain (e.g., `sitemap.yourdomain.com`) to host your XML sitemaps on Vercel.

## Prerequisites
- A domain connected to your Vercel project
- Access to your domain's DNS settings
- Your main site already deployed on Vercel

## Option 1: Separate Vercel Project for Sitemap Subdomain (Recommended for isolation)

### Step 1: Create a New Vercel Project for Sitemaps

1. Create a new folder structure for sitemap hosting:
```bash
mkdir sitemap-subdomain
cd sitemap-subdomain
```

2. Create a minimal `package.json`:
```json
{
  "name": "sitemap-subdomain",
  "version": "1.0.0",
  "scripts": {
    "build": "echo 'Static files only'"
  }
}
```

3. Copy your sitemap files to a `public` folder in this new project:
```bash
mkdir public
cp /path/to/your/sitemap*.xml public/
cp /path/to/your/atom*.xml public/
```

4. Create a `vercel.json`:
```json
{
  "headers": [
    {
      "source": "/(.*\\.xml)",
      "headers": [
        {
          "key": "Content-Type",
          "value": "application/xml; charset=utf-8"
        },
        {
          "key": "Cache-Control",
          "value": "public, max-age=3600, s-maxage=86400"
        }
      ]
    }
  ]
}
```

5. Deploy to Vercel:
```bash
vercel --prod
```

### Step 2: Configure DNS for Subdomain

**In Vercel Dashboard:**
1. Go to your new sitemap project settings
2. Navigate to **Domains**
3. Add domain: `sitemap.yourdomain.com`
4. Vercel will provide you with DNS records

**In Your DNS Provider:**
Add a CNAME record:
- **Type**: CNAME
- **Name**: sitemap
- **Value**: cname.vercel-dns.com
- **TTL**: 3600 (or automatic)

### Step 3: Update Main Site Sitemap References

In your main site, update sitemap URLs to point to the subdomain:
```xml
<sitemap>
  <loc>https://sitemap.yourdomain.com/sitemap.xml</loc>
  <lastmod>2025-10-11</lastmod>
</sitemap>
```

## Option 2: Use Same Project with Subdomain Routing (Simpler but same deployment)

### Step 1: Configure Domain in Vercel

1. Go to your Vercel project dashboard
2. Click on **Settings** → **Domains**
3. Add your subdomain: `sitemap.yourdomain.com`
4. Vercel will provide DNS configuration

### Step 2: Configure DNS

**In Your DNS Provider:**
Add a CNAME record:
- **Type**: CNAME
- **Name**: sitemap
- **Value**: cname.vercel-dns.com
- **TTL**: 3600

### Step 3: Create Middleware for Subdomain Routing

Create `middleware.ts` in your project root:

```typescript
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || '';
  
  // Check if request is from sitemap subdomain
  if (hostname.startsWith('sitemap.')) {
    const url = request.nextUrl.clone();
    
    // Only serve XML files
    if (url.pathname.endsWith('.xml')) {
      return NextResponse.rewrite(new URL(url.pathname, request.url));
    }
    
    // Redirect everything else to main domain
    url.hostname = hostname.replace('sitemap.', '');
    return NextResponse.redirect(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: '/:path*',
};
```

### Step 4: Update Next.js Config

Add to your `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
  // ... existing config
  async rewrites() {
    return [
      {
        source: '/:path*.xml',
        destination: '/:path*.xml',
      },
    ];
  },
};
```

## Option 3: Using Vercel Edge Config (Advanced)

For dynamic sitemap generation on subdomain:

1. Install Vercel Edge Config SDK:
```bash
npm install @vercel/edge-config
```

2. Create API route at `app/api/sitemap/route.ts`:
```typescript
import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const hostname = new URL(request.url).hostname;
  
  if (!hostname.startsWith('sitemap.')) {
    return NextResponse.redirect(new URL('/', request.url));
  }
  
  // Serve your sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <!-- Your sitemap entries -->
  </urlset>`;
  
  return new NextResponse(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
```

## Recommended Approach for Your Project

**I recommend Option 1** (Separate Vercel Project) because:
- ✅ Clean separation of concerns
- ✅ Independent deployments
- ✅ Simpler caching strategy
- ✅ Lower resource usage on main site
- ✅ Easy to maintain and update sitemaps

## DNS Propagation

After setting up DNS records:
- Changes typically propagate within **15 minutes to 1 hour**
- Full global propagation can take up to **48 hours**
- Use `dig sitemap.yourdomain.com` or online tools to check DNS status

## Testing Your Setup

1. **Check DNS Resolution:**
```bash
nslookup sitemap.yourdomain.com
```

2. **Test Sitemap Access:**
```bash
curl -I https://sitemap.yourdomain.com/sitemap.xml
```

3. **Verify in Google Search Console:**
- Add the subdomain as a property
- Submit sitemap URL

## Updating Sitemaps

### For Separate Project (Option 1):
```bash
cd sitemap-subdomain
# Update files in public/
vercel --prod
```

### For Same Project (Options 2 & 3):
```bash
# Update files in public/
vercel --prod
```

## Troubleshooting

### Subdomain Not Resolving
- Check DNS records are correct
- Wait for DNS propagation (up to 48 hours)
- Verify CNAME points to `cname.vercel-dns.com`

### 404 on Sitemap Files
- Ensure files are in `public/` directory
- Check `vercel.json` configuration
- Verify deployment was successful

### Wrong Content-Type
- Check headers in `vercel.json`
- Clear browser cache
- Use incognito mode to test

## Best Practices

1. **Keep sitemaps under 50MB and 50,000 URLs**
2. **Use sitemap index for multiple sitemaps**
3. **Set appropriate Cache-Control headers**
4. **Update lastmod dates when content changes**
5. **Submit to Google Search Console and Bing Webmaster Tools**

## Need Help?

- Vercel Docs: https://vercel.com/docs/concepts/projects/domains
- DNS Checker: https://dnschecker.org
- Sitemap Validator: https://www.xml-sitemaps.com/validate-xml-sitemap.html
