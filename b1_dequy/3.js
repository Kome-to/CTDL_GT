//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------

const display = (number, count) => {
    console.log(`${number}: ${count}`);
}

const maxDigit = (number) => {
    if (number < 10) return number;
    const lastDigit = number % 10;
    const maxDigitInRest = maxDigit(Math.floor(number / 10))
    return Math.max(lastDigit, maxDigitInRest)
}

const numberOfMaxDigit = (n, max) => {
    const count = `${n}`.split(max).length - 1;
    display(n, count)
}

const main = () => {
    const array = input.trim().split('\n');
    const [n, ...numbers] = array;
    for (let i = 0; i < n; i++) {
        const number = numbers[i];
        const max = maxDigit(number);
        numberOfMaxDigit(number, max)
    }
}