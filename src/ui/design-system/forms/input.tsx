import clsx from "clsx";
import {error} from "next/dist/build/output/log";
import {Typography} from "@/ui/design-system/typography/typography";

interface Props {
    isLoading: boolean;
    placeholder?: string;
    type?: "text" | "password" | "email";
    register: any;
    errors: any;
    errorMsg?: string;
    id: string;
    required?: boolean;
    isAutoCompleted?: boolean;
    className?: string;
}

export const Input = ({
                          isLoading,
                          placeholder = "",
                          type = "text",
                          register,
                          errors,
                          errorMsg = "Champs à compléter",
                          id,
                          required = false,
                          isAutoCompleted = false,
                          className = "",
                      }: Props) => {
    console.log("errors", errors[id]);
    return (
        <div className="space-y-1">
            <input type={type}
                   placeholder={placeholder}
                   className={clsx(
                       errors[id] ? "border-red-500 placeholder-red-500" : "border-day-300",
                       isLoading && "bg-gray-100 dark:bg-gray-900 cursor-not-allowed",
                       " w-full p-4 font-light border dark:border-night-300 rounded focus:outline-none focus:ring-1 " +
                       "focus:ring-day-400 dark:focus:ring-night-400 animate", className)}
                   name={id}
                   disabled={isLoading}
                   {...register(id, {
                       required: {
                           value: required,
                           message: errorMsg,
                       }
                   })}
                   autoComplete={isAutoCompleted ? "on" : "off"}
            />
            {errors[id] && (
                <Typography variant="caption-xsm" component="div" className="text-red-500">
                    {errors[id]?.message}
                </Typography>
            )}
        </div>
    )
}