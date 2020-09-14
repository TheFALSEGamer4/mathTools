function formula() {
	var x1 = Number(document.getElementById("x1").value);
	var x2 = Number(document.getElementById("x2").value);
	var y1 = Number(document.getElementById("y1").value);
	var y2 = Number(document.getElementById("y2").value);

	document.getElementById("x1").value = "";
	document.getElementById("y1").value = "";
	document.getElementById("x2").value = "";
	document.getElementById("y2").value = "";

	if (y1 === y2) {
		document.getElementById("slope1").innerHTML = "Slope: 0";
	} else {
		if (x1 === x2) {
			document.getElementById("slope1").innerHTML = "Slope: undefined";
		} else {

			var part1 = y2 - y1;
			var part2 = x2 - x1;

			var slope = part1 + "/" + part2;
			if (part2 === 1) {
				document.getElementById("slope1").innerHTML = "Slope: " + part1 + ". "
			} else if (part1 === part2) {
				document.getElementById("slope1").innerHTML = "Slope: 1. "
			} else if (part1 > 0 && part2 === -1) {
				part1 = part1 - (part1 * 2)
				document.getElementById("slope1").innerHTML = "Slope: " + part1 + ". "
			} else {
				document.getElementById("slope1").innerHTML = "Slope: " + slope + ". "
			}
		}
	}
	document.getElementById("x1").focus()
}
