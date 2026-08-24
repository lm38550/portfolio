"use client"

import {ContactView} from "@/modules/contact/contact.view";
import {SubmitHandler, useForm} from "react-hook-form";
import {useState} from "react";
import {ContactFormFielsType} from "@/types/forms";

export const ContactContainer = () => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const {handleSubmit, formState: {errors}, register, setError, reset,} = useForm<ContactFormFielsType>();

    const onSubmit = async (formData : SubmitHandler<any>) => {

        try {
            const res = await fetch('api/contact', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
        } catch (err:any) {
            console.error('Err', err)
        }

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