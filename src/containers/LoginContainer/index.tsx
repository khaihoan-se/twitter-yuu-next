import Avatar from "@/components/shared/Avatar";
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
         <Avatar
            src="https://pbs.twimg.com/profile_images/1430838142270017543/yugL-TBb_400x400.jpg"
            classWhCalc="wh-calc-img-12px"
            colorBorder="bg-tw-bg-main-900"
            isBorder={true}
            isNoHope={false}
            isHover={true}
            className="w-[25%]"
         />
         <CustomTheme open={showModal} onClose={() => setShowModal(false)} />
      </React.Fragment>
   );
};

export default React.memo(LoginContainer);
