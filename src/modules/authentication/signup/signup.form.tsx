import {FormsType} from "@/types/forms";
import {useForm} from "react-hook-form";
import {Button} from "@/ui/design-system/button/button";
import {Input} from "@/ui/design-system/forms/input";

interface Props {
    form: FormsType;
}

export const SignupForm = ({form}: Props) => {
    const {onSubmit, errors, isLoading, register, handleSubmit} = form;
    console.log("form", form);
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="py-3 space-y-4">
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

            <Input
                isLoading={isLoading}
                placeholder="Comment nous as-tu connu ?"
                type="text"
                register={register}
                errors={errors}
                errorMsg="Tu dois renseigner ce champ"
                id="how_did_know"
                required
            />

            <Button type="submit" isLoading={isLoading} fullWidth>
                S'inscrire
            </Button>
        </form>
    )
}