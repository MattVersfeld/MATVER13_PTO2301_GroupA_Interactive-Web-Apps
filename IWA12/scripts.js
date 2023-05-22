// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

//book 1 - A Good Book
const book1 = document.querySelector('#book1')
const status1 = book1.querySelector('.status')
let reserve1 = book1.querySelector('.reserve')
let checkOut1 = book1.querySelector('.checkout')
let checkIn1 = book1.querySelector('.checkin')
// console.log(book1, status1, reserve1, checkOut1, checkIn1)

checkIn1.style = ''
status1.style.color = STATUS_MAP[status1.textContent].color
reserve1 = (STATUS_MAP[status1.textContent].canReserve) ? reserve1.disabled = false : reserve1.disabled = true
checkOut1 = (STATUS_MAP[status1.textContent].canCheckout) ? checkOut1.disabled = false : checkOut1.disabled = true
checkIn1 = (STATUS_MAP[status1.textContent].canCheckIn) ? checkIn1.disabled = false : checkIn1.disabled = true


//Book 2 - The Book of Books
const book2 = document.querySelector('#book2')
const status2 = book2.querySelector('.status')
let reserve2 = book2.querySelector('.reserve')
let checkOut2 = book2.querySelector('.checkout')
let checkIn2 = book2.querySelector('.checkin')
// console.log(book2, status2, reserve2, checkOut2, checkIn2)

checkIn2.style = ''
status2.style.color = STATUS_MAP[status2.textContent].color
reserve2 = (STATUS_MAP[status2.textContent].canReserve) ? reserve2.disabled = false : reserve2.disabled = true
checkOut2 = (STATUS_MAP[status2.textContent].canCheckout) ? checkOut2.disabled = false : checkOut2.disabled = true
checkIn2 = (STATUS_MAP[status2.textContent].canCheckIn) ? checkIn2.disabled = false : checkIn2.disabled = true


//Book 3 - Another Book
const book3 = document.querySelector('#book3')
const status3 = book3.querySelector('.status')
let reserve3 = book3.querySelector('.reserve')
let checkOut3 = book3.querySelector('.checkout')
let checkIn3 = book3.querySelector('.checkin')
// console.log(book3, status3, reserve3, checkOut3, checkIn3)

checkIn3.style = ''
status3.style.color = STATUS_MAP[status3.textContent].color
reserve3 = (STATUS_MAP[status3.textContent].canReserve) ? reserve3.disabled = false : reserve3.disabled = true
checkOut3 = (STATUS_MAP[status3.textContent].canCheckout) ? checkOut3.disabled = false : checkOut3.disabled = true
checkIn3 = (STATUS_MAP[status3.textContent].canCheckIn) ? checkIn3.disabled = false : checkIn3.disabled = true
