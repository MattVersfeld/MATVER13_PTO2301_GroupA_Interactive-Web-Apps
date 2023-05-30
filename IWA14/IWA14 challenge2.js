// IWA14 challenge 2
// script.js

const add = (x, y) => x + y

const multiply = (x, y) => x * y

function internal() {
    const added = add(this.internal.a, this.internal.b)
    const multiplied = multiply(added, this.internal.c)
    return added, multiplied
}
// Not allowed to change below this

const example1 = {
    internal: {
        a: 2,
        b: 4,
        c: 8,
    },
    add,
    multiply,
    calculate: internal
}

const example2 = {
    internal: {
        a: 2,
        b: 2,
        c: 3,
    },
    add,
    multiply,
    calculate: internal
}

console.log(example1.calculate())
console.log(example2.calculate())