var isDate = function (input) {
  // If the input is a date object or a string that can be parsed into a valid date, return true.
  if (Object.prototype.toString.call(input) === "[object Date]") {
    return !isNaN(input.getTime()); // Check if it's a valid date object.
  }

  if (typeof input === "string" || typeof input === "number") {
    // Attempt to parse the input into a date.
    const parsedDate = new Date(input);
    return !isNaN(parsedDate.getTime()); // Check if it's a valid date string or timestamp.
  }

  // If none of the above conditions are met, return false.
  return false;
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
