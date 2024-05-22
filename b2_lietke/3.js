//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------
const a = Array(100);
let n;

const display = (arr) => {
    console.log('  ', arr.slice(1, n + 1).join('  '));
}

const isValid = (value, index) => {
    for (let i = 1; i < index; i++) {
        if (a[i] === value) return false
    }
    return true
}

const backtrack = (i) => {
    for (let j = n; j >= 1; j--) {
        if (isValid(j, i)) {
            a[i] = j;
            if (i === n) display(a);
            else backtrack(i + 1);
        }
    }
}

const main = () => {
    const array = input.trim().split('\n');
    n = Number(array[0]);
    if (n === 0) return;
    backtrack(1);
}