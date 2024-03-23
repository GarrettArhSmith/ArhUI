import React from "react";

import "./Button.css";

export interface ButtonProps extends React.ComponentProps<"button"> {
  backgroundColor?: string;
  kind?: "primary" | "secondary";
  label?: string;
  size?: "small" | "medium" | "large";
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
 ({ backgroundColor="black", kind="primary", label, size, ...props }, ref) => {
   return (
    <button
      data-button={`kind:${kind} size:${size} backgroundColor:${backgroundColor}`}
      ref={ref}
      {...props}
    >
      {label}
    </button>
   );
 },
);