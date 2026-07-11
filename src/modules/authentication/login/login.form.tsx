import {FormsType} from "@/types/forms";
import {useForm} from "react-hook-form";
import {Button} from "@/ui/design-system/button/button";
import {Input} from "@/ui/design-system/forms/input";

interface Props {
    form: FormsType;
}

export const LoginForm = ({form}: Props) => {
    const {onSubmit, errors, isLoading, register, handleSubmit} = form;
    console.log("form", form);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="py-5 space-y-4">
            <Input
                isLoading={isLoading}
                placeholder="E-mail"
                type="email"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="email"
                required
            />

            <Input
                isLoading={isLoading}
                placeholder="Mot de passe"
                type="password"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="password"
                required
            />

            <Button type="submit" isLoading={isLoading} fullWidth>
                Se connecter
            </Button>
        </form>
    )
}