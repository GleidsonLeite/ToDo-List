import { HTMLAttributes } from "react";
import style from './Container.module.css'

export function Container({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
    return (
        <section className={style.container} {...props}>
            {children}
        </section>
    )

}