

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
        day: "numeric",
        year:'numeric'
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

function changeMonthToNumber(month){
    let count = 0;
    switch (month){
        case 'Jan':count = 1;
                    break;
        case 'Feb':count = 2;
            break;
        case 'Mar':count = 3;
            break;
        case 'Apr':count = 4;
            break;
        case 'May':count = 5;
            break;
        case 'Jun':count = 6;
            break;
        case 'Jul':count = 7;
            break;
        case 'Aug':count = 8;
            break;
        case 'Sep':count = 9;
            break;
        case 'Oct':count = 10;
            break;
        case 'Nov':count = 11;
            break;
        case 'Dec':count = 12;
            break;
        default:break
    }
    return count;
}

export function compareTime(taskTime,todayTime){
    let taskTimeArr = taskTime.split(" ");
    let todayTimeArr = todayTime.split(" ");
    if(Number(taskTimeArr[2])<Number(todayTimeArr[2])){
        return true;
    }else if(Number(taskTimeArr[2])===Number(todayTimeArr[2])){
        let taskMonth = changeMonthToNumber(taskTimeArr[1]);
        let todayMonth = changeMonthToNumber(todayTimeArr[1]);
        if(taskMonth<todayMonth){
            return true;
        }else if(taskMonth===todayMonth){
            if(Number(taskTimeArr[0])<Number(todayTimeArr[0])){
                return true;
            }
        }
    }
    return false;
}