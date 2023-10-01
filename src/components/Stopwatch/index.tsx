import { useState, useEffect } from 'react';

import Itask from '../../Types/task';
import Button from '../Button';
import { toSeconds } from '../common/utils/time';
import Clock from './Clock';
import style from './Stopwatch.module.scss'

interface Props {
    selected: Itask | undefined,
    finishTask: () => void
}

function Stopwatch ({ selected, finishTask }: Props) {

    const [time, setTime] = useState<number>();

    useEffect(() => {
        if(selected?.time) {
            setTime(toSeconds(selected.time));
        }
    },[selected]);

    function regressiva(count: number = 0){
        setTimeout(() => {
            if(count > 0) {
                setTime(count - 1);
                return regressiva(count - 1);
            }
            finishTask();
        }, 1000);
    }

    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            <div className={style.relogioWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => regressiva(time)}>
                Começar
            </Button>
        </div>
    )
}

export default Stopwatch;