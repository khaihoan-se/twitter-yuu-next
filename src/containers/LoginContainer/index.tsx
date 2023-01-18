import BaseModal from "@/components/shared/BaseModal";
import ModalCustomTheme from "@/components/templates/ModalCustomTheme";
import React from "react";
import { useTranslation } from "react-i18next";

const LoginContainer = () => {
   const { t } = useTranslation();
   return (
      <React.Fragment>
         <h1>LoginContainer</h1>
         <div>{t("content")}</div>
         <BaseModal open={true} type="center" classBg="bg-tw-bg-main-500">
            <ModalCustomTheme />
         </BaseModal>
      </React.Fragment>
   );
};

export default React.memo(LoginContainer);
