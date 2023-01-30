import classNames from "classnames";
import React from "react";

interface ModalBaseProps {
   children: React.ReactNode;
   className?: string;
   onClose?: () => void;
   type?: "center" | undefined;
   open: boolean;
   classBg?: string;
}
const ModalBase = React.forwardRef<HTMLDivElement, ModalBaseProps>(
   (props, ref) => {
      const { className, children, onClose, type, open, classBg } = props;
      if (!open) return;
      return (
         <React.Fragment>
            <div
               className="fixed inset-0 w-[100vw] h-full flex-row z-50"
               ref={ref}
            >
               <div
                  className={classNames(
                     "fixed inset-0",
                     classBg ? classBg : "bg-transparent"
                  )}
               ></div>
               <div
                  className={classNames(
                     "pointer-events-auto absolute",
                     type === "center" &&
                        "left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col sm:w-[600px] w-full",
                     className
                  )}
               >
                  {children}
               </div>
            </div>
         </React.Fragment>
      );
   }
);
ModalBase.displayName = "ModalBase";
export default React.memo(ModalBase);
