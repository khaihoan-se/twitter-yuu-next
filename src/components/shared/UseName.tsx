import React from "react";
import Typography from "./Typography";

const UseName = ({ label }) => {
   return (
      <div className="shrink flex-row items-center flex">
         <div className="shrink max-w-full flex flex-col">
            <div className="text-tw-text-extra font-normal text-[15px] leading-5 break-words min-w-0  max-w-full truncate">
               <Typography variant="span" label={label} />
            </div>
         </div>
      </div>
   );
};

export default React.memo(UseName);
