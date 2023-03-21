var $ = function (id) {
    return document.getElementById(id);
}

var calculate_click = function () {
    var radio = parseFloat( $("radio").value );

	$("area").value = "";
	$("perim").value = "";
	
	if (isNaN(radio)) {
		$("area").value = "Debe ser un numero"; 
		$("perim").value = "Debe ser un numero"; 
		// alert("Radio must be a valid number\nand greater than zero.");
	} 
	else if (radio <= 0) {
		$("area").value = "No hay radios negativos"; 
		$("perim").value = "No hay radios negativos"; 
		// alert("Radio must be a valid number\nand greater than zero.");
	} 
    else {
		// var monthlyRate = annualRate / 100;
		// futureValue = investment *  Math.pow(1+monthlyRate,years)
		
		var area = Math.PI * radio*radio;
		var perimetro = 2*Math.PI*radio;

		$("area").value = area.toFixed(2);
		$("perim").value = perimetro.toFixed(2);
	} 
}

var clear_value = function (){
	$("area").value = "";
	$("perim").value = "";
}

window.onload = function () {
    $("calculate").onclick = calculate_click;
	$("clear").onclick = clear_value;
    $("radio").focus();
}
