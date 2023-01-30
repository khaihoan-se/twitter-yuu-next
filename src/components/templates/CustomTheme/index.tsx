import BaseModal from "@/components/shared/BaseModal";
import React from "react";
import { useTranslation } from "react-i18next";
import Typography from "@/components/shared/Typography";
import SectionModalCustomTheme from "./components/SectionModalCustomTheme";
import SelectBackground from "./components/SelectBackground";
import SelectColor from "./components/SelectColor";
import SelectFrontSize from "./components/SelectFrontSize";
import BoxPostDetail from "./components/BoxPostDetail";
import useHandelSelectTheme from "@/hooks/useHandelSelectTheme";
import Button from "@/components/shared/Button";

interface ModalCustomThemeProps {
   open: boolean;
   onClose: any;
}

const ModalCustomTheme: React.FC<ModalCustomThemeProps> = ({
   open,
   onClose,
}) => {
   const { t } = useTranslation("modal_custom_theme");
   const {
      onChangeTheme,
      themeSize,
      handleSelectSizeMemo,
      themeColor,
      themeBackground,
   } = useHandelSelectTheme();
   return (
      <React.Fragment>
         <BaseModal
            open={open}
            onClose={onClose}
            type="center"
            classBg="bg-tw-bg-main-500"
         >
            <div className="z-50 min-h-[400px] sm:max-w-[80vw] max-w-full sm:max-h-[90vh] max-h-[100vh] sm:h-[650px] h-[100vh] sm:min-w-[600px] min-w-[100%] shrink sm:rounded-2xl rounded-none overflow-hidden flex flex-col">
               <div className="shrink grow bg-tw-bg-main-900 sm:rounded-2xl rounded-none flex flex-col">
                  <div className="max-w-[600px] shrink grow w-full mx-auto flex flex-col">
                     <div className="shrink grow overflow-auto flex flex-col">
                        {/* Title */}
                        <div className="sm:mt-[32px] mt-0 sm:mb-3 mb-0 flex flex-col">
                           <div className="text-tw-text-main text-[23px] leading-7 font-extrabold break-words min-w-0 sm:text-center text-start">
                              <Typography variant="span" label={t("title")} />
                           </div>
                        </div>
                        {/* Box */}
                        <div className="pb-[32px] px-[32px] flex flex-col">
                           <div className="text-tw-text-extra mb-[20px] font-normal text-[15px] leading-5 break-words min-w-0 text-center flex flex-col">
                              <Typography
                                 variant="span"
                                 label={t("description")}
                              />
                           </div>
                           <BoxPostDetail />
                           {/* Theme */}
                           <SectionModalCustomTheme label={t("fontSize")}>
                              <SelectFrontSize
                                 onChangeTheme={onChangeTheme}
                                 handleSelectSizeMemo={handleSelectSizeMemo}
                                 themeSize={themeSize}
                              />
                           </SectionModalCustomTheme>
                           <SectionModalCustomTheme label={t("color")}>
                              <SelectColor
                                 themeColor={themeColor}
                                 onChangeTheme={onChangeTheme}
                              />
                           </SectionModalCustomTheme>
                           <SectionModalCustomTheme label={t("background")}>
                              <SelectBackground
                                 themeBackground={themeBackground}
                                 onChangeTheme={onChangeTheme}
                              />
                           </SectionModalCustomTheme>

                           <div className="mt-[16px] items-center flex flex-col">
                              <Button
                                 label={t("button")}
                                 backgroundColor="bg-tw-main-color-large"
                                 classLabel="text-[#ffff]"
                                 onClick={onClose}
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </BaseModal>
      </React.Fragment>
   );
};

export default React.memo(ModalCustomTheme);
