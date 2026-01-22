export default function sitemap() {
  const baseUrl = "https://rimshalabs.com";

  return [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7,
    },{
      url: `${baseUrl}/our_services`,
      lastModified: new Date(),
      priority: 0.6,
    },{
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      priority: 0.5,
    },
    {
      url: `${baseUrl}/quality_policy`,
      lastModified: new Date(),
      priority: 0.4,
    },
  ];
}
