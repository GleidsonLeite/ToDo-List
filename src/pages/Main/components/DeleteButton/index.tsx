import { HtmlHTMLAttributes } from "react";
import {FaRegTrashAlt } from 'react-icons/fa'
import style from './DeleteButton.module.css'

export function DeleteButton(props: HtmlHTMLAttributes<HTMLButtonElement>): JSX.Element {
    return (
        <button className={style.container} {...props}>
            <FaRegTrashAlt />
        </button>
    )
}