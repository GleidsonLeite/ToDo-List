import { HTMLAttributes } from "react";

export function LogoImage(props: HTMLAttributes<HTMLImageElement>) {
    return (
        <img src="rocket.svg" alt="Rocket" {...props}/>
    )
}