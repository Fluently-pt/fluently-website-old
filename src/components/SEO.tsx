import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  keywords?: string;
  author?: string;
}

export function SEO({
  title = "Fluently - AI Speech Therapy",
  description = "Transform your speech with AI-powered therapy. Practice anywhere, anytime with real-time feedback and personalized exercises.",
  url = "https://fluently.pt",
  image = "/images/screenshot.webp",
  keywords = "speech therapy, AI therapy, speech improvement, stuttering, pronunciation, language learning",
  author = "Fluently",
}: SEOProps) {
  const [baseUrl, setBaseUrl] = useState(url);

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const fullImageUrl = `${baseUrl}${image}`;
  const logoUrl = `${baseUrl}/images/logo.svg`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta name="author" content={author} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      <meta name="format-detection" content="telephone=no" />

      {/* OpenGraph tags */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:secure_url" content={fullImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content={url} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

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
              url: logoUrl,
              width: "300",
              height: "300",
            },
          },
          image: {
            "@type": "ImageObject",
            url: fullImageUrl,
            width: "1200",
            height: "630",
          },
        })}
      </script>

      {/* Google Analytics placeholder */}
      {/* {process.env.NEXT_PUBLIC_GA_ID && (
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
      )} */}
    </Helmet>
  );
}
