import Typography from "@/components/shared/Typography";
import React from "react";

interface SectionModalCustomThemeProps {
   label: string;
   children: React.ReactNode;
}
const SectionModalCustomTheme: React.FC<SectionModalCustomThemeProps> = ({
   label,
   children,
}) => {
   return (
      <React.Fragment>
         <div className="text-tw-text-extra text-[13px] mb-[4px] font-bold leading-5 break-words min-w-0">
            <Typography variant="span" label={label} />
         </div>
         <div className="bg-tw-bg-main-600 mb-3 rounded-2xl flex flex-col">
            <div className="items-center flex-row p-4 flex">{children}</div>
         </div>
      </React.Fragment>
   );
};

export default React.memo(SectionModalCustomTheme);
