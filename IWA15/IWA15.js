//IWA15 Challenge 1
// scripts.js

const data = {
	lists: [
		['first', [15, 11, 13, 7, 5]],
		['second', [2, 6, 8, 4, 14, 12, 10]],
		['third', [9, 3, 1]],
	]
}

// Only edit below

const { lists: [[, array1], [, array2], [, array3]] } = data
console.log(array1)
console.log(array2)
console.log(array3)

const result = []

function arrayLength(array) {
	return array.length ? array[array.length - 1] : 0;
};

const extractBiggest = () => {
	let lastNum1 = arrayLength(array1)
	let lastNum2 = arrayLength(array2)
	let lastNum3 = arrayLength(array3)

	if (lastNum1 > lastNum2 && lastNum1 > lastNum3) {
		return array1.pop()
	}
	if (lastNum2 > lastNum1 && lastNum2 > lastNum3) {
		return array2.pop()
	}
	if (lastNum3 > lastNum1 && lastNum3 > lastNum2) {
		return array3.pop()
	}
}

// Only edit above
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())
result.push(extractBiggest())

console.log(result)