var calendar = document.querySelector(".app-calendar")
// console.log(calendar)

//If day is a Weekend, add class .weekend 
var isWeekend = day => {
    // 0 when it's Sunday, 6 when its Saturday
   return day % 7 === 6 || day % 7 === 0
} 

// Function to get the name of Days (Sun - Sat)
var getDayName = day => { 
    var date = new Date(Date.UTC(2022, 7, day)); // UTC Time zone YEAR, MONTH[i](June), DAYS -- date.now will give you todays date 
    // short = short format 
    var dayName = new Intl.DateTimeFormat("en-US", { weekday: "short" }).format(date);
    return dayName
}

for (let day = 1; day <= 31; day++){
    // console.log(day)
    const weekend = isWeekend(day);

    var insertName = " ";
    if (day <= 7){
        var nameDays = getDayName(day);
        insertName = `<div class= "names">${nameDays}</div>`;
    }
    calendar.insertAdjacentHTML("beforeend", `<div 
    class= "day ${weekend ? "weekend" : ""}">${insertName}${day}</div>`);
    
}

// Add Click Event to all days, add class .selected
document.querySelectorAll(".app-calendar .day").forEach
(day => {
    console.log(day)
    day.addEventListener("click", function(event) {
        event.currentTarget.classList.toggle("selected");
    });
});

