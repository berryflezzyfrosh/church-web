import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="God's Light Int'l Power Ministry - Replacing Darkness With Light. Join us for worship, prayer, and spiritual growth." />
        <meta name="keywords" content="church, ministry, prayer, worship, prophetess margareth egbodor, gods light ministry, nigeria church" />
        <meta name="author" content="God's Light Int'l Power Ministry" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourusername.github.io/gods-light-ministry/" />
        <meta property="og:title" content="God's Light Int'l Power Ministry" />
        <meta property="og:description" content="Replacing Darkness With Light - Join us for worship and spiritual growth" />
        <meta property="og:image" content="/images/church-hero.jpg" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourusername.github.io/gods-light-ministry/" />
        <meta property="twitter:title" content="God's Light Int'l Power Ministry" />
        <meta property="twitter:description" content="Replacing Darkness With Light - Join us for worship and spiritual growth" />
        <meta property="twitter:image" content="/images/church-hero.jpg" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Church",
              "name": "God's Light Int'l Power Ministry",
              "alternateName": "Light Of God Ministry",
              "description": "Replacing Darkness With Light",
              "founder": {
                "@type": "Person",
                "name": "Prophetess Margareth Egbodor"
              },
              "address": [
                {
                  "@type": "PostalAddress",
                  "streetAddress": "Behind Breakthrough Academy, 2nd Transformer, Fed. Low Cost",
                  "addressLocality": "Kwamba Suleja",
                  "addressRegion": "Niger State",
                  "addressCountry": "Nigeria"
                },
                {
                  "@type": "PostalAddress",
                  "streetAddress": "After Car wash Junction Gwako 2, Along Gwagwalada Express Road",
                  "addressLocality": "Abuja",
                  "addressCountry": "Nigeria"
                }
              ],
              "telephone": ["+234 811 504 0087", "+234 706 051 6183"],
              "url": "https://yourusername.github.io/gods-light-ministry/"
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}