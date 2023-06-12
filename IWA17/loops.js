// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let i = 0; i < length; i++) {
        result.push(i)
    }

    return result
}

const createData = () => {
    const current = new Date()
    current.setDate(1)

    const startDay = current.getDay()
    const daysInMonth = getDaysInMonth(current)

    const weeks = createArray(5)
    const days = createArray(7)
    const result = []
    let day = ''
    for (const weekIndex of weeks) {
        result.push({
            week: weekIndex + 1,
            days: []
        })

        for (const dayIndex of days) {

            if (dayIndex != startDay && day == '') {
                day = ''
            } else {
                day++
            }
            let isValid = day > 0 && day <= daysInMonth

            result[weekIndex].days.push({
                dayOfWeek: dayIndex + 1,
                value: isValid ? day : ''
            })
        }
    }


    return result
}

const addCell = (existing, classString, value) => {
    const result = /* html */ `
        ${existing}
        <td class="${classString}">
            &nbsp;${value}&nbsp;
        </td>
    `

    return result
}

const createHtml = (data) => {
    let result = ''

    for (const element of data) {
        let inner = ''
        const daysArray = element.days
        console.log(element.days)

        inner = addCell(inner, 'table__cell table__cell_sidebar', `Week ${element.week}`)

        for (const elementDays of daysArray) {
            const { dayOfWeek, value } = elementDays
            const isToday = new Date().getDate() === value
            const isWeekend = dayOfWeek === 1 | dayOfWeek === 7
            const isAlternate = element.week % 2 === 0

            let classString = 'table__cell'

            if (isToday) classString += ` table__cell_today`
            if (isWeekend) classString += ` table__cell_weekend`
            if (isAlternate) classString += ` table__cell_alternate`
            inner = addCell(inner, classString, value)

        }
        result = `
            ${result}
            <tr>${inner}</tr>
        `
    }

    return result
}

// Only edit above

const current = new Date()
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

const data = createData()
console.log(data)
document.querySelector('[data-content]').innerHTML = createHtml(data)