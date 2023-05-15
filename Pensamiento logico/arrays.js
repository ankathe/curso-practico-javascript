let arraySecreto=[1, "Gallina", "Vaca"];

function solution(arraySecreto) {
    if (typeof arraySecreto.shift(1)==="string") {
      console.log("true");
    }else{
        console.log("false");
    }   
}