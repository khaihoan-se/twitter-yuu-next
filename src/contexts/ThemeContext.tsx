import { DataThemeType, ParamsType } from "@/@types";
import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useContext } from "react";

export interface ThemeContextType {
   dataTheme: DataThemeType;
   onChangeTheme: (data: ParamsType) => void;
}
interface ThemeContextProviderType {
   children: React.ReactNode;
}

const ThemeContext = createContext<ThemeContextType>(null!);

function useTheme() {
   return useContext(ThemeContext);
}

export const ThemeContextProvider: React.FC<ThemeContextProviderType> = ({
   children,
}) => {
   const [dataTheme, setDataTheme] = useLocalStorage("theme-data-app", {
      themeBackground: "theme-light",
      themeColor: "theme-blue",
      themeSize: "theme-size-16",
   });

   const onChangeTheme = (data: ParamsType) => {
      setDataTheme((prev) => ({ ...prev, ...data }));
   };

   return (
      <ThemeContext.Provider value={{ dataTheme, onChangeTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};

export { useTheme };
