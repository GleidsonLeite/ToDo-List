import { createContext, useCallback, useState, useContext, useMemo } from "react";
import { v4 as uuidV4 } from 'uuid'

export interface ITask {
    id: string;
    description: string;
    isCompleted: boolean;
}

interface IChangeTaskStatus {
    id: string;
    isCompleted: boolean;

}

interface ITaskContext {
    tasks: ITask[];
    addTask: (description: string) => void;
    removeTask: (id: string) => void;
    changeTaskStatus: (parameters: IChangeTaskStatus) => void;
    numberOfCreatedTasks: number;
    numberOfCompletedTasks: number;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);

export default function TaskProvider({ children }: { children: React.ReactNode }): JSX.Element {
    const [tasks, setTasks] = useState<ITask[]>([]);

    const addTask = useCallback((description: string): void => {
        setTasks((prevTasks) => [...prevTasks, { id: uuidV4(), isCompleted: false, description }])
    }, [])

    const removeTask = useCallback((id: string): void => {
        setTasks((prevTasks) => prevTasks.filter(task => task.id !== id))
    }, [])

    const changeTaskStatus = useCallback(({ id, isCompleted }: IChangeTaskStatus): void => {
        setTasks((prevTasks) => prevTasks.map(task => task.id === id ? { ...task, isCompleted } : task))
    }, [])

    const numberOfCreatedTasks = useMemo(() => tasks.length, [tasks])
    const numberOfCompletedTasks = useMemo(() => tasks.filter(task => task.isCompleted).length, [tasks])

    return (
        <TaskContext.Provider value={{ tasks, addTask, changeTaskStatus, removeTask, numberOfCompletedTasks, numberOfCreatedTasks }}>
            {children}
        </TaskContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useTask(): ITaskContext {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error('useTask must be used within a TaskProvider')
    }
    return context;
}
