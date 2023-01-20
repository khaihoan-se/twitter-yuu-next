import { DataThemeType } from "@/@types";

export const getSelectTheme = (data: DataThemeType) => {
   return `${data.themeBackground} ${data.themeColor} ${data.themeSize}`;
};
