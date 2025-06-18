"use client";

import React, { useState, useEffect, ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { v4 as uuidv4 } from "uuid";

type InputDemoProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  inputClassName?: string;
  label?: ReactNode;
  callback?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
  successMessage?: string;
  endIcon?: ReactNode;
  _size?: string;
};

export function InputDemo({
  className = "",
  inputClassName = "",
  label = "",
  callback = () => {},
  successMessage = "looks good",
  errorMessage = "",
  endIcon = null,
  _size = "",
  ...props
}: InputDemoProps) {
  const [id, setId] = useState("");

  useEffect(() => {
    setId(uuidv4());
  }, []);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    callback(e);
  };

  return (
    <div className={`field grid items-center gap-1.5  ${className} `}>
      {label && <Label htmlFor={id} className="mb-1 text-xs 4xl:text-sm">{label}</Label>}
      <div className={`relative `}>
        <Input
          id={id}
          {...props}
          onChange={onChange}
          className={`bg-white text-xs  ${inputClassName} ${endIcon ? "pr-9" : ""} ${
            _size == "lg" ? "!py-6 rounded-xl" : ""
          }`}
        />
        <div
          className={`absolute top-[50%] right-[3px] transform-[translateY(-50%)]  ${
            _size == "lg" ? "right-[6px]" : ""
          }`}
        >
          {endIcon}
        </div>
      </div>
      {/* <div className="valid-feedback text-green-600 text-sm">{successMessage}</div> */}
      {/* <div className="invalid-feedback text-red-600 text-sm">{errorMessage}</div> */}
    </div>
  );
}
