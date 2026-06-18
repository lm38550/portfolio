import "@/style/globals.css"
import {Button} from "@/ui/design-system/button/button";
import {RiUser6Fill, RiArrowRightLine, RiArrowLeftLine} from "react-icons/ri"
import {Spinner} from "@/ui/design-system/spinner/spinner";
import {Logo} from "@/ui/design-system/logo/logo";


export default function Home() {
    return (
        <>
            <div className="flex p-5">
                <Button className="m-2" size="large">Primary</Button>
                <Button className="m-2" size="large" variant="secondary">Secondary</Button>
                <Button className="m-2" size="large" variant="outline">Outline</Button>
                <Button className="m-2" size="large" variant="disabled">Disabled</Button>
                <Button className="m-2" size="large" variant="ico" iconTheme="primary" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" size="large" variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" size="large" variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
                <Spinner size="large"/>
            </div>

            <div className="flex p-5">
                <Button className="m-2" size="large" variant="primary" icon={<RiArrowRightLine/>}>Ico R</Button>
                <Button className="m-2" size="large" iconPosition="left" icon={<RiArrowLeftLine/>}>Ico L</Button>
                <Button className="m-2" size="large" variant="secondary" icon={<RiArrowRightLine/>}>Ico sec</Button>
                <Button className="m-2" size="large" variant="outline" icon={<RiArrowRightLine/>}>Ico out</Button>
                <Button className="m-2" size="large" variant="disabled" icon={<RiArrowRightLine/>}>Ico dis</Button>
            </div>

            <div className="flex p-5">
                <Button className="m-2">Primary</Button>
                <Button className="m-2" variant="secondary">Secondary</Button>
                <Button className="m-2" variant="outline">Outline</Button>
                <Button className="m-2" variant="disabled">Disabled</Button>
                <Button className="m-2" variant="ico" iconTheme="primary" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
                <Spinner/>
            </div>

            <div className="flex p-5">
                <Button className="m-2" variant="primary" icon={<RiArrowRightLine/>}>Ico R</Button>
                <Button className="m-2" iconPosition="left" icon={<RiArrowLeftLine/>}>Ico L</Button>
                <Button className="m-2" variant="secondary" icon={<RiArrowRightLine/>}>Ico sec</Button>
                <Button className="m-2" variant="outline" icon={<RiArrowRightLine/>}>Ico out</Button>
                <Button className="m-2" variant="disabled" icon={<RiArrowRightLine/>}>Ico dis</Button>
            </div>

            <div className="flex p-5">
                <Button className="m-2" size="small">Primary</Button>
                <Button className="m-2" size="small" variant="secondary">Secondary</Button>
                <Button className="m-2" size="small" variant="outline">Outline</Button>
                <Button className="m-2" size="small" variant="disabled">Disabled</Button>
                <Button className="m-2" size="small" variant="ico" iconTheme="primary" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" size="small" variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" size="small" variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
                <Spinner size="small"/>
            </div>

            <div className="flex p-5">
                <Button isLoading className="m-2" size="small">Primary</Button>
                <Button isLoading className="m-2" size="small" variant="secondary">Secondary</Button>
                <Button isLoading className="m-2" size="small" variant="outline">Outline</Button>
                <Button isLoading className="m-2" size="small" variant="disabled">Disabled</Button>
                <Button isLoading className="m-2" size="small" variant="ico" iconTheme="primary" icon={<RiUser6Fill/>}>Test</Button>
                <Button isLoading className="m-2" size="small" variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                <Button isLoading className="m-2" size="small" variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
            </div>

            <div className="flex p-5">
                <Button className="m-2" size="small" variant="primary" icon={<RiArrowRightLine/>}>Ico R</Button>
                <Button className="m-2" size="small" iconPosition="left" icon={<RiArrowLeftLine/>}>Ico L</Button>
                <Button className="m-2" size="small" variant="secondary" icon={<RiArrowRightLine/>}>Ico sec</Button>
                <Button className="m-2" size="small" variant="outline" icon={<RiArrowRightLine/>}>Ico out</Button>
                <Button className="m-2" size="small" variant="disabled" icon={<RiArrowRightLine/>}>Ico dis</Button>
            </div>

            <div className="flex p-5 items-center">
                <Logo size="very-small"/>
                <Logo size="small"/>
                <Logo/>
                <Logo size="large"/>
            </div>
        </>
    )
}