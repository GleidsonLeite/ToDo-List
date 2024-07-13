import { useTask } from "../../../../hooks/Task";
import { TaskCard } from "../TaskCard";
import { TaskCounter } from "../TaskCounter";
import { labels } from "./enums";
import style from './TaskList.module.css'

export function TaskList() {
    const { numberOfCompletedTasks, numberOfCreatedTasks, tasks } = useTask()

    return (
        <section className={style.container}>
            <header className={style.header}>
                <TaskCounter label={labels.created_tasks} count={String(numberOfCreatedTasks)} />
                <TaskCounter label={labels.finished} count={`${numberOfCompletedTasks} de ${numberOfCreatedTasks}`} />
            </header>
            <article className={style.list}>
                {tasks.map(task => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </article>
        </section>
    )
}