import {FormsType} from "@/types/forms";
import {Input} from "@/ui/design-system/forms/input";
import {Button} from "@/ui/design-system/button/button";

interface Props {
    form: FormsType;
}

export const ForgotPasswordForm = ({form}: Props) => {
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

            <Button type="submit" isLoading={isLoading} fullWidth>
                Récupérer mon mot de passe
            </Button>
        </form>

    )
}