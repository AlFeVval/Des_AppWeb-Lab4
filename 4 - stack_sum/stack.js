var $ = function (id) {
    return document.getElementById(id);
}

function lista_nesima(){
    let index = Math.ceil(num/maximun);
    let array = [];
    // let val = 0;
    for (let i = 0; i < index; i++) {
        array.push(1+(i)*maximun);
        // val += array[i]; 
        // document.write("<h1>"+array[i]+"</h1>");
    }
    return array;
}

function imprimirnumeros(){
    let stack;
    let topes = lista_nesima();
    for (i = 1; i <= num; i++){
        stack =+ i;
/*         if(i==1 || i == topes[Math.ceil(i/maximun)-1]) document.write("<p class='simple-text'> "+ stack);
        else if(i%maximun == 0){
            document.write("<p class='simple-text'> + "+ stack+"</p>");
            document.write("<br>");
        }
        else document.write("<p class='simple-text'> + "+ stack+"</p>"); */
        if(i==1 || i == topes[Math.ceil(i/maximun)-1]) $("main").innerHTML += "<p class='simple-text'> "+stack+"</p>";
        else if(i%maximun == 0){
            $("main").innerHTML += "<p class='simple-text'> +"+stack+"</p>";
            $("main").innerHTML += "<br>";
        }
        else $("main").innerHTML += "<p class='simple-text'> +"+stack+"</p>";
    }
}

let total = 0; 
const maximun = prompt("Establece el maximo por fila");
var num = prompt ("Escribe un número");

if( (isNaN(maximun) || maximun <= 0) && (isNaN(num) || num <= 0) ){
    $("main").innerHTML += "<p class='numbers'>Revise los campos ingresados.</p>";
}
else if(isNaN(maximun) || maximun <= 0){
    $("main").innerHTML += "<p class='numbers'>Ingrese un maximo por fila valido.</p>";
}
else if(isNaN(num) || num <= 0){
    $("main").innerHTML += "<p class='numbers'>Ingrese un valor valido para n.</p>";
}
else{
    for(let i=0; i<= num; i++){
        total += i;
    }
    imprimirnumeros();
    // document.write("<p class='numbers'> La suma es "+ total);
    $("main").innerHTML += "<p class='numbers'> El total es: "+total+"</p>";
}
