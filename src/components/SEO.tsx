import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
}

export function SEO({
  title = "Fluently - AI Speech Therapy",
  description = "Transform your speech with AI-powered therapy. Practice anywhere, anytime with real-time feedback and personalized exercises.",
  image = "/images/og-image.jpg",
  url = "https://fluently.pt",
}: SEOProps) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />

      {/* OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Fluently",
          applicationCategory: "HealthApplication",
          description: description,
          offers: {
            "@type": "Offer",
            availability: "https://schema.org/ComingSoon",
          },
          publisher: {
            "@type": "Organization",
            name: "Fluently",
            logo: {
              "@type": "ImageObject",
              url: `${url}/images/logo_text.svg`,
            },
          },
        })}
      </script>
    </Helmet>
  );
}
