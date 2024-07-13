import { Header } from '../../components/Header'
import { Logo } from '../../components/Logo'
import { CreateTaskForm } from './components/CreateTaskForm'
import { TaskList } from './components/TaskList'
import style from './Main.module.css'

export function Main() {
    return (
        <section className={style.container}>
            <Header>
                <Logo.Container>
                    <Logo.LogoImage />
                    <Logo.Letters />
                </Logo.Container>
            </Header>
            <article className={style.content}>
                <article className={style.formContainer}>
                    <CreateTaskForm />
                </article>
                <TaskList />
            </article>
        </section>
    )   
}