import { Helmet } from "react-helmet-async";
import { useEffect, useState } from "react";

interface SEOProps {
  title?: string;
}

export function SEO({ title = "Fluently - AI Speech Therapy" }: SEOProps) {
  const [baseUrl, setBaseUrl] = useState("https://fluently.pt");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const logoUrl = `${baseUrl}/images/logo.svg`;
  const imageUrl = `${baseUrl}/images/screenshot.jpg`;

  return (
    <Helmet>
      <title>{title}</title>

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebApplication",
          name: "Fluently",
          applicationCategory: "HealthApplication",
          description:
            "Transform your speech with AI-powered therapy. Practice anywhere, anytime with real-time feedback and personalized exercises.",
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
            url: imageUrl,
            width: "1200",
            height: "630",
          },
        })}
      </script>
    </Helmet>
  );
}
