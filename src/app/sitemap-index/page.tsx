export default function SitemapIndex() {
  const sitemaps = [
    { name: 'Main Sitemap', url: '/sitemap.xml', description: 'Primary sitemap index' },
    { name: 'Sitemap 2', url: '/sitemap2.xml', description: 'Additional pages sitemap' },
    { name: 'Sitemap 3', url: '/sitemap3.xml', description: 'Extended content sitemap' },
    { name: 'Atom Feed', url: '/atom.xml', description: 'RSS/Atom feed' },
    { name: 'Atom Feed 1', url: '/atom1.xml', description: 'Additional RSS/Atom feed' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Sitemap Directory</h1>
          <p className="text-gray-600 mb-8">Available XML sitemaps and feeds</p>
          
          <div className="space-y-4">
            {sitemaps.map((sitemap) => (
              <a
                key={sitemap.url}
                href={sitemap.url}
                className="block p-4 border border-gray-200 rounded-lg hover:border-blue-500 hover:shadow-md transition-all duration-200"
              >
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {sitemap.name}
                </h2>
                <p className="text-sm text-gray-600 mb-2">{sitemap.description}</p>
                <code className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {sitemap.url}
                </code>
              </a>
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">
              📝 Submit to Search Engines
            </h3>
            <p className="text-xs text-blue-800">
              Submit these sitemaps to Google Search Console and Bing Webmaster Tools
              to help search engines discover and index your content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
