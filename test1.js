let count = 0
const startTime = performance.now()

console.log(sostavChisla([8, 2, 3, 4, 6, 7, 1, 5, 12, 34, 13, 16, 15, 19, 21, 22, 35, 27, 51, 40], 50));

const endTime = performance.now()
const fullTime = endTime - startTime
console.log('Время выполнения: ', fullTime.toFixed(1), 'ms')
console.log('Количество операций: ', count)


function sostavChisla(massivChisel, chislo) {

    function SortForNumbersAndRevers(a, b) {
        if (a < b) return 1;
        if (a == b) return 0;
        if (a > b) return -1;
    }

    massivChisel.sort(SortForNumbersAndRevers)
    const result = []
    let littleArray = []
    let sum = 0

    for (let i = 0; i < massivChisel.length; i++) {
        count++

        littleArray.push(massivChisel[i])

        littleArray.forEach(element => {
            sum += element
        })

        if (sum === chislo) {
            if (i === massivChisel.length - 1) {
                result.push(Array.from(littleArray))
                i = massivChisel.indexOf(littleArray[littleArray.length - 2])
                littleArray = littleArray.slice(0, littleArray.length - 2)
            }
            else {
                result.push(Array.from(littleArray))
                i = massivChisel.indexOf(littleArray[littleArray.length - 1])
                littleArray.pop()
            }
        }

        if (sum != chislo) {
            if (sum < chislo) {
                if (i === massivChisel.length - 1) {
                    if (littleArray.length === 2) {
                        i = massivChisel.indexOf(littleArray[0])
                        littleArray = []
                    }
                    else if (littleArray.length === 1 && littleArray[0] === massivChisel[massivChisel.length - 1]) {
                        return result
                    }
                    else {
                        i = massivChisel.indexOf(littleArray[littleArray.length - 2])
                        littleArray = littleArray.slice(0, littleArray.length - 2)
                    }
                }
            }
            if (sum > chislo) {
                littleArray.pop()
                if (i === massivChisel.length) {
                    i = massivChisel.indexOf(littleArray[0])
                    littleArray = []
                }
            }
        }

        sum = 0
    }

    return result
}



// function compareNumericArrays(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     arr1 = [...arr1].sort();
//     arr2 = [...arr2].sort();

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false;
//         }
//     }

//     return true;
// }

// function compareArraysOfNumericArrays(arr1, arr2) {
//     if (arr1.length !== arr2.length) {
//         return false;
//     }

//     for (let el1 of arr1) {
//         if (arr2.findIndex(el2 => compareNumericArrays(el1, el2)) < 0) {
//             return false;
//         }
//     }

//     return true;
// }

// runTests();

// function runTests() {
//     const tests = [
//         {
//             chislo: 5,
//             massivChisel: [8, 2, 3, 4, 6, 7, 1],
//             result: [[2, 3], [4, 1]]
//         },
//         {
//             chislo: 99,
//             massivChisel: [8, 2, 3, 4, 6, 7, 1],
//             result: []
//         },
//         {
//             chislo: 8,
//             massivChisel: [1, 2, 3, 4, 5, 6, 7, 8],
//             result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
//         },
//         {
//             chislo: 8,
//             massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
//             result: [[1, 3, 4], [1, 2, 5], [3, 5], [2, 6], [1, 7], [8]]
//         },
//         {
//             chislo: 15,
//             massivChisel: [7, 8, 3, 4, 5, 6, 1, 2],
//             result: [[1, 2, 3, 4, 5], [2, 3, 4, 6], [1, 3, 5, 6], [4, 5, 6], [1, 3, 4, 7], [1, 2, 5, 7], [3, 5, 7], [2, 6, 7], [1, 2, 4, 8], [3, 4, 8], [2, 5, 8], [1, 6, 8], [7, 8]]
//         },

//     ];

//     let errors = 0;
//     for (const test of tests) {
//         let result;
//         try {
//             result = sostavChisla(test.massivChisel, test.chislo);

//             if (!compareArraysOfNumericArrays(
//                 result,
//                 test.result)
//             ) {
//                 errors++;
//                 console.log('--------------------------------------------')
//                 console.log("failed for test", test, "Got result", result);
//             }
//         } catch (e) {
//             errors++;
//             console.log("failed for", test, 'exception', e.message);
//         }
//     }

//     if (errors === 0) {
//         console.log('checkStringForBracects test successfuly completed');
//     } else {
//         console.log(`checkStringForBracects test failed with ${errors} errors`);
//     }
// }

