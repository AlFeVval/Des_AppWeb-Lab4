function calcular() {

    // Obtener los valores del subtotal y porcentajes de impuesto
	var subtotal = parseFloat(document.getElementById("subtotal").value);
	var porcentaje = parseFloat(document.getElementById("porcentaje").value);

    // Calcular el impuesto y el total
	var impuesto = subtotal * porcentaje / 100;
	var total = subtotal + impuesto;

	if( (isNaN(subtotal) || subtotal <= 0) && (isNaN(porcentaje) || porcentaje <= 0) ){
		document.getElementById("resultado").value = "Revise ambos campos";
	}
	else if( isNaN(subtotal) || subtotal <= 0 ){
		document.getElementById("resultado").value = "Ingrese un subtotal valido";
	}
	else if( isNaN(porcentaje) || porcentaje <= 0 ){
		document.getElementById("resultado").value = "Ingrese un porcentaje valido";
	}
    // Mostrar el total en la caja de texto 
	else document.getElementById("resultado").value = total.toFixed(2);
}