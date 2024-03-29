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
	// ^ The map() method is used to apply a function on every element in an array and then return a new array.
	/*
	const nums = [11, 12, 13, 14];

	let minus10 = [];
	for (let i = 0; i < nums.length; i++) {
		minus10[i] = nums[i] - 10;
	}
	console.log(minus10);

	const minus10v2 = nums.map((value) => value - 10);
	console.log(minus10v2);

	const newArray = nums.map((v, i) => {
		return {
			value: v,
			index: i,
		};
	});
	console.table(newArray);

	const cats = nums.map(() => 'cat');
	console.log(cats);

	const newArr = nums.map((v) => (v % 2 === 0 ? v * 2 : v));
	console.log(newArr);
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

	// ^ The filter() method creates a new array filled with all the elements of the old array that pass a certain test, provided as a function.

	const nums = [11, 12, 13, 14, 15, 16];
	let evenNums = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] % 2 === 0) {
			evenNums.push(nums[i]);
		}
	}
	console.log(evenNums);

	const evenNums2 = nums.filter((value) => value % 2 === 0);
	console.log(evenNums2);

	const data = [
		{
			country: 'Netherlands',
			population: 17122267,
		},
		{
			country: 'Germany',
			population: 83694772,
		},
		{
			country: 'United Kingdom',
			population: 67767045,
		},
		{
			country: 'Belgium',
			population: 11572813,
		},
	];

	const bigCountries = data.filter((v) => v.population > 50000000);
	console.table(bigCountries);
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

{
	// // for real world example
	// const users = [
	// 	{ firstName: 'John', lastName: 'Mac', age: 55 },
	// 	{ firstName: 'Jane', lastName: 'Apple', age: 75 },
	// 	{ firstName: 'Sonsy', lastName: 'Jo', age: 23 },
	// 	{ firstName: 'Mike', lastName: 'Tyson', age: 55 },
	// 	{ firstName: 'Young', lastName: 'Guy', age: 25 },
	// ];
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
	// const ageLimit = 30;
	// const result = users //
	// 	.filter((user) => user.age < ageLimit)
	// 	.map((user) => user.firstName);
	// console.log(result);
	// const result2 = users.reduce((acc, curr) => {
	// 	if (curr.age < ageLimit) {
	// 		acc.push(curr.firstName);
	// 	}
	// 	return acc;
	// }, []);
	// console.log(result2);
}
