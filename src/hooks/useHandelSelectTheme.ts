import { ParamsType } from "@/@types";
import { useTheme } from "@/contexts/ThemeContext";
import { useCallback, useMemo } from "react";

export interface SelectThemeProps {
   onChangeTheme: (data: ParamsType) => void;
   themeSize?: string;
   handleSelectSizeMemo?: string;
   themeColor?: string;
   themeBackground?: string;
}
const useHandelSelectTheme = () => {
   const { dataTheme, onChangeTheme } = useTheme();
   const { themeColor, themeBackground, themeSize } = dataTheme;

   const handleSelectSize = useCallback(
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
      [themeSize]
   );

   const handleSelectSizeMemo = useMemo(
      () => handleSelectSize(themeSize),
      [themeSize]
   );

   return {
      onChangeTheme,
      handleSelectSizeMemo,
      themeSize,
      themeColor,
      themeBackground,
   };
};

export default useHandelSelectTheme;
