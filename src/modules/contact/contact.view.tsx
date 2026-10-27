import {FormsType} from "@/types/forms";
import {Container} from "@/ui/components/container/container";
import {Typography} from "@/ui/design-system/typography/typography";
import {ContactForm} from "@/modules/contact/contact.form";

interface Props {
    form: FormsType
}

export const ContactView = ({form}: Props) => {
    return (
        <div className="bg-day-100 dark:bg-night-100">
            <Container>
                <Typography variant="h1" component="h1" className="text-center">Contact</Typography>
                <ContactForm form={form} />
            </Container>
        </div>
    )
}