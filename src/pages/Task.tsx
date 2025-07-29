import { selectTask } from '@/redux/feature/taskSlice'
import { useAppSelector } from '@/redux/hooks'
import TaskCard from './TaskCard/TaskCard'
import { AddTaskModel } from './TaskCard/AddTaskModel'


function Task() {
    const tasks = useAppSelector((state) => selectTask(state))

    return (
        <div>
            <h1>This is Task Component</h1>
            <AddTaskModel></AddTaskModel>

            {
                tasks.map((task) => (
                    <TaskCard key={task.id} task={task}></TaskCard>
                ))
            }
        </div>
    )
}

export default Task
