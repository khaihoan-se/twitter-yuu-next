import Typography from "@/components/shared/Typography";
import { ThemeFrontSize } from "@/constants";
import { useTheme } from "@/contexts/ThemeContext";
import classNames from "classnames";
import React, { useCallback, useMemo } from "react";

const SelectFrontSize = () => {
   const { dataTheme, onChangeTheme } = useTheme();
   console.log(dataTheme);

   const renderLineActive = useCallback(
      (typeSize: string) => {
         switch (typeSize) {
            case "theme-size-14":
            default:
               return "0";
            case "theme-size-15":
               return "0.25";
            case "theme-size-16":
               return "0.5";
            case "theme-size-17":
               return "0.75";
            case "theme-size-18":
               return "1";
         }
      },
      [dataTheme.themeSize]
   );

   const renderLineActiveMemo = useMemo(
      () => renderLineActive(dataTheme.themeSize),
      [dataTheme.themeSize]
   );
   return (
      <React.Fragment>
         <div className="text-tw-text-main leading-4 text-[13px] font-normal break-words min-w-0">
            <Typography variant="span" label="Aa" />
         </div>
         <div className="grow mx-[20px] flex flex-col">
            <div className="items-center flex-row flex">
               <div className="h-[20px] cursor-pointer items-center grow flex-row flex">
                  <div className="bg-tw-main-color-select h-1 items-center grow flex-row rounded-lg flex relative">
                     <div
                        style={{ flexGrow: renderLineActiveMemo }}
                        className="bg-tw-main-color-large self-stretch rounded-lg flex flex-col"
                     ></div>
                     {React.Children.toArray(
                        ThemeFrontSize.map((_, index) => (
                           <div
                              key={index}
                              style={{ left: _.style }}
                              className="ml-[-8px] w-[32px] h-[32px] cursor-pointer items-center justify-center absolute rounded-full flex flex-col hover:bg-tw-main-color-small"
                              onClick={() =>
                                 onChangeTheme({ themeSize: _.type })
                              }
                           >
                              <div
                                 className={classNames(
                                    "bg-tw-main-color-large scale-100 rounded-full flex flex-col",
                                    dataTheme.themeSize === _.type
                                       ? "w-[16px] h-[16px]"
                                       : "w-[12px] h-[12px]"
                                 )}
                              ></div>
                           </div>
                        ))
                     )}
                  </div>
               </div>
            </div>
         </div>
         <div className="text-tw-text-main leading-6 text-[20px] font-normal break-words min-w-0">
            <Typography variant="span" label="Aa" />
         </div>
      </React.Fragment>
   );
};

export default React.memo(SelectFrontSize);
