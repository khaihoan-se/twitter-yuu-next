import Logo from "@/components/shared/Logo";
import Typography from "@/components/shared/Typography";
import React from "react";
import { useTranslation } from "react-i18next";

const BoxPostDetail = () => {
   const { t } = useTranslation("modal_custom_theme");
   return (
      <React.Fragment>
         <div className="mb-4 mx-[32px] flex flex-col">
            <div className="border-tw-bd-layout rounded-2xl border-[1px] flex flex-col">
               <article className="px-4 py-3 flex-row overflow-hidden flex">
                  <div className="flex flex-col shrink grow">
                     <div className="shrink grow flex flex-row">
                        <div className="basis-12 mr-3 grow-0 items-center flex flex-col">
                           <div className="w-full min-h-[48px] bg-tw-main-color-large rounded-full flex items-center justify-center">
                              <Logo className="w-8 text-white" />
                           </div>
                        </div>
                        <div className="justify-center basis-0 grow flex flex-col">
                           <div className="mb-[2px] flex flex-col">
                              <div className="items-start justify-between flex-row flex">
                                 <div className="items-baseline shrink flex-row flex">
                                    <div className="shrink max-w-full flex flex-col">
                                       <div className="outline-none items-center shrink flex-row max-w-full flex">
                                          <div className="items-center shrink flex-row max-w-full flex">
                                             <div className="outline-none shrink max-w-full flex flex-col">
                                                <div className="text-tw-text-main whitespace-nowrap font-bold items-center text-[15px] leading-5 break-words min-w-0 flex overflow-hidden">
                                                   Twitter
                                                </div>
                                             </div>
                                          </div>
                                          <div className="ml-[4px] shrink flex-row flex">
                                             <div className="items-baseline shrink flex-row flex">
                                                <div className="shrink max-w-full flex flex-col">
                                                   <div className="text-tw-text-extra font-normal text-[15px] leading-5 break-words min-w-0 max-w-full truncate">
                                                      <Typography
                                                         variant="span"
                                                         label="@Twitter"
                                                      />
                                                   </div>
                                                </div>
                                                <div className="text-tw-text-extra font-normal text-[15px] leading-5 break-words min-w-0 mx-[4px]">
                                                   <Typography
                                                      variant="span"
                                                      label="·"
                                                   />
                                                </div>
                                                <div className="shrink max-w-full flex flex-col">
                                                   <div className="text-tw-text-extra font-normal text-[15px] leading-5 break-words min-w-0 max-w-full truncate">
                                                      <Typography
                                                         variant="span"
                                                         label="4h"
                                                      />
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="text-tw-text-main font-normal text-[15px] leading-5 break-words min-w-0 relative">
                              <Typography variant="span" label={t("content")} />
                              <div className="inline-flex">
                                 <Typography
                                    variant="span"
                                    label="@Twitter"
                                    className="text-tw-main-color-large"
                                 />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </article>
            </div>
         </div>
      </React.Fragment>
   );
};

export default React.memo(BoxPostDetail);
