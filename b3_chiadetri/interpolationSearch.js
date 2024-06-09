//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------

const mergeArray = (arr, l, m, r) => {
    const arr1 = arr.slice(l, m);
    const arr2 = arr.slice(m, r);

    let arrIndex = l;
    let arr2Index = 0;

    for (let i = 0; i < arr1.length; i++) {
        if (arr2Index >= arr2.length) {
            for (let j = i; j < arr1.length; j++) {
                arr[arrIndex] = arr1[j];
                arrIndex++;
            }
            break;
        }
        while (arr2Index < arr2.length && arr2[arr2Index] > arr1[i]) {
            arr[arrIndex] = arr2[arr2Index];
            arr2Index++;
            arrIndex++;
        }

        arr[arrIndex] = arr1[i];
        arrIndex++;
    }

    // Put rest of arr2 to arr 
    if (arr2Index < arr2.length) {
        for (let i = arr2Index; i < arr2.length; i++) {
            arr[arrIndex] = arr2[i];
            arrIndex++;
        }
    }
    return arr;
}

const mergeSoft = (arr, l, r) => {
    if (r - l < 2) return;
    const k = Math.floor((r + l) / 2);
    mergeSoft(arr, l, k);
    mergeSoft(arr, k, r);
    mergeArray(arr, l, k, r);

    return;
}


// Interpolation Formula 
//  ----------------------------------------------------------------
// |                    (key - arr[low]) * (hight - low)            |
// |    pos = low + ------------------------------------------      |
// |                         arr[hight] - arr[low]                  |
//  ----------------------------------------------------------------

const interpolationFormula = (arr, key, low, hight) => {
    return low + Math.floor((((key - arr[low]) * (hight - low)) / (arr[hight] - arr[low])));
}

const interpolationSearch = (arr, key) => {
    let low = 0;
    let hight = arr.length - 1;

    let pos;

    while (low <= hight && key >= arr[low] && key <= arr[hight]) {
        if (low === hight) {
            if (arr[low] === key) return low;
            return -1;
        }

        pos = interpolationFormula(arr, key, low, hight);

        if (arr[pos] === key) return pos;
        if (arr[pos] < key) {
            low = pos + 1;
        } else {
            hight = pos - 1;
        }
    }
    return -1;
}


const main = () => {
    const array = input.trim().split('\n');
    n = Number(array[0]);
    const line2 = array[1];
    const numbers = line2.trim().split(' ').slice(0, n).map(i => Number(i.trim()));
    mergeSoft(numbers, 0, numbers.length);
    const amountSearch = Number(array[2]);
    console.log(`${numbers.reverse().join(' ')} `);
    const searchNumbers = array.slice(3, amountSearch + 3).map(i => Number(i.trim())).filter(i => !Number.isNaN(i));

    searchNumbers.forEach((number) => {
        const index = interpolationSearch(numbers, number);
        console.log(index);
    })
}