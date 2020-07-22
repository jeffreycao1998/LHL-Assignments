const calculateDayInYear = (date) => {
  const splitDate = date.split('/');
  const year = Number(splitDate[0]);
  const month = Number(splitDate[1]);
  const day = Number(splitDate[2]);

  const isLeapYear = function(year) {
    return isMultiple(year, 400) || !isMultiple(year, 100) && isMultiple(year, 4);
  }
  
  const daysInFeb = function(year) {
    if (isLeapYear(year)) {
      return 29;
    }
    return 28;
  }
  
  const DAYS_IN_MONTH = [31, daysInFeb(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const validMonth = function(month) {
    return month && month >= 1 && month <= 12;
  }

  const validDay = function(month, day) {
    return day && day >= 1 && day <= DAYS_IN_MONTH[month - 1];
  }

  const calculateDayNumber = function(month, day) {
    let dayOfYear = 0;

    for (let i = 1; i < month; i++) {
      dayOfYear += DAYS_IN_MONTH[i - 1];
    }

    dayOfYear += day;
    return dayOfYear;
  }

  if (year && validMonth(month) && validDay(month, day)) {
    console.log(date, "is day", calculateDayNumber(month, day), "of the year", year);
    return calculateDayNumber(month, day);
  } else {
    console.log("Invalid date");
  }
}

const isMultiple = function(numerator, denominator) {
  return numerator % denominator === 0;
}

console.log(calculateDayInYear("1900/3/2") === 61);
console.log(calculateDayInYear("2000/3/2") === 62);
console.log(calculateDayInYear("2012/2/29") === 60);
console.log(calculateDayInYear("2015/12/31") === 365);