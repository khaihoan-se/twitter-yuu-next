import CustomTheme from "@/components/templates/CustomTheme";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const LoginContainer = () => {
   const { t } = useTranslation();
   const [showModal, setShowModal] = useState<boolean>(false);
   return (
      <React.Fragment>
         <h1>LoginContainer</h1>
         <div onClick={() => setShowModal(true)}>{t("content")}</div>
         <CustomTheme open={showModal} onClose={() => setShowModal(false)} />
      </React.Fragment>
   );
};

export default React.memo(LoginContainer);
