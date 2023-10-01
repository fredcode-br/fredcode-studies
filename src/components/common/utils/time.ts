export function toSeconds(time: string) {
    const [hours = '0', minutes = '0', seconds = ''] = time.split(":")

    const housInSeconds = Number(hours)  * 3600;
    const minutesInSeconds = Number(minutes)  * 60;
    return  housInSeconds + minutesInSeconds + Number(seconds);
}

export function toNormal(time: number) {
    const secondsInHour = Math.floor(time/60);
    const secondsInMinuts = time % 60;
    const seconds = secondsInMinuts % 60;
    const newTime: number[] = [secondsInHour, secondsInMinuts, seconds];
    return newTime
}