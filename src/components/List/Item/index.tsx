import style from '../List.module.scss'

type Props = {
    name: string;
    time: string;
  };

function Item ({ name, time } : Props) {
    return (
        <li className={style.item}>
            <h3>{name}</h3>
            <span>{time}</span>
        </li>
    )
}

export default Item;