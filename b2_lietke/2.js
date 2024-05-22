//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------
const a = Array(100);
let n;

const display = (arr, n) => {
    console.log(arr.slice(1, n + 1).join(''));
}

const backtrack = (i) => {
    for (let j = 1; j >= 0; j--) {
        a[i] = j;
        if (i === n) display(a, n);
        else backtrack(i + 1);
    }
}


const main = () => {
    const array = input.trim().split('\n');
    n = Number(array[0]);
    if (n === 0) return;
    backtrack(1);
}