// IMPORTS - BUILTIN
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

// IMPORTS - ASSETS
import "../assets/scss/global.scss";

const productSans = localFont({
  src: [
    { path: "../assets/misc/Product Sans Regular.ttf", weight: "300", style: "normal" },
    { path: "../assets/misc/Product Sans Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/misc/Product Sans Regular.ttf", weight: "500", style: "normal" },
    { path: "../assets/misc/Product Sans Italic.ttf", weight: "300", style: "italic" },
    { path: "../assets/misc/Product Sans Italic.ttf", weight: "400", style: "italic" },
    { path: "../assets/misc/Product Sans Italic.ttf", weight: "500", style: "italic" },
    { path: "../assets/misc/Product Sans Bold.ttf", weight: "600", style: "bold" },
    {
      path: "../assets/misc/Product Sans Bold Italic.ttf",
      weight: "600",
      style: "italic"
    }
  ],
  preload: true,
  fallback: ["sans-serif"]
});
import { SearchInputProvider } from "context/SearchInputContext";
import { TimeoutProvider } from "context/TimeoutContext";
import { ToastProvider } from "@/components/Toast/ToastProvider";
import { ToastContextProvider } from "context/ToastContext";
import Head from "next/head";
import Script from "next/script";

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
    </Head>
    <Script>
      <script
        src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
        crossOrigin=""
      ></script>
    </Script>
    <ToastContextProvider>
      <ToastProvider>
        <TimeoutProvider>
          <SearchInputProvider>
            <main className={productSans.className} id="app-wrapper">
              <style jsx global>{`
                :root {
                  /* ... */
                  --product-font: ${productSans.style.fontFamily};
                }
                html * {
                  font-family: var(--product-font) !important;
                }
              `}</style>
              <Component {...pageProps} />
            </main>
          </SearchInputProvider>
        </TimeoutProvider>
      </ToastProvider>
    </ToastContextProvider>
  </>
);

export default appWithTranslation(MyApp);
