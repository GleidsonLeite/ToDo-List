import { Badge } from '../../../../components/Badge';
import style from './TaskCounter.module.css'

interface ITaskCounter extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    count: string;
}
export function TaskCounter({count, label, ...props}: ITaskCounter) {
    return (
        <section className={style.container}  {...props}>
            <h1>{label}</h1>
            <Badge label={count} />
        </section>
    )
}