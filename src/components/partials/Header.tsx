import React from "react";

const Header = () => {
   return (
      <React.Fragment>
         <header className="grow items-end z-[3] select-none flex flex-col">
            <div className="w-[275px]">Header</div>
         </header>
      </React.Fragment>
   );
};

export default React.memo(Header);
