import React from "react";
import Typography from "./Typography";

const FullName = ({ label }) => {
   return (
      <div className="shrink max-w-full flex flex-col">
         <div className="flex flex-row items-center max-w-full">
            <div className="whitespace-nowrap text-tw-text-main font-bold text-[15px] leading-5 break-words min-w-0 items-center overflow-hidden flex">
               <span className="break-words min-w-0 max-w-full truncate">
                  <Typography variant="span" label={label} />
               </span>
            </div>
            <div className="shrink-0 text-tw-text-main flex-row font-normal text-[15px] leading-5 break-words min-w-0 inline-flex"></div>
         </div>
      </div>
   );
};

export default React.memo(FullName);
