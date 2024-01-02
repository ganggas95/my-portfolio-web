import Head from "next/head";
import "../styles/globals.css";
/**
 * Render the MyPortfolio component.
 *
 * @param {React.ComponentType} Component - The component to render.
 * @param {object} pageProps - The props to pass to the component.
 * @returns {React.ReactNode} The rendered component.
 */
export default function MyPortfolio({
  Component,
  pageProps,
}: {
  Component: React.ComponentType;
  pageProps: object;
}): React.ReactNode {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
