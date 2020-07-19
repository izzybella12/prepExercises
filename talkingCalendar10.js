// YYYY/MM/DD

const talkingCalendar = function(date) {

  let months = {
    01: "January", 
    02: "Febryary", 
    03: "March", 
    04: "April", 
    05: "May", 
    06: "June", 
    07: "July", 
    08: "August", 
    09: "September", 
    10: "October", 
    11: "November", 
    12: "December"
  };

  let writtenDate = "";
  let month; 
  let splitDate = date.split("");
  month = splitDate[5] += splitDate[6]
  writtenDate += months[Number(month)]
  console.log(writtenDate);

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

