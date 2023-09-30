import Item from './Item';
import style from './List.module.scss'

function List() {
    const tasks = [{
        name: 'React',
        time: '01:30:00'
    },
    {
        name: 'JavaScript',
        time: '01:00:00'
    },
    {
        name: 'TypeScript',
        time: '02:30:00'
    }]

    return (
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map((task, index) => (
                    <Item 
                        key={index}
                        {...task}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;