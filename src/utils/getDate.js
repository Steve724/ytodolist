

function getDate(){
    const date = new Date();
    const formattedDate = date.toLocaleString("en-GB",{
        month: "short",
        day: "numeric"
    });
    return formattedDate;
}

export function getDateOnlyDay(num){
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate()+num);
    const formattedDate = nextDay.toLocaleString("en-GB",{
        day: "numeric"
    });
    return formattedDate;
}

export function getDay(){
    const a = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday");
    const week = new Date().getDay();
    const str = a[week];
    return str;
}

export default getDate;

export function getWholeWeekDay(num){
    const a = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate()+num);
    const day = nextDay.getDay();
    return a[day];
}

export function getWholeDate(num){
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate()+num);
    const formattedDate = nextDay.toLocaleString("en-GB",{
        month: "short",
        day: "numeric"
    });
    return formattedDate;
}

export function getYearWithMonth(num){
    const today = new Date();
    const nextDay = new Date(today);
    nextDay.setDate(today.getDate()+num);
    const options = {
        year:"numeric",
        month:"2-digit"
    };
    return nextDay.toLocaleString("en",options);
}