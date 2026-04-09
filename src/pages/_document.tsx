import { Analytics } from "@vercel/analytics/react";
import { Head, Html, Main, NextScript } from "next/document";
type Meta = {
  title: string;
  description: string;
  image: string;
};

/**
 * Render the Document component.
 *
 * @returns The JSX element representing the Document component.
 */
export default function Document(): JSX.Element {
  const START_EXPERIENCE = parseInt(process.env.START_EXPERIENCE || "0");
  const experience = new Date().getFullYear() - START_EXPERIENCE;
  const siteUrl =
    (process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || "").replace(
      /\/$/,
      "",
    ) || "https://subhannizar.com";
  const canonicalUrl = `${siteUrl}/`;
  const ogImage = `${siteUrl}/images/hero.png`;
  const meta: Meta = {
    title: "Subhan Nizar - Fullstack Engineer",
    description: `Middle-level Fullstack Engineer with +${experience} years of experience working with local companies and international companies. Creating test cases, creating REST APIs based on JSON data schema, and fast learning ability.`,
    image: ogImage,
  };

  return (
    <Html lang="en">
      <Head>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="follow, index" />
        <meta name="language" content="English" />
        <meta name="author" content="Subhan Nizar" />
        <meta name="title" content={meta.title} />
        <meta name="description" content={meta.description} />
        <meta name="image" content={meta.image} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:locale" content="en_US" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta
          property="og:image:alt"
          content="Subhan Nizar - Fullstack Engineer"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@subhannizar" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        <meta
          name="twitter:image:alt"
          content="Subhan Nizar - Fullstack Engineer"
        />

        <meta name="theme-color" content="#1f2937" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />

        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Subhan Nizar",
              url: siteUrl,
              jobTitle: "Fullstack Engineer",
              image: ogImage,
              sameAs: [
                "https://github.com/ganggas95",
                "https://www.linkedin.com/in/subhan-nizar-15a027131/",
              ],
            }),
          }}
        />
      </Head>
      <body>
        <Main />
        <Analytics />
        <NextScript />
      </body>
    </Html>
  );
}
