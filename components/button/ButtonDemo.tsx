"use client";

import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const buttonStyles = {
  default: {
    defaultColor: "",
    gray: "text-gray-100",
    // success: "bg-green-600 hover:bg-green-500",
    green: "bg-success hover:bg-success-hover",
    // warning: "bg-yellow-600 hover:bg-yellow-500",
    yellow: "bg-warning hover:bg-warning-hover",
    white:
      "bg-white text-[rgb(0,0,255)] border-[1px] border-solid border-[rgb(237,235,255)] hover:bg-[rgba(255,255,255,0.4)]",
    blue: "bg-[rgb(0,0,255)] hover:bg-[rgb(10,10,196)]",
  },
  secondary: {
    defaultColor: "",
    gray: "",
    green: "bg-green-50 hover:bg-green-100 text-green-600",
    yellow: "bg-yellow-50 hover:bg-yellow-100 text-yellow-600",
    white: "bg-white border-[1px_solid_rgb(237,235,255)]",
    blue: "bg-[rgb(0,0,255)] hover:bg-[rgb(10,10,196)]",
  },
  outline: {
    defaultColor: "",
    gray: "",
    green: "text-green-600 hover:text-green-600 border-green-200 hover:border-green-300 hover:bg-green-50",
    yellow:
      "text-yellow-600 hover:text-yellow-600 border-yellow-200 hover:border-yellow-300 hover:bg-yellow-50",
    white: "bg-white border-[1px_solid_rgb(237,235,255)]",
    blue: "bg-[rgb(0,0,255)] hover:bg-[rgb(10,10,196)]",
  },
  ghost: {
    defaultColor: "",
    gray: "hover:bg-[rgba(0,0,0,0.03)] text-gray-400",
    green: "text-green-600 hover:text-green-600 hover:bg-green-50",
    yellow: "text-yellow-600 hover:text-yellow-600 hover:bg-yellow-50",
    white:
      "bg-white border border-[1px] border-solid border-[rgb(237,235,255)] hover:bg-[rgba(255,255,255,0.9)]",
    blue: "bg-[rgb(0,0,255)] hover:bg-[rgb(10,10,196)]",
  },
  destructive: {
    defaultColor: "",
    gray: "",
    green: "bg-red-600 hover:bg-red-500",
    yellow: "bg-orange-600 hover:bg-orange-500",
    white: "bg-white border-[1px_solid_rgb(237,235,255)]",
    blue: "bg-[rgb(0,0,255)] hover:bg-[rgb(10,10,196)]",
  },
  link: {
    defaultColor: "",
    gray: "",
    green: "text-green-600 hover:text-green-500",
    yellow: "text-yellow-600 hover:text-yellow-500",
    white: "bg-white border-[1px_solid_rgb(237,235,255)]",
    blue: "bg-[rgb(0,0,255)] hover:bg-[rgb(10,10,196)]",
  },
};

type ButtonDemoProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
  text?: ReactNode;
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  icon?: ReactElement | null;
  startIcon?: ReactElement | null;
  endIcon?: ReactElement | null;
  color?: "defaultColor" | "green" | "yellow" | "gray" | "white" | "blue";
  disabled?: boolean;
  onClick?: () => void;
  shape?: string;
};

export function ButtonDemo({
  className = "",
  text = "",
  variant = "default",
  size = "default",
  icon = null,
  startIcon = null,
  endIcon = null,
  color = "defaultColor",
  disabled = false,
  onClick = () => {},
  shape = "",
  ...props
}: ButtonDemoProps) {
  const [buttonStyle, setButtonStyle] = useState("");

  useEffect(() => {
    const buttonStylesVariant = buttonStyles[variant];

    if (buttonStylesVariant) {
      const buttonStylesColor = buttonStylesVariant[color];
      setButtonStyle(buttonStylesColor);
    }
  }, []);

  return (
    <Button
      variant={variant}
      size={size}
      disabled={disabled}
      className={`
           cursor-pointer text-[10px] 4xl:text-[16px] !px-2 4xl:!px-4 leading-none !py-[7px] 4xl:!py-[10px] !h-auto
        ${className} ${buttonStyle} ${shape == "circle" ? "rounded-full !w-[35px] !h-[35px] !p-2" : ""}
         ${size == "lg" ? "!py-[12px] !px-[16px]" : ""}
        `}
      onClick={onClick}
      {...props}
    >
      {startIcon}
      {text}
      {icon}
      {endIcon}
      {/* <div data-type={type}></div> */}
    </Button>
  );
}
