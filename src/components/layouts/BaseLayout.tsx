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
            <main className="flex sm1:items-start items-stretch shrink lg:grow sm1:grow-[2] grow flex-col sm1:w-auto w-full">
               <div className="lg1:w-[990px] lg:w-[920px] sm1:w-[600px] w-full shrink grow flex flex-col">
                  <div className="grow flex flex-col">
                     <div className="bg-transparent items-stretch justify-between grow flex-row w-full min-h-full flex">
                        <div className="max-w-[600px] w-full mr-0 ml-0 z-[1] border-tw-bd-layout border-r-[1px] border-l-[1px] bg-tw-bg-main-900 flex flex-col">
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
