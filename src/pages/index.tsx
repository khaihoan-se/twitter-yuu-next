import ClientOnly from "@/components/shared/ClientOnly";
import LoginContainer from "@/containers/LoginContainer";
import { GetServerSideProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Head from "next/head";
import React from "react";

const LoginPage = () => {
   return (
      <React.Fragment>
         <Head>
            <title>Login Page | Twitter</title>
         </Head>
         <ClientOnly>
            <LoginContainer />
         </ClientOnly>
      </React.Fragment>
   );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => ({
   props: {
      ...(await serverSideTranslations(locale, [
         "common",
         "modal_custom_theme",
      ])),
   },
});

export default LoginPage;
