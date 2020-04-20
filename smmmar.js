function start() {
	var numb = document.getElementById("numbers").value
	var num = numb.split(',').map(function(item) {return parseInt(item, 10);});
	document.getElementById("sorted").innerHTML = sorted(num);
	document.getElementById("mean").innerHTML = mean(num);
	document.getElementById("median").innerHTML = median(num);
	document.getElementById("mode").innerHTML = mode(num);
	document.getElementById("range").innerHTML = range(num);

}

function customSort(a, b){return a - b;}

function sorted(numbers) {
	numbers.sort(customSort);
	return numbers;
}

function mean(numbers) {
	var numbers = numbers;
	var total = 0, i;
	for (i = 0; i < numbers.length; i += 1) {
		total += numbers[i];
	}
	return total / numbers.length;
}

function median(numbers) {
	var num = numbers;
	num.sort(customSort);
	// median of [3, 5, 4, 4, 1, 1, 2, 3] = 3
	var median = 0, numsLen = num.length;
	

	if (
		numsLen % 2 === 0 // is even
	) {
		// average of two middle numbers
		median = (num[numsLen / 2 - 1] + num[numsLen / 2]) / 2;
	} else { // is odd
		// middle number only
		median = num[(numsLen - 1) / 2];
	}

	return median;
}

function mode(numbers) {
	var num = numbers;
	// as result can be bimodal or multi-modal,
	// the returned result is provided as an array
	// mode of [3, 5, 4, 4, 1, 1, 2, 3] = [1, 3, 4]
	var modes = [], count = [], i, number, maxIndex = 0;

	for (i = 0; i < num.length; i += 1) {
		number = num[i];
		count[number] = (count[number] || 0) + 1;
		if (count[number] > maxIndex) {
			maxIndex = count[number];
		}
	}

	for (i in count)
		if (count.hasOwnProperty(i)) {
			if (count[i] === maxIndex) {
				modes.push(Number(i));
			}
		}

	return modes;
}

function range(numbers) {
	var num = numbers;
	num.sort(customSort);
	
	return [num[num.length - 1] - num[0]];
}
