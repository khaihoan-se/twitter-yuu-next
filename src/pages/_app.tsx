import "../styles/index.css";
import { NextPageWithLayout } from "@/@types/page";
import BaseLayout from "@/components/layouts/BaseLayout";
import type { AppProps } from "next/app";
import React from "react";
import { ThemeContextProvider } from "@/contexts/ThemeContext";
import { appWithTranslation } from "next-i18next";
import nextI18nextConfig from "next-i18next.config";

// this should give a better typing
type NextPageWithLayoutProps = AppProps & {
   Component: NextPageWithLayout;
};

function App({ Component, pageProps }: NextPageWithLayoutProps) {
   const getLayout =
      // @ts-ignore
      Component.getLayout ||
      ((page: React.ReactNode) => <BaseLayout>{page}</BaseLayout>);
   // return (
   //    <ThemeProvider>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
   // );
   return (
      <ThemeContextProvider>
         {getLayout(<Component {...pageProps} />)}
      </ThemeContextProvider>
   );
}

// @ts-ignore
export default appWithTranslation(App, nextI18nextConfig);
