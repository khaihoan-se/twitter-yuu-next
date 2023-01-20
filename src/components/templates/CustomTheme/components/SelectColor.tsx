import CheckIcon from "@/assets/icons/CheckIcon";
import { ThemeColorList } from "@/constants";
import { SelectThemeProps } from "@/hooks/useHandelSelectTheme";
import React from "react";

const SelectColor: React.FC<SelectThemeProps> = ({
   themeColor,
   onChangeTheme,
}) => {
   return (
      <React.Fragment>
         <div className="flex flex-row items-center justify-around grow py-[8px]">
            {React.Children.toArray(
               ThemeColorList.map((_, index) => (
                  <ItemColor
                     key={index}
                     color={_.color}
                     active={themeColor === _.type}
                     onClick={() => onChangeTheme({ themeColor: _.type })}
                  />
               ))
            )}
         </div>
      </React.Fragment>
   );
};

const ItemColor = ({ color, active, onClick }) => {
   return (
      <div
         style={{ background: color }}
         className="w-[45px] h-[45px] rounded-full flex items-center justify-center cursor-pointer"
         onClick={onClick}
      >
         {active && <CheckIcon className="w-[25px] h-[25px] text-white" />}
      </div>
   );
};

export default React.memo(SelectColor);
