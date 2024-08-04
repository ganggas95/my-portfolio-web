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
  const meta: Meta = {
    title: "Subhan Nizar - Fullstack Engineer",
    description: `Middle-level Fullstack Engineer with +${experience} years of experience working with local companies and International Companies. Creating test cases, creating Rest-API based on JSON data schema, and fast learning ability."`,
    image: "https://subhannizar.com/images/hero.png",
  };

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@subhannizar" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />

        <link
          href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
