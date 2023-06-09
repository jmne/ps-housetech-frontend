// IMPORTS - BUILTIN
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

// IMPORTS - ASSETS
import "../assets/scss/global.scss";
// const trebuchet = localFont({src: "../assets/misc/TrebuchetMS.ttf"});
import { Inter } from "next/font/google";
import { SearchInputProvider } from "context/SearchInputContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"]
});

const MyApp = ({ Component, pageProps }: AppProps) => (
    <SearchInputProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </SearchInputProvider>
);

export default appWithTranslation(MyApp);
