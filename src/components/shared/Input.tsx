import EyeClose from "@/assets/icons/EyeClose";
import EyeOpen from "@/assets/icons/EyeOpen";
import classNames from "classnames";
import React, { useMemo } from "react";

interface InputProps extends React.HTMLProps<HTMLInputElement> {
   label: string;
   status: "INPUT" | "TEXTAREA";
   classNameInput?: string;
   stateLength?: string;
   onShowPassword?: (e: any) => void;
   showEye?: boolean;
   isPassword?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>((props, ref) => {
   const {
      label,
      status,
      classNameInput,
      stateLength,
      onShowPassword,
      showEye,
      isPassword,
      ...inputProps
   } = props;
   const BaseInputInput = useMemo(() => {
      return (
         <React.Fragment>
            <input
               ref={ref}
               placeholder="&nbsp;"
               className={classNames(
                  "focus--input resize-none appearance-none z-40 pt-3 pb-2 mt-4 shrink grow flex-row overflow-hidden flex relative text-left bg-transparent outline-none w-full border-none text-text-color-medium leading-6 text-[15px] items-center font-normal",
                  classNameInput
               )}
               {...inputProps}
            />
            {isPassword && (
               <span
                  className="flex items-center justify-center z-40 cursor-pointer"
                  onClick={onShowPassword}
               >
                  {showEye ? (
                     <EyeClose className="w-[22px] h-[22px] text-text-color-medium" />
                  ) : (
                     <EyeOpen className="w-[22px] h-[22px] text-text-color-medium" />
                  )}
               </span>
            )}
         </React.Fragment>
      );
   }, [showEye]);
   const BaseInputTextarea = useMemo(() => {
      return (
         <textarea
            // @ts-ignore
            ref={ref}
            placeholder="&nbsp;"
            className={classNames(
               "focus--input resize-none appearance-none z-40 pt-3 pb-2 mt-4 shrink grow flex-row overflow-hidden flex relative text-left bg-transparent outline-none w-full border-none text-text-color-medium leading-6 text-[15px] items-center font-normal",
               classNameInput
            )}
            {...inputProps}
         ></textarea>
      );
   }, []);
   const rendeBaseInput = () => {
      switch (status) {
         case "INPUT":
            return BaseInputInput;
         case "TEXTAREA":
            return BaseInputTextarea;
         default:
            return BaseInputInput;
      }
   };

   return (
      <React.Fragment>
         <label className="flex-row border-[1px] border-border-color-button-login rounded flex px-2 relative">
            {rendeBaseInput()}
            <div className="label--input rounded h-full justify-between flex-row w-full absolute text-text-color-normal pt-5 inset-0 leading-4 text-[17px] font-normal px-2 max-w-full truncate">
               <span>{label}</span>
            </div>
            {inputProps.maxLength && (
               <span className="text-main-color mt-2">
                  {stateLength?.length > 0 ? stateLength.length : 0}/
                  {inputProps.maxLength}
               </span>
            )}
         </label>
      </React.Fragment>
   );
});

Input.displayName = "Input";

export default React.memo(Input);
