// if/else statement

// operator
/*
= betyr å erklære noe
== betyr samme verdi (lite brukt)
=== betyr samme verdi og samme datatype

< betyr mindre enn (less than)
> betyr større enn ( more than)

&& betyr og(and)
|| betyr eller (or)
*/

const hour = 20;

// Sjekker om klokken er mindre enn 12
if (hour < 12) {
    console.log ("Good morning")
} else if (hour === 12) {
    // Sjekker om klokken er akkurat 12
console.log (" The clock is 12!")
} else if (hour > 14 && hour < 18) {
    // sSjekker om klokken er mellom 14 og 18.
    console.log("The clock is between 14 and 18")
}else {
    // Tidspunkt som ikke passer før 12 eller akkurat 12
    console.log ("Good day!")
};

// 
// 

// En enkel kalkulator / Simple Calculator
const calculator = document.querySelector
("#calculator");
console.log(calculator);

calculator.addEventListener("click", function() {
    const calculatorValue = document.querySelector
    ("#calculator").value;
    console.log(calculatorValue)
 

const number1 = document.querySelector("#number1").value;
const number2 = document.querySelector("#number2").value;
let sum;

if (calculatorValue ==="addition") {
    sum = number1 + number2
    console.log (sum)
} else if (calculatorValue==="subtraction") {
    sum = number1 - number2
    console.log(sum)
} else if (calculatorValue==="multiplication") {
    sum = number1 * number2
    console.log(sum)
} else if (calculatorValue==="division"){
    sum = number1 / number2
    console.log(sum)
} else {
    sum = "Kan ikke kalkulere"
    console.log(sum)
}
})
