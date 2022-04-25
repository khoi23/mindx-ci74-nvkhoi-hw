/**    Bai 1       */

// function reverseString(str) {
//     if (str.length == 0) return -1;
//     return str.split('').reverse().join('')
// }

// function reverseString(str) {
//     // checking
//     if (str.length == 0) return -1;

//     let newString = '';

//     for (let i = str.length-1; i >= 0; i--){
//         newString += str[i]
//     }

//     return newString;
// }

// console.log(reverseString('asfsad'));

/**    Bai 2       */
// let input = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// let result = []
// result = input.filter((e) => {
//     return result.includes(e) ? '' : result.push(e)
// })

// result.sort()
// console.log(result);

/** c2 */
// let result = input.reduce((accumulator, element) =>  {
//     if(accumulator.indexOf(element) === -1) {
//         accumulator.push(element)
//     } return accumulator
// }, [])

// result.sort()
// console.log(result);

/**    Bai 3      */
var array = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
var newArray = {};
for(var element of array){
	if(typeof newArray[element] === 'undefined' || newArray[element] === null){
		newArray[element] = 1;
	} else{
		newArray[element] +=1;
	}
}
function done(element) {
	for ( var element in newArray){
		console.log(`Values: ${element}, Count: ${newArray[element]}`);
	}
}
done(newArray)