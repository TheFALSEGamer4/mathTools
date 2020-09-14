function formula() {
	var x1 = Number(document.getElementById("x1").value);
	var x2 = Number(document.getElementById("x2").value);
	var y1 = Number(document.getElementById("y1").value);
	var y2 = Number(document.getElementById("y2").value);

	document.getElementById("x1").value = "";
	document.getElementById("y1").value = "";
	document.getElementById("x2").value = "";
	document.getElementById("y2").value = "";

	var part1 = Math.pow(x2 - x1, 2);
	var part2 = Math.pow(y2 - y1, 2);
	var part3 = part1 + part2;
	var part4 = Math.sqrt(part3);
	var distance = Math.ceil(part4 * 1000) / 1000;

	document.getElementById("distance1").innerHTML = "Distance: " + distance.toFixed(3) + ". "
	document.getElementById("x1").focus();
}
