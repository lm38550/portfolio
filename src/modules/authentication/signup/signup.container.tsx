"use client";

import {SignupView} from "@/modules/authentication/signup/signup.view";
import {useForm, SubmitHandler} from "react-hook-form";
import {SignupFormFielsType} from "@/types/forms";
import {useState} from "react";

export const SignupContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {handleSubmit, formState: {errors}, register, setError, reset,} = useForm<SignupFormFielsType>();

    const onSubmit: SubmitHandler<SignupFormFielsType> = async (formData) => {
        setIsLoading(true);
        console.log('formData', formData)
    }

    return <>
        <SignupView form={{
            errors,
            register,
            handleSubmit,
            onSubmit,
            isLoading
        }}
        />
    </>;
}