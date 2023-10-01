import style from './Item.module.scss'
import Itask from '../../../Types/task';

interface Props extends Itask{
    selectTask: (selectedTask: Itask) => void
}

function Item ({ name, time, selected, completed, id, selectTask } : Props) {
    return (
        <li className={`${style.item} 
            ${selected ? style.itemSelecionado : ''} 
            ${completed ? style.itemCompletado : ''}`}
            onClick={() => !completed && selectTask({
                name,
                time,
                selected,
                completed,
                id
            })}>
            <h3>{name}</h3>
            <span>{time}</span>
            {
                completed && 
                <span className={style.concluido} aria-label='tarefa-completada'></span>
            }
        </li>
    )
}

export default Item;