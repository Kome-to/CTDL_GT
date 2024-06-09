//-----------------------IGNORE-----------------------
let input = ""; process.stdin.on("data", function (chunk) { input += chunk; }); process.stdin.on("end", function () { main(input) });
//----------------------------------------------------


// -----------------------CODE-----------------------

const quickSoft = (arr, l, r) => {
    let pivot = Math.floor((r + l - 1) / 2);

    let i = l;
    let j = r - 1;

    while (i < pivot && j > pivot) {

        if (arr[i] < arr[pivot] && arr[j] >= arr[pivot]) {

            const tmp = arr[i];
            arr[i] = arr[j];
            arr[j] = tmp;
            i++;
            j--;

        }

        if (arr[i] >= arr[pivot]) {
            i++;
        }

        if (arr[j] < arr[pivot]) {
            j--;
        }

    }

    while (i < pivot) {
        if (arr[i] < arr[pivot]) {
            const tmp = arr[i];
            for (let j = i; j < pivot; j++) {
                arr[j] = arr[j + 1];

            }
            arr[pivot] = tmp;

            pivot--;
        } else {
            i++;
        }
    }

    while (j > pivot) {
        if (arr[j] >= arr[pivot]) {
            const tmp = arr[j];
            for (let k = j; k > pivot; k--) {
                arr[k] = arr[k - 1];

            }
            arr[pivot] = tmp;
            pivot++;

        } else {
            j--;
        }
    }

    // Array > 2 items
    if (l < pivot - 1) {
        quickSoft(arr, l, pivot);
    }
    if (pivot + 1 < r - 1) {
        quickSoft(arr, pivot + 1, r);
    }

}

const main = () => {
    const array = input.trim().split('\n');
    n = Number(array[0]);
    const line2 = array[1];
    const numbers = line2.trim().split(' ').slice(0, n).map(i => Number(i.trim()));

    quickSoft(numbers, 0, numbers.length);
    console.log(`${numbers.join(' ')} `);
}