import {twMerge} from "tailwind-merge";

interface Props {
    children: React.ReactNode;
    className?: string;
    padding_x?: string;
    padding_y?: string;
}

export const Box = ({children, className, padding_x = "px-9", padding_y = "py-9"}: Props) => {
    return (
        <div className={twMerge("w-full border border-day-200 dark:border-night-200 rounded", padding_x, padding_y, className)}>
            {children}
        </div>
    )
}