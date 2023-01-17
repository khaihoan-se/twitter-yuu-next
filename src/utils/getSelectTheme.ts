import { DataThemeType } from "@/@types";

export const getSelectTheme = (data: DataThemeType) => {
   return `${data.themeMain} ${data.themeColor} ${data.themeSize}`;
};
