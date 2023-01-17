import React from "react";
import { useTranslation } from "react-i18next";

const LoginContainer = () => {
   const { t } = useTranslation();
   return (
      <div>
         <h1>LoginContainer</h1>
         <div>{t("content")}</div>
      </div>
   );
};

export default React.memo(LoginContainer);
