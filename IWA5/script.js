const FREE_WARNING = 'Free shipping only applies to single customer orders'
const BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
const NONE_SELECTED = '0'

// customer ordering;
let customers = 1;
let location = 'RSA';
let shipping = null;
let currency = null;

//Shopping List for customer;
let shoes = 300 * 1;
let toys = 100 * 5;
let shirts = 150 * NONE_SELECTED;
let batteries = 35 * 2;
let pens = 5 * NONE_SELECTED;

const checkOut = (shoes + toys + shirts + batteries + pens);

if (location === 'RSA') {
    shipping = 400;
    currency = 'R';
} else if (location === 'NAM') {
    shipping = 600;
    currency = '$';
} else if (location === 'NK') {
    console.log(BANNED_WARNIN);
} else {
    shipping = 800;
    currency = '$';
}

if (checkOut >= 1000 && currency === 'R' && location === 'RSA' || checkOut >= 60 && currency === '$' && location === 'NAM') {
    shipping = 0;
}

if (customers !== 1 && shipping === 0) {
    console.log(FREE_WARNING);
} else {
    console.log('Price', currency, checkOut + shipping);
}


// FREE_WARNING = 'Free shipping only applies to single customer orders'
// BANNED_WARNIN = 'Unfortunately we do not ship to your country of residence'
// NONE_SELECTED = '0'

// if (location = RSA) { shipping === 400 && currency === 'R' }

// if location = NAM
// shipping = 600
// else shipping = 800

// shoes = 300 * 1
// toys - 100 * 5
// shirts = 150 * 'NONE_SELECTED'
// batteries 35 * 2
// pens = 5 * 'NONE_SELECTED'

// shipping = null
// currency = $

// if (shoes + batteries + pens + shirts > 1000 &&  ) {
//     if (location = NAM && customers < 2) {
//         if (location = RSA)
//             shipping = 0 || calcShipping
//     }
// }
// }

// if (shipping = 0) && (customers !=== 1) { console.log(WARNING) }

// location = 'NK' ? console.log(WARNING) : console.log('price', currency, shoes + batteries + pens + shirts + shipping)

// customers = '1'
// const location = 'RSA'
// currency = null