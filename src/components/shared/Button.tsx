import React, { useEffect } from "react";
import isHotKey, { KeyboardEventLike } from "is-hotkey";
import classNames from "classnames";
import Typography from "./Typography";

interface IconProps {
   className?: string;
}
export interface ButtonProps
   extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> {
   Icon?: React.ComponentType<IconProps>;
   iconClassName?: string;
   onClick?: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent> | null
   ) => void;
   shortcutKey?: string;
   label?: React.ReactNode;
   className?: string;
   disabled?: boolean;
   borderColor?: string;
   backgroundColor?: string;
   sizeText?: string;
   colorText?: string;
   weightText?: string;
   bgHoverColor?: string;
   classLabel?: string;
   isSubText?: boolean;
   subText?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
   (props, ref) => {
      const {
         children,
         label,
         onClick,
         disabled = false,
         shortcutKey,
         borderColor,
         backgroundColor,
         className,
         sizeText,
         colorText,
         weightText,
         bgHoverColor,
         iconClassName,
         Icon,
         classLabel,
         isSubText,
         subText,
         ...rest
      } = props;

      useEffect(() => {
         if (!shortcutKey) return;
         const handleShortcutKey = (e: KeyboardEventLike) => {
            if (isHotKey(shortcutKey, { byKey: true })(e)) {
               onClick?.(null);
            }
         };

         // @ts-ignore
         window.addEventListener("keypress", handleShortcutKey);

         return () => {
            // @ts-ignore
            window.removeEventListener("keypress", handleShortcutKey);
         };
      }, [onClick, shortcutKey]);

      // If class name contains 'w-' or 'h-' then override default className
      const iconClass =
         !iconClassName?.includes("w-") || !iconClassName?.includes("h-")
            ? classNames("w-6 h-6", iconClassName)
            : iconClassName;
      return (
         <React.Fragment>
            <button
               ref={ref}
               disabled={disabled}
               onClick={(e) => {
                  if (disabled) return;

                  onClick?.(e);
               }}
               className={classNames(
                  "min-w-[36px] min-h-[36px] rounded-full border-[1px] outline-none px-4 flex items-center justify-center relative",
                  borderColor ? borderColor : "border-tw-bd-button-medium",
                  backgroundColor ? backgroundColor : "bg-transparent",
                  sizeText ? sizeText : "text-[15px]",
                  colorText ? colorText : "text-tw-text-main",
                  weightText ? weightText : "font-bold",
                  bgHoverColor ? `hover:${bgHoverColor}` : null,
                  isSubText ? "hover_father" : "overflow-hidden",
                  className
               )}
               {...rest}
            >
               {Icon && <Icon className={iconClass} />}
               {label && (
                  <Typography
                     variant="span"
                     label={label ?? children}
                     className={classNames("truncate max-w-full", classLabel)}
                  />
               )}
               {isSubText && (
                  <Typography
                     className="hover_child hidden absolute top-[37px] left-1/2 translate-x-[-50%] text-[11px] text-white bg-[#666666] px-[4px] py-[1px] rounded-sm whitespace-nowrap font-normal"
                     label={subText}
                     variant="span"
                  />
               )}
            </button>
         </React.Fragment>
      );
   }
);

export default React.memo(Button);
