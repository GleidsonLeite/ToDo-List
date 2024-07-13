import { HTMLAttributes } from 'react'
import style from './Header.module.css'

export function Header({children, ...props}: HTMLAttributes<HTMLDivElement>):JSX.Element {
    return (
        <header className={style.container} {...props}>
             {children}
        </header>
    )
}