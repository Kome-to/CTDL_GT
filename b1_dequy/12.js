//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------

const isNegativeArray = (arr) => {
    if (arr.length < 1) return "Yes";
    const [first, ...rest] = arr;
    if (first >= 0) return "No";
    return isNegativeArray(rest);
}

const main = () => {
    const array = input.trim().split('\n').map(item => item.trim());
    const [firstLine, ...restLines] = array;
    for (let i = 0; i < firstLine * 2; i += 2) {
        const n = restLines[i];
        const arr = restLines[i + 1].split(' ').map(item => Number(item)).slice(0, n);
        const result = isNegativeArray(arr)
        console.log(result);
    }
}