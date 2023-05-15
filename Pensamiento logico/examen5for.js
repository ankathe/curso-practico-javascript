let answer = prompt("how much is 2+2?");
const valid = true

while(valid){
    if(answer ===4){
        alert("congratulations!! the answer is correct");
        valid = false;
    }else{
        answer = prompt("how much is 2+2?");
    }
};

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}


for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}


let number = 10;

while(number >=2){
    console.log("El valor de i es: " + number);
    number--;
}

