//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------
const a = Array(100);
let n;
let numbers;

const display = (arr) => {
    console.log(' ' + arr.slice(1, n + 1).join(' '));
}

const isValid = (value, index) => {
    for (let i = 1; i < index; i++) {
        if (a[i] === value) return false
    }
    return true
}

const backtrack = (i) => {
    for (let j = 1; j <= n; j++) {
        const currentValue = numbers[j - 1]
        if (isValid(currentValue, i)) {
            a[i] = currentValue;
            if (i === n) display(a);
            else backtrack(i + 1);
        }
    }
}

const main = () => {
    const array = input.trim().split('\n');
    n = Number(array[0]);
    const arr = array[1].trim().split(' ').map(i => Number(i)).slice(0, n);
    numbers = arr.sort((a, b) => a - b)

    backtrack(1);
}