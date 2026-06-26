import "@/style/globals.css"
import {Title} from "@/ui/components/title/title"
import {Typography} from "@/ui/design-system/typography/typography";
import {Navigation} from "@/ui/components/navigation/navigation";
import {Footer} from "@/ui/components/navigation/footer";


export default function Home() {
    return (
        <>
            <Navigation/>
            <Title name="Louis Morel" img="/louis.png"/>
            <Footer/>
        </>
    )
}