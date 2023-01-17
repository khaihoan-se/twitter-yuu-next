import React from "react";
import NextHead from "next/head";
import { useRouter } from "next/router";

interface HeadProps {
   title?: string;
   description?: string;
   image?: string;
   classBody?: string;
}

const Head: React.FC<HeadProps> = (props) => {
   const {
      title = "...",
      description = "...",
      image = "...",
      classBody,
   } = props;

   const { asPath } = useRouter();

   return (
      <NextHead>
         <title>{title}</title>
         <body className={classBody} />
      </NextHead>
   );
};

export default Head;
