{
	const arr = [5, 1, 3, 2, 6];

	// Double - [10, 2, 6, 4, 12]

	// Triple - [15, 3, 9, 6, 18]

	// Binary - ["101", "1", "11", "10", "110"]

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
}
