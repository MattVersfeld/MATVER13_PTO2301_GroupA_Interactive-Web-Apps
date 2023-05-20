// script.js

// Order1
const root1 = document.querySelector('[data-key=order1]')
// console.log(root1)
const biscuits1 = root1.querySelector('.biscuits .count')
// console.log(biscuits1)
const donuts1 = root1.querySelector('.donuts .count')
// console.log(donuts1)
const pancakes1 = root1.querySelector('.pancakes .count')
// console.log(pancakes1)
const status1 = root1.querySelector('.status').querySelector('dd')
// console.log(status1)

biscuits1.textContent = root1.getAttribute('data-biscuits')
donuts1.textContent = root1.getAttribute('data-donuts')
pancakes1.textContent = root1.getAttribute('data-pancakes')
status1.textContent = (root1.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending')



// Order2
const root2 = document.querySelector('[data-key=order2]')
// console.log(root2)
const biscuits2 = root2.querySelector('.biscuits .count')
// console.log(biscuits2)
const donuts2 = root2.querySelector('.donuts .count')
// console.log(donuts2)
const pancakes2 = root2.querySelector('.pancakes .count')
// console.log(pancakes2)
const status2 = root2.querySelector('.status').querySelector('dd')
// console.log(status2)

biscuits2.textContent = root2.getAttribute('data-biscuits')
donuts2.textContent = root2.getAttribute('data-donuts')
pancakes2.textContent = root2.getAttribute('data-pancakes')
status2.textContent = (root2.getAttribute('data-delivered') === 'true' ? "Delivered" : "Pending")



// Order3
const root3 = document.querySelector('[data-key=order3]')
// console.log(root3)
const biscuits3 = root3.querySelector('.biscuits .count')
// console.log(biscuits3)
const donuts3 = root3.querySelector('.donuts .count')
// console.log(donuts3)
const pancakes3 = root3.querySelector('.pancakes .count')
// console.log(pancakes3)
const status3 = root3.querySelector('.status').querySelector('dd')
// console.log(status3)

biscuits3.textContent = root3.getAttribute('data-biscuits')
donuts3.textContent = root3.getAttribute('data-donuts')
pancakes3.textContent = root3.getAttribute('data-pancakes')
status3.textContent = (root3.getAttribute('data-delivered') === 'true' ? 'Delivered' : 'Pending')
