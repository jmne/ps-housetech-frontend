// IMPORTS - BUILTIN
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

// IMPORTS - COMPONENTS

// IMPORTS - ASSETS
import "../assets/scss/global.scss";
// const trebuchet = localFont({src: "../assets/misc/TrebuchetMS.ttf"});
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ['latin'],
  weight: ["300", "400", "500"]
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <main className={inter.className}>
    <Component {...pageProps} />
  </main>
)

export default appWithTranslation(MyApp)
