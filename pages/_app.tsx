// IMPORTS - BUILTIN
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";

// IMPORTS - ASSETS
import "../assets/scss/global.scss";
// const trebuchet = localFont({src: "../assets/misc/TrebuchetMS.ttf"});
import { Inter } from "next/font/google";
import { SearchInputProvider } from "context/SearchInputContext";
import { TimeoutProvider } from "context/TimeoutContext";
import { ToastProvider } from "@/components/Toast/ToastProvider";
import { ToastContextProvider } from "context/ToastContext";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"]
});

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <ToastContextProvider>
      <ToastProvider>
        <TimeoutProvider>
          <SearchInputProvider>
            <main className={inter.className} id="app-wrapper">
              <Component {...pageProps} />
            </main>
          </SearchInputProvider>
        </TimeoutProvider>
      </ToastProvider>
    </ToastContextProvider>
  </>
);

export default appWithTranslation(MyApp);
