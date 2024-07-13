import { ButtonHTMLAttributes } from "react";
import style from './Button.module.css'

export function Button({ children, ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button {...props} className={style.container}>{children}</button>
}