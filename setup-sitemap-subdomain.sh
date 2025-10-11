#!/bin/bash

# Sitemap Subdomain Setup Script for Vercel

echo "🚀 Setting up Sitemap Subdomain for Vercel"
echo "==========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}Step 1: Deploy to Vercel${NC}"
echo "Run: vercel --prod"
echo ""

echo -e "${BLUE}Step 2: Add Subdomain in Vercel Dashboard${NC}"
echo "1. Go to: https://vercel.com/dashboard"
echo "2. Select your project: ginni-interior"
echo "3. Go to Settings > Domains"
echo "4. Click 'Add Domain'"
echo "5. Enter: sitemap.yourdomain.com (replace with your actual domain)"
echo "6. Follow Vercel's DNS configuration instructions"
echo ""

echo -e "${BLUE}Step 3: Configure DNS${NC}"
echo "Add the following CNAME record to your DNS provider:"
echo "  Type:  CNAME"
echo "  Name:  sitemap"
echo "  Value: cname.vercel-dns.com"
echo "  TTL:   3600 (or Auto)"
echo ""

echo -e "${YELLOW}Popular DNS Providers:${NC}"
echo "  • Cloudflare: DNS > Add record"
echo "  • Namecheap: Advanced DNS > Add New Record"
echo "  • GoDaddy: DNS Management > Add Record"
echo "  • AWS Route 53: Hosted zones > Create record"
echo ""

echo -e "${BLUE}Step 4: Wait for DNS Propagation${NC}"
echo "DNS changes can take 15 minutes to 48 hours to propagate globally"
echo ""

echo -e "${BLUE}Step 5: Test Your Setup${NC}"
echo "Once DNS propagates, test with:"
echo "  curl -I https://sitemap.yourdomain.com/sitemap.xml"
echo ""

echo -e "${GREEN}✅ Your sitemap files are ready!${NC}"
echo "Files available at:"
echo "  • /sitemap.xml"
echo "  • /sitemap2.xml"
echo "  • /sitemap3.xml"
echo "  • /atom.xml"
echo "  • /atom1.xml"
echo ""

echo -e "${BLUE}Step 6: Submit to Search Engines${NC}"
echo "After setup is complete:"
echo "  • Google Search Console: https://search.google.com/search-console"
echo "  • Bing Webmaster Tools: https://www.bing.com/webmasters"
echo ""

echo "📚 For detailed instructions, see: SITEMAP_SUBDOMAIN_SETUP.md"
echo ""
echo "Need help? Check the troubleshooting section in the guide!"
