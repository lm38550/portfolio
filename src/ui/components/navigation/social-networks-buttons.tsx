"use client"

import {footerSocialList} from "@/ui/components/navigation/app-links";
import {Button} from "@/ui/design-system/button/button";
import {v4 as uuidv4} from "uuid";
import {RiInstagramLine} from "react-icons/ri";
import clsx from "clsx";

interface Props {
    className?: string
    theme? : "primary" | "secondary" | "gray"
}

export const SocialNetworksButtons = ({
    className = "flex items-center gap-2",
    theme = "primary"
}: Props) => {

    const icoList = footerSocialList.map((socialNetwork) => (
        <Button
            size="medium"
            key={uuidv4()}
            variant="ico"
            iconTheme={theme}
            icon={socialNetwork.icon}
            baseUrl={socialNetwork.baseUrl}
            linkType={socialNetwork.type}
        />
    ))

    return (
        <div className={clsx(className)}>{icoList}</div>
    )
}