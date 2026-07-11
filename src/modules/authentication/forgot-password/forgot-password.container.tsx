"use client";

import {ForgotPasswordView} from "@/modules/authentication/forgot-password/forgot-password.view";
import {useState} from "react";
import {SubmitHandler, useForm} from "react-hook-form";
import {ForgotPasswordFormFielsType} from "@/types/forms";

export const ForgotPasswordContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {handleSubmit, formState: {errors}, register, setError, reset,} = useForm<ForgotPasswordFormFielsType>();

    const onSubmit: SubmitHandler<ForgotPasswordFormFielsType> = async (formData) => {
        setIsLoading(true);
        console.log('formData', formData)
    }

    return <>
        <ForgotPasswordView form={{
            errors,
            register,
            handleSubmit,
            onSubmit,
            isLoading
        }}/>
    </>;
}