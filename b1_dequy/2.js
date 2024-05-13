//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------

const display = (number, maxDigit) => {
    console.log(`${number}: ${maxDigit}`);
}

const maxDigit = (number) => {
    if (number < 10) return number;
    else {
        const lastDigit = number % 10;
        const maxDigitInRest = maxDigit(Math.floor(number / 10))
        return Math.max(lastDigit, maxDigitInRest)
    }
}

const main = () => {
    const array = input.trim().split('\n');
    const [n, ...numbers] = array;
    for (let i = 0; i < n; i++) {
        const number = numbers[i];
        const max = maxDigit(number);
        display(number, max);
    }
}