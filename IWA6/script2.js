const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 0;
const minuteOfDay = 0;

// Only change below this line

if (hourOfDay != undefined && minuteOfDay != undefined && hourOfDay === 0 && minuteOfDay === 0) {

    const taxAsDecimal = parseInt(tax.replace('%', '')) / 100;
    const startingAfterTax = salary - (salary * taxAsDecimal)
    const balance = startingAfterTax - transport - food - rent

    console.log(balance.toFixed(2))
}


