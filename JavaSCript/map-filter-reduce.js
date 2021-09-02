// for basic example
// const arr = [5, 1, 3, 2, 6, 0];
{
	//^ map: to transform an array (mapping one to one value)
	// Double - [10, 2, 6, 4, 12]
	// Triple - [15, 3, 9, 6, 18]
	// Binary - ["101", "1", "11", "10", "110"]
	/*
	function double(x) {
		return x * 2;
	}

	function triple(x) {
		return x * 3;
	}

	function binary(x) {
		return x.toString(2);
	}

	const output = arr.map(binary);

	console.log(output);

	const output2 = arr.map(function binary(x) {
		return x.toString(2);
	});

	console.log(output2);

	const output3 = arr.map((x) => x.toString(2));

	console.log(output3);
*/
}

{
	//^ filter: to filter inside an array
	/*
	// filter odd values

	function isOdd(x) {
		console.log(x % 2);
		return x % 2;
	}

	const output = arr.filter(isOdd);

	// filter even values
	function isEven(x) {
		return x % 2 === 0;
	}

	const output2 = arr.filter(isEven);

	// filter grater than 4
	function graterThan4(x) {
		return x > 4;
	}

	const output3 = arr.filter(graterThan4);

	console.log(output);
	console.log(output2);
	console.log(output3);

	const output4 = arr.filter(function graterThan4(x) {
		return x > 4;
	});
	console.log(output4);

	const output5 = arr.filter((x) => x > 4);
	console.log(output5);

	const output6 = arr
		.map((x) => x * 2) //
		.filter((x) => x > 4);
	console.log(output6);
	*/
}

{
	//^ reduce: it does not reduce anything
	//^ but use it to take all of the elements of an array and come up with a single value of them
	/*
	// sum or max

	function findSum(arr) {
		let sum = 0;
		for (let i = 0; i < arr.length; i++) {
			sum = sum + arr[i];
		}
		return sum;
	}

	console.log(findSum(arr));

	const output = arr.reduce(function (acc, curr) {
		acc = acc + curr;
		return acc;
	}, 0);

	console.log(output);

	function findMax(arr) {
		let max = 0;
		for (let i = 0; i < arr.length; i++) {
			if (arr[i] > max) {
				max = arr[i];
			}
		}
		return max;
	}

	const output2 = arr.reduce(function (max, curr) {
		if (curr > max) {
			max = curr;
		}
		return max;
	}, 0);
	console.log(output2);

	// tried on my own before seeing other example
	const output1 = arr.reduce((acc, curr) => (curr > acc ? curr : acc), 0);

	console.log(findMax(arr));
	console.log(output1);
 */
}

// for real world example
const users = [
	{ firstName: 'John', lastName: 'Mac', age: 55 },
	{ firstName: 'Jane', lastName: 'Apple', age: 75 },
	{ firstName: 'Sonsy', lastName: 'Jo', age: 23 },
	{ firstName: 'Mike', lastName: 'Tyson', age: 55 },
	{ firstName: 'Young', lastName: 'Guy', age: 25 },
];

// // list of full names
// const fullNames = users.map((user) => `${user.firstName} ${user.lastName}`);

// console.log(fullNames);

// // how many people have particular age?
// // { 55: 2, 75: 1, 23: 1, 25: 1 }
// const output = users.reduce((acc, curr) => {
// 	if (acc[curr.age]) {
// 		acc[curr.age] = ++acc[curr.age];
// 	} else {
// 		acc[curr.age] = 1;
// 	}
// 	return acc;
// }, {});

// console.log(output);

const ageLimit = 30;
const result = users //
	.filter((user) => user.age < ageLimit)
	.map((user) => user.firstName);

console.log(result);

const result2 = users.reduce((acc, curr) => {
	if (curr.age < ageLimit) {
		acc.push(curr.firstName);
	}
	return acc;
}, []);

console.log(result2);
