const date = new Date();

const formattedDate = date.toLocaleString("en-GB",{
    month: "short",
    day: "numeric"
});

function compareDate(formattedDate,date){
    const sizeFormatDate = formattedDate.length;
    const sizeDate = date.length;
    const formatDateMonth = setMonthNumber(formattedDate.substring(sizeFormatDate-3));
    const dateMonth = setMonthNumber(date.substring(sizeDate-3));
    console.log(dateMonth);
    if(formatDateMonth>dateMonth){
        return true;
    }
    return false;
}

export default compareDate;

function setMonthNumber(str){
    switch (str){
        case "Jan":
            return 1;

        case "Feb":
            return 2;

        case "Mar":
            return 3;

        case "Apr":
            return 4;

        case "May":
            return 5;

        case "Jun":
            return 6;

        case "Jul":
            return 7;

        case "Aug":
            return 8;

        case "Sep":
            return 9;

        case "Oct":
            return 10;

        case "Nov":
            return 11;

        case "Dec":
            return 12;

        default:
            break;
    }
}