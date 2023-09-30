import { useState } from 'react';

import Button from "../Button";
import style from './Form.module.scss'
import Itask from '../../Types/task';

import { v4 as uuidv4 } from 'uuid';


function Form ({setTasks}: {setTasks: React.Dispatch<React.SetStateAction<Itask[]>>}) {
    const [name, setName] = useState('');
    const [time, setTime] = useState('00:00');

    function addTask(event: React.FormEvent) {
        event.preventDefault();
        setTasks(lastTasks => [...lastTasks, 
            { 
                name, 
                time,
                selected: false,
                completed: false,
                id: uuidv4()
            }
        ])
        setName("")
        setTime("")
    }; 

    return (
        <form className={style.novaTarefa} onSubmit={addTask}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">
                    Adicione um novo estudo
                </label>
                <input type="text"
                    name="tarefa"
                    value={name}
                    onChange={event => setName(event.target.value)}
                    id="tarefa"
                    placeholder="O que você quer estudar?"
                    required 
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">
                    Tempo
                </label>
                <input type="time"
                    step="1"
                    name="tempo"
                    value={time}
                    onChange={event => setTime(event.target.value)}
                    id="tempo"
                    min="00:00:00"
                    max="01:30:00"
                    required 
                />
            </div>
            <Button type='submit'>
                Adicionar
            </Button>
        </form>
    )
}

export default Form;