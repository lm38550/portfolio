"use client"

import {ContactView} from "@/modules/contact/contact.view";
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {ContactFormFielsType} from "@/types/forms";

export const ContactContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {handleSubmit, formState: {errors}, register, setError, reset,} = useForm<ContactFormFielsType>();

    const onSubmit: SubmitHandler<ContactFormFielsType> = async (formData) => {
        setIsLoading(true);
        console.log('formData', formData)
    }

    return (
        <ContactView form={{
            errors,
            register,
            handleSubmit,
            onSubmit,
            isLoading
        }}/>
    )
}