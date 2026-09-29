import {Input} from "@/ui/design-system/forms/input";
import {FormsType} from "@/types/forms";
import {Typography} from "@/ui/design-system/typography/typography";
import {Button} from "@/ui/design-system/button/button";

interface Props {
    form: FormsType;
}

export const ContactForm = ({form}: Props) => {
    const {onSubmit, errors, isLoading, register, handleSubmit } = form;

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-10 gap-10">
                <div className="col-span-5">
                    <Typography variant="caption-base" component="p" className="pl-4">Nom*</Typography>
                    <Input
                        isLoading={isLoading}
                        placeholder="Jean Dupont"
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Merci de renseigner votre nom"
                        id="name"
                        required
                        className="my-2"
                    />

                    <Typography variant="caption-base" component="p" className="pl-4 pt-5">Adresse mail*</Typography>
                    <Input
                        isLoading={isLoading}
                        placeholder="example@mail.com"
                        type="email"
                        register={register}
                        errors={errors}
                        errorMsg="Merci de renseigner votre adresse mail"
                        id="email"
                        required
                        className="my-2"
                    />
                </div>
                <div className="col-span-5">
                    <Typography variant="caption-base" component="p" className="pl-4">Numéro de téléphone</Typography>
                    <Input
                        isLoading={isLoading}
                        placeholder="06 12 34 56 78"
                        type="phone"
                        register={register}
                        errors={errors}
                        errorMsg="Merci de renseigner le numéro de téléphone"
                        id="number"
                        className="my-2"
                    />

                    <Typography variant="caption-base" component="p" className="pl-4 pt-5">Comment m'avez vous connu ?</Typography>
                    <Input
                        isLoading={isLoading}
                        placeholder="Je vous ai connu grâce à..."
                        type="text"
                        register={register}
                        errors={errors}
                        errorMsg="Merci de renseigner comment vous m'avez connu"
                        id="how_did_know"
                        className="my-2"
                    />
                </div>

            </div>
            <div className="flex flex-col w-full">
                <Typography variant="caption-base" component="p" className="pl-4 pt-5">Contenu du message*</Typography>
                <Input
                    isLoading={isLoading}
                    placeholder="Objet"
                    type="text"
                    register={register}
                    errors={errors}
                    errorMsg="Merci de renseigner l'objet de votre message"
                    id="object"
                    required
                    className="my-2"
                />
            </div>
            <div className="flex flex-col w-full">
                <Input
                    isLoading={isLoading}
                    placeholder="Votre message"
                    type="textarea"
                    register={register}
                    errors={errors}
                    errorMsg="Merci de renseigner votre message"
                    id="content"
                    required
                    className="my-2 min-h-60 w-full align-top text-left"
                />
            </div>

            <div className="text-center">
                <Button type="submit" size="large" className="mt-2 mb-7" isLoading={isLoading} >
                    Envoyer
                </Button>
            </div>
        </form>
    )
}