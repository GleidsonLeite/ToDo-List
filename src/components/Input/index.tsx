import { InputHTMLAttributes } from "react";
import style from './Input.module.css'
export function Input(props: InputHTMLAttributes<HTMLInputElement>) {
    return <input className={style.container} {...props} />
}