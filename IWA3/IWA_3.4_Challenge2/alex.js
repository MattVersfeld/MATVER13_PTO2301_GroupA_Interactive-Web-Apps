// alex.js

const firstname = "Alex" //private info
const surname = "Naidoo" //private info
export const role = "Head of Marketing" //public info

const display = firstname + " " + surname + " (" + role + ")"
document.querySelector('#alex').innerText = display