let s = "07:05:45 PM";
let hour = s.substring(0,2)*1;
let timeFormat = s.substring(2,8);

if (hour === 12, s.indexOf("AM") !== -1) {
    console.log ("00" + timeFormat);
}

if (hour === 12 , s.indexOf("PM") !== -1) {
    console.log (hour + timeFormat);
}
if (hour < 12 , s.indexOf("PM") !== -1) {
    console.log (12 + hour + timeFormat);

} else {

 	// если час от 1 до 11 утра
    if (hour < 10) { 
    	// если число меньше 10, добавить ноль в начало
        console.log ("0" + hour + timeFormat);

    } else { 
    	// если число больше 9, просто добавьте остаток строки
        console.log (hour + timeFormat);

    }
}