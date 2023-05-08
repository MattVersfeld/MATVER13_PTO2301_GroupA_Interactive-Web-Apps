// IWA7 Challenge 1;

const value = "3"
console.log(parseInt(value) + 4 + parseInt(value))
/*
*Reason is that if you add strings and numbers together it will concatinate into a string
*turn strings into numbers using parseInt();
*/



// IWA7 Challenge 2;
const nickname = "Timmy";
const firstname = "Timothy";
const user = nickname || firstname || ''
if (user) {
    console.log(`Good Morning, ${user}!`)
} else {
    console.log('Good Morning!')
}

/*
*have to use back ticks to use template literal
*created a new const 'user' to clean up code
*created if statement with else value for no space and preserve comma
*/




// IWA7 Challenge 3
const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------'

// Only change below this line

const leoCalc = parseFloat(leoBalance * -1)
const sarahCalc = parseFloat(sarahBalance * -1)

const owed = (leoCalc + sarahCalc).toFixed(2) // accuracy will be of 2 decimal places
const leo = `${leoName} ${leoSurname.trim()} (Owed: R ${leoCalc.toFixed(2)})`
const sarah = `${sarahName.trim()} ${sarahSurname} (Owed: R ${sarahCalc.toFixed(2)})`
const total = "Total amount owed: "
const result = `${leo} \n${sarah} \n\n${divider} \n  ${total} ${owed}   \n${divider}`

console.log(result)

/*
*Created new variables that calculates leo & sarah's balances and made them positive
* Decimals been restricted to 2 places 
* Trimmed leoSurname & sarahName of blank spaces
* corrected result with new lines
*/