import React, { useState } from "react";
import Image from "@/components/shared/Image";
import classNames from "classnames";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
   src: string;
   className?: string;
   isBorder?: boolean;
   classWhCalc?: string;
   colorBorder?: string;
   isHover?: boolean;
   isNoHope?: boolean;
}

const Avatar: React.FC<AvatarProps> = ({
   src,
   className,
   isBorder,
   classWhCalc,
   colorBorder,
   isHover,
   isNoHope,
}) => {
   const [isLoadFailed, setIsLoadFailed] = useState(false);

   const handleImageError = () => {
      setIsLoadFailed(true);
   };

   return (
      <React.Fragment>
         <div
            className={classNames(
               "overflow-visible block relative z-0",
               className
            )}
         >
            <div className="pb-[100%] w-full block"></div>
            <div className="h-full w-full absolute inset-0 block">
               <div className="translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 w-full h-full absolute overflow-visible block">
                  <div className="pb-[-100%] w-full block"></div>
                  <div className="w-full h-full absolute inset-0 block cursor-pointer">
                     <div
                        className={classNames(
                           "absolute rounded-full overflow-hidden w-full h-full",
                           isNoHope && "top-[-2px] left-[-2px]"
                        )}
                     >
                        <div
                           className={classNames(
                              "w-full h-full bg-transparent outline-none",
                              isHover && "image-hover"
                           )}
                        >
                           <div className="wh-calc-img-4px translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 absolute overflow-hidden pointer-events-none rounded-full">
                              <div
                                 className={classNames(
                                    "w-full h-full",
                                    colorBorder ? colorBorder : "bg-transparent"
                                 )}
                              ></div>
                           </div>
                           {isBorder && (
                              <>
                                 <div
                                    className={classNames(
                                       "translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 absolute overflow-hidden pointer-events-none rounded-full",
                                       classWhCalc
                                          ? classWhCalc
                                          : "wh-calc-img-4px"
                                    )}
                                 >
                                    <div className="w-full h-full bg-transparent"></div>
                                 </div>
                                 <div
                                    className={classNames(
                                       "translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 absolute overflow-hidden pointer-events-none rounded-full",
                                       classWhCalc
                                          ? classWhCalc
                                          : "wh-calc-img-4px"
                                    )}
                                 >
                                    <div className="w-full h-full bg-transparent"></div>
                                 </div>
                              </>
                           )}
                           <div
                              className={classNames(
                                 "translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 absolute overflow-hidden pointer-events-none rounded-full",
                                 classWhCalc ? classWhCalc : "wh-calc-img-4px"
                              )}
                           >
                              <div className="overflow-hidden block w-full h-full">
                                 <div className="pb-[-100%] w-full block"></div>
                                 <div className="absolute inset-0 w-full h-full block">
                                    <div className="absolute inset-0 basis-auto z-0 overflow-hidden">
                                       <Image
                                          onError={handleImageError}
                                          src={
                                             isLoadFailed || !src
                                                ? "/fallback_profile.png"
                                                : src
                                          }
                                          alt="avatar"
                                          fill
                                          className="inset-0 absolute h-full w-full"
                                       />
                                    </div>
                                 </div>
                              </div>
                           </div>
                           {isHover && (
                              <div
                                 className={classNames(
                                    "translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2 absolute overflow-hidden pointer-events-none rounded-full",
                                    classWhCalc
                                       ? classWhCalc
                                       : "wh-calc-img-4px"
                                 )}
                              >
                                 <div className="hv-bg-img r-172uzmj outline-none r-6416eg w-full h-full r-o7ynqc"></div>
                              </div>
                           )}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default React.memo(Avatar);
