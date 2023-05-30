// IWA14 Challenge 1

const firstName = 'John';
const age = 35;
const mainHobby = 'Coding';

const logTwice = (string) => {
    console.log(string)
    console.log(string)
}

function hobby() {
    logTwice(`Hello, ${firstName} (${age}). I love ${mainHobby}!`)
}

hobby()