// let User request metric of temperature to convert from
let convertFrom = prompt(
  " In which metric is the temperature you are converting? \n" +
    "C - Celsius \n" +
    "F - Fahrenheit \n" +
    "K - Kelvin"
);

convertFrom = convertFrom.toUpperCase();

// Let user input number they would like to convert

let temperature = prompt("Enter the number in which you would like to convert");

let temp = parseInt(temperature);

// let user input metric of temperature to convert to
let convertTo = prompt(
  " To which metric would you like to convert the temperature to \n" +
    "C - Celsius \n" +
    "F - Fahrenheit \n" +
    "K - Kelvin"
);

convertTo = convertTo.toUpperCase();

var fahToCel = ((temp - 32) * 5) / 9; //  Fahrenheit to celsius fomula
var celToKel = temp - 273.15; // celcius to kelvin fomular

var celToFah = (temp * 9) / 5 + 32; //fahrenheit To Celsius fomular
var kelToFah = (temp * 9) / 5 - 459.67; //fahrenheit To Kelvin fomular

var kelToCel = temp + 273.15; // kelvin To Celsius fomular
var kelToFah = ((temp + 459.67) * 5) / 9; //kelvin To Fahrenheit fomular

// conversion of user request to user input calculation

if (convertFrom == "F" && convertTo == "C") {
  console.log(fahToCel + "C");
} else if (convertFrom == "C" && convertTo == "K") {
  console.log(celToKel + "K");
} else if (convertFrom == "C" && convertTo == "F") {
  console.log(celToFah + "F");
} else if (convertFrom == "K" && convertTo == "F") {
  console.log(kelToFah + "F");
} else if (convertFrom == "K" && convertTo == "C") {
  console.log(kelToCel + "C");
} else if (convertFrom == "K" && convertTo == "F") {
  console.log(kelToFah + "F");
}
