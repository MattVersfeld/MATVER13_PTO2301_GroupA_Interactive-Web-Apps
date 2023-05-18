const currentYear = new Date().getFullYear()

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
}

const christmas = 6
const futureId = 9

// Do not change code above this comment

if (holidays[futureId]) {
    console.log(`${holidays['9'].name} `);
} else {
    console.log(`ID ${futureId} not created yet`);
}

const copied = Object.assign({}, holidays['6']);
// console.log(copied)
copied.name = 'X-mas Day'
// console.log(copied.name)
// console.log(holidays['6'].name)
const correctDate = new Date(`25 December ${currentYear}`)
console.log(correctDate)
// console.log(correctDate)
// console.log(holidays['6'].date)
let isEarlier = correctDate < holidays[6].date
console.log('New date is earlier:', isEarlier)
// console.log(copied)

if (isEarlier) {
    copied.date = correctDate
}
// console.log(copied.date)
// console.log(holidays['6'].date)

console.log('ID change:', holidays['6'].id != copied.id && copied.id)
console.log('ID change:', holidays['6'].name != copied.name && copied.name)
console.log('ID change:', holidays['6'].date != copied.date && copied.date.toLocaleDateString('en-GB'))

const firstHolidayTimestamp = Math.min(
    Date.parse(holidays[0].date),
    Date.parse(holidays[1].date),
    Date.parse(holidays[2].date),
    Date.parse(holidays[3].date),
    Date.parse(holidays[4].date),
    Date.parse(holidays[5].date),
    Date.parse(holidays[6].date),
    Date.parse(holidays[7].date),
    Date.parse(holidays[8].date),
)

const lastHolidayTimestamp = Math.max(
    Date.parse(holidays[0].date),
    Date.parse(holidays[1].date),
    Date.parse(holidays[2].date),
    Date.parse(holidays[3].date),
    Date.parse(holidays[4].date),
    Date.parse(holidays[5].date),
    Date.parse(holidays[6].date),
    Date.parse(holidays[7].date),
    Date.parse(holidays[8].date),
)

// console.log(firstHolidayTimestamp)
// console.log(lastHolidayTimestamp)

const dateCalcMin = new Date(firstHolidayTimestamp)
const dateCalcMax = new Date(lastHolidayTimestamp)
// console.log(new Date (firstHolidayTimestamp))
const firstDay = dateCalcMin.getDate().toString()
const firstMonth = dateCalcMin.getMonth().toString()
const lastDay = dateCalcMax.getDate().toString()
const lastMonth = dateCalcMax.getMonth().toString()

// console.log(typeof((firstMonth)))
console.log(`${firstDay.padStart(2, "0")}/${(firstMonth + 1)}/${currentYear}`)
console.log(`${lastDay}/${lastMonth}/${currentYear}`)

const randomCalc = Math.floor(Math.random(holidays['']) * 9)
// console.log(randomCalc)
const randomTimeStamp = Date.parse(holidays[randomCalc].date)
// console.log(randomTimeStamp)
const randomTimeStampCalc = new Date(randomTimeStamp)
const randomDay = randomTimeStampCalc.getDate().toString()
const randomMonth = randomTimeStampCalc.getMonth().toString()
console.log(`${randomDay.padStart(2, "0")}/${randomMonth.padStart(2, "0")}/${currentYear}`)