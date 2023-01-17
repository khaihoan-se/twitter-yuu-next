import React from "react";
import LogoIcon from "@/assets/icons/LogoIcon";

const Logo: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({
   className,
}) => {
   return <LogoIcon className={className} />;
};

export default React.memo(Logo);
