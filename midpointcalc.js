function formula() {
	var x1 = Number(document.getElementById("x1").value);
	var x2 = Number(document.getElementById("x2").value);
	var y1 = Number(document.getElementById("y1").value);
	var y2 = Number(document.getElementById("y2").value);

	document.getElementById("x1").value = "";
	document.getElementById("y1").value = "";
	document.getElementById("x2").value = "";
	document.getElementById("y2").value = "";

	var part1 = (x1+x2)/2;
	var part2 = (y1+y2)/2;
	var midpoint = "("+part1+", "+part2+")";

	document.getElementById("midpoint1").innerHTML = "Midpoint: " + midpoint + ". "
	document.getElementById("x1").focus();


}
