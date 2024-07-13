import { Button } from "../../../../components/Button";
import { Input } from "../../../../components/Input";
import { labels } from "./enums";
import style from "./CreateTaskForm.module.css"
import { FormEvent, useCallback } from "react";
import { useTask } from "../../../../hooks/Task";



export function CreateTaskForm() {
    const { addTask } = useTask()

    const handleOnSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const descriptionInput = event.currentTarget.description
        const description = descriptionInput.value
        if (description.trim() === '') {
            descriptionInput.focus()
            return
        }
        addTask(description)
        
        event.currentTarget.description.value = ''
    }, [addTask])

    return (
        <form onSubmit={handleOnSubmit} className={style.container}>
            <Input name="description" type="text" placeholder={labels.add_a_new_task} />
            <Button type="submit">
                <span>Adicionar</span>
                <img src="/plus.svg" alt="Adicionar" />
            </Button>
        </form>
    )
}