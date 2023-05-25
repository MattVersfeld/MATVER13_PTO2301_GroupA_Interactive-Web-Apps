let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => {
    if (calculated === 'string') {
        calculated = parseInt(calculated)
    }
    calculated++
}


const calcUser = () => {
    logCalc()
    if (calculated > 2) {
        user = 'John'
        state = 'requesting'
    }
    if (calculated > 3) {
        state = 'idle'
    }
}


const checkUser = () => {
    if (user !== null && state === 'requesting') {
        console.log(`User: ${user} (${calculated})`)
    }
}

// // Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

