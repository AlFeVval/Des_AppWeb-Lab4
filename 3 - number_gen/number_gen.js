var $ = function (id) {
    return document.getElementById(id);
}


var number = parseInt(prompt("Enter number: "));
if(isNaN(number) || number <= 0){
    $("sq_num").innerHTML += "<p> No es un numero valido, vuelva a intentar con numeros positivos</p>";
}
else{
    for (let index = 1; index <= number; index++) {
       $("sq_num").innerHTML += "<tr> <td>"+index+"</td> <td>"+index*index+"</td> </tr>";
    }
}