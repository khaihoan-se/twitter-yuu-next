import Typography from "@/components/shared/Typography";
import { ThemeFrontSize } from "@/constants";
import useHandelSelectTheme, {
   SelectThemeProps,
} from "@/hooks/useHandelSelectTheme";
import classNames from "classnames";
import React from "react";

const SelectFrontSize: React.FC<SelectThemeProps> = ({
   onChangeTheme,
   handleSelectSizeMemo,
   themeSize,
}) => {
   return (
      <React.Fragment>
         <div className="text-tw-text-main leading-4 text-[13px] font-normal break-words min-w-0 p-4">
            <Typography variant="span" label="Aa" />
         </div>
         <div className="grow mx-[20px] flex flex-col">
            <div className="items-center flex-row flex">
               <div className="h-[20px] cursor-pointer items-center grow flex-row flex">
                  <SelectSizeMain
                     handleSelectSizeMemo={handleSelectSizeMemo}
                     onChangeTheme={onChangeTheme}
                     themeSize={themeSize}
                  />
               </div>
            </div>
         </div>
         <div className="text-tw-text-main leading-6 text-[20px] font-normal break-words min-w-0 p-4">
            <Typography variant="span" label="Aa" />
         </div>
      </React.Fragment>
   );
};

const SelectSizeMain = ({ handleSelectSizeMemo, onChangeTheme, themeSize }) => {
   return (
      <div className="bg-tw-main-color-select h-1 items-center grow flex-row rounded-lg flex relative">
         <div
            style={{ flexGrow: handleSelectSizeMemo }}
            className="bg-tw-main-color-large self-stretch rounded-lg flex flex-col"
         ></div>
         {React.Children.toArray(
            ThemeFrontSize.map((_, index) => (
               <div
                  key={index}
                  style={{ left: _.style }}
                  className="ml-[-8px] w-[32px] h-[32px] cursor-pointer items-center justify-center absolute rounded-full flex flex-col hover:bg-tw-main-color-small"
                  onClick={() => onChangeTheme({ themeSize: _.type })}
               >
                  <div
                     className={classNames(
                        "bg-tw-main-color-large scale-100 rounded-full flex flex-col",
                        themeSize === _.type
                           ? "w-[16px] h-[16px]"
                           : "w-[12px] h-[12px]",
                        _.active <= handleSelectSizeMemo
                           ? "bg-tw-main-color-large"
                           : "bg-tw-main-color-select"
                     )}
                  ></div>
               </div>
            ))
         )}
      </div>
   );
};

export default React.memo(SelectFrontSize);
