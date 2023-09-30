import style from '../List.module.scss'
import Itask from '../../../Types/task';

function Item ({ name, time, selected, completed, id } : Itask) {
    return (
        <li className={style.item}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item;