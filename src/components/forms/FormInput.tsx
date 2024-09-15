"use client";

import { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { getErrorMessageByPropertyName } from "../../../utils/schema-validation";

interface IInput {
  name: string;
  type?: string;
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  className?: string;
}

const FormInput = ({
  name,
  type = "text",
  value,
  id,
  placeholder,
  validation,
  label,
  required,
  className,
}: IInput) => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);

  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div>
      <label className="block mb-1 font-semibold">
        {label ? label : null}
        {required && label ? <span className="text-red-500">*</span> : null}
      </label>
      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          const fieldValue = value !== undefined ? value : field.value || ""; // Ensure fieldValue is never undefined

          return type === "password" ? (
            <span className="relative">
              <input
                type={isPasswordShow ? "text" : "password"}
                placeholder={placeholder}
                {...field}
                value={fieldValue} // Use controlled value
                required={required}
                className={`${className} py-2 pr-8 w-full`}
              />
              <span className="absolute right-2 top-0 h-full pr-2 flex items-center">
                {isPasswordShow ? (
                  <FaEye
                    size={20}
                    className="text-lg cursor-pointer text-gray-500"
                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                  />
                ) : (
                  <FaEyeSlash
                    size={20}
                    className="text-lg cursor-pointer text-gray-500"
                    onClick={() => setIsPasswordShow(!isPasswordShow)}
                  />
                )}
              </span>
            </span>
          ) : (
            <input
              type={type}
              placeholder={placeholder}
              {...field}
              value={fieldValue} // Use controlled value
              required={required}
              className={`${className} py-2 w-full`}
            />
          );
        }}
      />
      <small className="text-red-500">{errorMessage}</small>
    </div>
  );
};

export default FormInput;
