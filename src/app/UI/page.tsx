import "@/style/globals.css"
import {Button} from "@/ui/design-system/button/button";
import {RiUser6Fill} from "react-icons/ri"


export default function Home() {
    return (
        <>
            <div className="flex p-5">
                <Button className="m-2" size="large">Test</Button>
                <Button className="m-2" size="large" variant="secondary">Test</Button>
                <Button className="m-2" size="large" variant="outline">Test</Button>
                <Button className="m-2" size="large" variant="disabled">Test</Button>
                <Button className="m-2" size="large" variant="ico" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" size="large" variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" size="large" variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
            </div>

            <div className="flex p-5">
                <Button className="m-2">Test</Button>
                <Button className="m-2" variant="secondary">Test</Button>
                <Button className="m-2" variant="outline">Test</Button>
                <Button className="m-2" variant="disabled">Test</Button>
                <Button className="m-2" variant="ico" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
            </div>

            <div className="flex p-5">
                <Button className="m-2" size="small">Test</Button>
                <Button className="m-2" size="small" variant="secondary">Test</Button>
                <Button className="m-2" size="small" variant="outline">Test</Button>
                <Button className="m-2" size="small" variant="disabled">Test</Button>
                <Button className="m-2" size="small" variant="ico" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" size="small" variant="ico" iconTheme="secondary" icon={<RiUser6Fill/>}>Test</Button>
                <Button className="m-2" size="small" variant="ico" iconTheme="gray" icon={<RiUser6Fill/>}>Test</Button>
            </div>
        </>
    )
}