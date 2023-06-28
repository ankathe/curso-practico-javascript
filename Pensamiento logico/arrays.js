let arraySecreto=[1, "Gallina", "Vaca"];

function solution(arraySecreto) {
    if (typeof arraySecreto.shift(1)==="string") {
      console.log("true");
    }else{
        console.log("false");
    }   
}

//METODOS DE ARRAY
//Join

let numbers = ["abecedario", "manzana", "pedro", "gato"];
document.write(numbers.length + "</br>");
let result = numbers.join("</br>")
document.write(result);