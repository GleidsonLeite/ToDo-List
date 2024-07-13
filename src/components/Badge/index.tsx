import style from './Badge.module.css'

interface IBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
}
export function Badge({label, ...props}: IBadgeProps):JSX.Element {
    return (
        <section className={style.container} {...props}>
            {label}
        </section>
    )
}