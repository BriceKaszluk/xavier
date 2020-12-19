export const setTime = function() {

    const currentDate = new Date();

    const hours = () => {
        const currentHours = (currentDate.getHours());
        const hoursSplit = currentHours.toString();
        if (hoursSplit.length < 2) {
            console.log(hoursSplit.length);
            return (`0${currentHours}`);
        }
        return (`${currentHours}`);
    }

    const minutes = () => {
        const currentMinutes = (currentDate.getMinutes());
        const minutesSplit = currentMinutes.toString();
        if (minutesSplit.length < 2) {
            return (`0${currentMinutes}`);
        }
        return (`${currentMinutes}`);
    }

    const seconds = () => {
        const currentSeconds = (currentDate.getSeconds());
        const secondesSplit = currentSeconds.toString();
        if (secondesSplit.length < 2) {
            return (`0${currentSeconds}`);
        }
        return (`${currentSeconds}`);
    }

    const time = {
        hours: hours(),
        minutes: minutes(),
        seconds: seconds()
    }

    return time;
}