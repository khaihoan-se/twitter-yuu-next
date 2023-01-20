import CheckIcon from "@/assets/icons/CheckIcon";
import Typography from "@/components/shared/Typography";
import { ThemeMainList } from "@/constants";
import classNames from "classnames";
import React from "react";
import { useTranslation } from "react-i18next";

const SelectBackground = ({ themeBackground, onChangeTheme }) => {
   const { t } = useTranslation("modal_custom_theme");
   return (
      <React.Fragment>
         <div className="flex items-center grow py-[5px] px-[15px]">
            {React.Children.toArray(
               ThemeMainList.map((_, index) => (
                  <ItemBackground
                     key={index}
                     color={_.color}
                     colorIcon={_.colorIcon}
                     active={themeBackground === _.type}
                     colorText={_.colorText}
                     title={t(`${_.title}`)}
                     onClick={() => onChangeTheme({ themeBackground: _.type })}
                  />
               ))
            )}
         </div>
      </React.Fragment>
   );
};

const ItemBackground = ({
   color,
   colorIcon,
   active,
   colorText,
   title,
   onClick,
}) => {
   return (
      <div
         style={{ background: color }}
         className={classNames(
            "min-h-[64px] rounded px-[20px] m-[4px] flex-1 flex items-center justify-center cursor-pointer",
            active ? "border-[2px] border-tw-main-color-large" : "border-none"
         )}
         onClick={onClick}
      >
         {active ? (
            <div className="w-[20px] h-[20px] rounded-full flex items-center justify-center bg-tw-main-color-large">
               <CheckIcon className="w-[18px] h-[18px] text-white" />
            </div>
         ) : (
            <div
               style={{ borderColor: colorIcon }}
               className="w-[20px] h-[20px] rounded-full border-[2px]"
            ></div>
         )}
         <div
            style={{ color: colorText }}
            className="ml-[15px] font-bold text-[15px]"
         >
            <Typography variant="span" label={title} />
         </div>
      </div>
   );
};
export default React.memo(SelectBackground);
