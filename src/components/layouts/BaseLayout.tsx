import { useTheme } from "@/contexts/ThemeContext";
import React, { ReactNode } from "react";
import Header from "../partials/Header";
import PageRight from "../partials/PageRight";
import { Helmet, HelmetProvider } from "react-helmet-async";

import { getSelectTheme } from "@/utils/getSelectTheme";

interface IBaseLaayoutType {
   children: ReactNode;
}
const BaseLayout: React.FC<IBaseLaayoutType> = ({ children }) => {
   const { dataTheme } = useTheme();
   return (
      <HelmetProvider>
         <Helmet>
            <body className={getSelectTheme(dataTheme)}></body>
         </Helmet>
         <div>
            <Header />
            {children}
            <PageRight />
         </div>
      </HelmetProvider>
   );
};

export default BaseLayout;
