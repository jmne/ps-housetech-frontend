// IMPORTS - BUILTIN
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import localFont from "next/font/local";
import { ErrorBoundary } from "@/components/UI/Card";

// IMPORTS - ASSETS
import "/assets/scss/global.scss";
import "@/components/Flappy/Game/Components/Pillars/pillars.scss";
import { SearchInputProvider } from "context/SearchInputContext";
import { TimeoutProvider } from "context/TimeoutContext";
import { ToastProvider } from "@/components/UI/Toast/ToastProvider";
import { ToastContextProvider } from "context/ToastContext";
import Head from "next/head";

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

const MyApp = ({ Component, pageProps }: AppProps) => (
  <ErrorBoundary>
    <ToastContextProvider>
      <ToastProvider>
        <TimeoutProvider>
          <SearchInputProvider>
            <main className={productSans.className} id="app-wrapper">
              <Head>
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"
                />
                <title>PS HouseTech</title>
              </Head>
              <style jsx global>{`
                :root {
                  /* ... */
                  --product-font: ${productSans.style.fontFamily};
                }
                html * {
                  font-family: var(--product-font) !important;
                }
              `}</style>
              <ErrorBoundary>
                <Component {...pageProps} />
              </ErrorBoundary>
            </main>
          </SearchInputProvider>
        </TimeoutProvider>
      </ToastProvider>
    </ToastContextProvider>
  </ErrorBoundary>
);

export default appWithTranslation(MyApp);
