import style from './Clock.module.scss'

interface Props {
    time: number | undefined
}

function Clock ({ time=0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds =  time % 60;
    const [minutesDezen, minutesUnit] = String(minutes).padStart(2, '0');
    const [secondsDezen, secondsUnit] = String(seconds).padStart(2, '0');

    return (
        <>
            <span className={style.relogioNumero}>{minutesDezen}</span>
            <span className={style.relogioNumero}>{minutesUnit}</span>
            <span className={style.relogioDivisao}>:</span>
            <span className={style.relogioNumero}>{secondsDezen}</span>
            <span className={style.relogioNumero}>{secondsUnit}</span>
        </>
     )
}

export default Clock