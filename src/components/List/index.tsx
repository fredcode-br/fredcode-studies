import Itask from '../../Types/task';
import Item from './Item';
import style from './List.module.scss'

interface Props {
    tasks: Itask[],
    selectTask: (selectedTask: Itask) => void
}

function List({tasks, selectTask}: Props) {
    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task) => (
                    <Item 
                        selectTask={selectTask}
                        key={task.id}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;