/**
* Написать функцию sostavChisla(massivChisel: number[], chislo: number), 
  которая бы находила все возможные комбинации чисел из massivChisel, 
  сумма которых равна chislo. При этом:
  1) massivChisel содержит, только уникальные положительные числа (> 0)
  2) в комбинации не должно быть повторений чисел
  3) все комбинации должны быть уникальными
  
  Для проверки работоспособности функции запустить runTests()
  
  @param massivChisel: number[]
  @param chislo: number[]
  @return Array<Array<number>>
*/

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
    let count = 0

    for (let i = 0; i < massivChisel.length; i++) {
        count++

        littleArray.push(massivChisel[i])

        console.log(count, littleArray)

        littleArray.forEach(element => {
            sum += element
        })

        if (sum === chislo) {
            console.log(littleArray)
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
                    if (littleArray[littleArray.length - 2] === massivChisel[massivChisel.length - 2]) {
                        i = massivChisel.indexOf(littleArray[0])
                        littleArray = []
                    }
                    else {
                        i = massivChisel.indexOf(littleArray[littleArray.length - 2])
                        littleArray = littleArray.slice(0, 1)
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

console.log(sostavChisla([7, 8, 3, 4, 5, 6, 1, 2], 15));
// [8, 7, 6, 5, 4, 3, 2, 1]
// (0, 1, 2, 3, 4, 5, 6, 7)
// function sostavChisla(massivChisel, chislo) {

//     function SortForNumbersAndRevers(a, b) {
//         if (a < b) return 1;
//         if (a == b) return 0;
//         if (a > b) return -1;
//     }

//     massivChisel.sort(SortForNumbersAndRevers)
//     const result = []
//     let littleArray = []
//     let sum = 0
//     let count = 0
//     // console.log(massivChisel)
//     // [8, 7, 6, 5, 4, 3, 2, 1]
//     // (0, 1, 2, 3, 4, 5, 6, 7)

//     for (let i = 0; i < massivChisel.length; i++) {
//         count++
//         console.log(i)

//         littleArray.push(massivChisel[i])

//         if (result.map(x => String(x) === String(littleArray)).includes(true)) {
//             i = massivChisel.indexOf(littleArray[1])
//             littleArray = littleArray.slice(0, 1)
//         } else {
//             littleArray.forEach(element => {
//                 sum += element
//             })

//             if (sum > chislo) {
//                 littleArray.pop()
//             }

//             if (sum < chislo && i === (massivChisel.length - 1)) {
//                 i = massivChisel.indexOf(littleArray[0])
//                 littleArray = []
//                 // console.log('i стал', i)
//             }

//             if (sum === chislo) {
//                 result.push(littleArray)
//                 if (i === 0) {
//                     i = massivChisel.indexOf(littleArray[0])
//                     // console.log('1', 'result', result, 'littleArray', littleArray, 'i', i)
//                     littleArray = []
//                     console.log(i)
//                 } else if (i === (massivChisel.length - 1)) {
//                     i = massivChisel.indexOf(littleArray[littleArray.length - 2])
//                     littleArray = littleArray.slice(0, littleArray.length - 2)
//                     console.log(i)
//                 } else {
//                     i = massivChisel.indexOf(littleArray[0]) - 1
//                     // console.log('2', 'result', result, 'littleArray', littleArray, 'i', i)
//                     littleArray = []
//                     console.log(i)
//                 }
//             }
//             console.log(i)
//         }
//         // console.log('3', 'result', result, 'littleArray', littleArray, 'i', i)
//         sum = 0
//     }

//     console.log('Операций:', count)
//     return result
// }

// console.log(sostavChisla([7, 8, 3, 4, 5, 6, 1, 2], 15));


// function sostavChisla(massivChisel, chislo) {
//     massivChisel.sort().reverse()
//     const result = []
//     let littleArray = []
//     let sum = 0

//     for (let i = 0; i < massivChisel.length - 1; i++) {
//         littleArray.push(massivChisel[i])
//         if (result.map(x => String(x) === String(littleArray)).includes(true)) {
//             // console.log('x', result.map(x => String(x) === String(littleArray)).includes(true))
//             // console.log('зашли', littleArray)
//             if (littleArray.length === 1 || littleArray.length === 2) {
//                 littleArray.pop()
//             } else {
//                 littleArray = [littleArray[0]]
//                 i = massivChisel.indexOf(littleArray[0])
//                 console.log('зашли', littleArray)
//             }

//         } else {
//             // console.log('не зашли', littleArray)
//             littleArray.forEach(element => {
//                 sum += element
//             })
//             if (sum > chislo) {
//                 littleArray.pop()
//             }
//             if (sum === chislo) {
//                 result.push(littleArray)
//                 i = massivChisel.indexOf(littleArray[0])
//                 if (i != 0 || i != (massivChisel.length - 1)) {
//                     i = massivChisel.indexOf(littleArray[0]) - 1
//                     // console.log('зашли и поменяли i ', i)
//                 }
//                 littleArray = []
//             }
//             sum = 0
//         }

//     }
//     return result
// }

// console.log(sostavChisla([8, 5, 4, 3, 2, 1, 0], 8));
// console.log(sostavChisla([8, 2, 3, 4, 6, 7, 1], 15));

// function sostavChisla(massivChisel, chislo) {

//     const obj = {}
//     const result = []

//     massivChisel.forEach(element => {
//         const pair = chislo - element
//         obj[element] = pair

//         const isPairFound = obj.hasOwnProperty(pair)

//         if (isPairFound) {
//             result.push([element, pair])
//         }

//         if (element === chislo) {
//             result.push([element])
//         }

//     });
//     return result

// }

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

