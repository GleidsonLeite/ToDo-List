import { HTMLAttributes, useCallback, useMemo } from "react";
import style from './TaskCard.module.css'

import { ITask, useTask } from "../../../../hooks/Task";
import { Checkbox } from "../../../../components/Checkbox";
import { DeleteButton } from "../DeleteButton";

interface ITaskCard extends HTMLAttributes<HTMLDivElement> {
    task: ITask
}

export function TaskCard({task, ...props}: ITaskCard):JSX.Element {
    const { changeTaskStatus, removeTask } = useTask()

    const handleOnCheckboxChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        changeTaskStatus({ id: task.id, isCompleted: event.target.checked })
    }, [changeTaskStatus, task.id])

    const handleOnDeleteButtonClick = useCallback(() => {
        removeTask(task.id)
    }, [removeTask, task.id])

    const labelClassName = useMemo(() => {
        return task.isCompleted ? `${style.label} ${style.labelChecked}` : style.label
    }, [task.isCompleted])

   
    return (
        <section {...props} className={style.container}>
            <Checkbox onChange={handleOnCheckboxChange} id={task.id} />
            <label htmlFor={task.id} className={labelClassName}>{task.description}</label>
            <DeleteButton onClick={handleOnDeleteButtonClick}/>
        </section>
    )
}