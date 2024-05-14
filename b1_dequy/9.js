//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------


const countPositiveNum = (arr) => {
    if (arr.length < 1) return 0;
    const [first, ...rest] = arr;
    return first > 0 ? 1 + countPositiveNum(rest) : countPositiveNum(rest)
}

const main = () => {
    const array = input.trim().split('\n');
    const [n, arrNumber] = array;
    const numbers = arrNumber.split(' ').map(i => Number(i)).slice(0, n);
    const count = countPositiveNum(numbers)
    console.log(count);
}