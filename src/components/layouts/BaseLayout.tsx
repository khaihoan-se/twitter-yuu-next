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
         <div className="min-h-[100vh] flex-row z-0 w-full flex pointer-events-auto">
            <Header />
            <main className="items-start shrink grow flex flex-col">
               <div className="w-[990px] shrink grow flex flex-col">
                  <div className="grow flex flex-col">
                     <div className="bg-transparent items-stretch justify-between grow flex-row w-full min-h-full flex">
                        <div className="max-w-[600px] w-full mr-0 ml-0 z-[1] border-r-[1px] border-l-[1px] bodert-tw-bd-layout bg-tw-bg-main-900 flex flex-col">
                           {children}
                        </div>
                        <PageRight />
                     </div>
                  </div>
               </div>
            </main>
         </div>
      </HelmetProvider>
   );
};

export default BaseLayout;
