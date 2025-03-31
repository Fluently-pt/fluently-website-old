import { Helmet } from "react-helmet-async";

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
  url = typeof window !== "undefined"
    ? window.location.origin
    : "https://fluently.pt",
  image = "/screenshots/desktop.webp",
  keywords = "speech therapy, AI therapy, speech improvement, stuttering, pronunciation, language learning",
  author = "Fluently",
}: SEOProps) {
  const fullImageUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}${image}`
      : `${url}${image}`;
  const logoUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/images/logo.svg`
      : `${url}/images/logo.svg`;

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
              width: "512",
              height: "512",
            },
          },
          image: {
            "@type": "ImageObject",
            url: fullImageUrl,
            width: "2765",
            height: "1655",
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
