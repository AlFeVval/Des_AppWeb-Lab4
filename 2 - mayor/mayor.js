var $ = function (id) {
    return document.getElementById(id);
  };

  var calculate_mayor = function () {
    var num_1 = parseFloat($("num_1").value);
    var num_2 = parseFloat($("num_2").value);
    var num_3 = parseFloat($("num_3").value);

    if (isNaN(num_1)) {
      // alert("Number 1 must be a valid number\nand greater than zero.");
      $("resultado").innerHTML = "Numero 1 debe ser un numero valido";
    } else if (isNaN(num_2)) {
      // alert("Number 2 must be a valid number\nand greater than zero.");
      $("resultado").innerHTML = "Numero 2 debe ser un numero valido";
    } else if (isNaN(num_3)) {
      // alert("Number 3 must be a valid number\nand greater than zero.");
      $("resultado").innerHTML = "Numero 3 debe ser un numero valido";
    } else {
      var num_array = [num_1, num_2, num_3];
      var max_num = Math.max(...num_array);
      document.getElementById("resultado").innerHTML =
        "El número mayor es: " + max_num;
    }
  };
  function clear_page() {
    $("resultado").innerHTML = "";
    $("num_1").value = "";
    $("num_2").value = "";
    $("num_3").value = "";
  }

  window.onload = function () {
    $("mayor").onclick = calculate_mayor;
    $("clear").onclick = clear_page;
  };