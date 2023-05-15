let num1 = 5 
let num2 = 4

function solution(x,y){
    let rest = x - y
    let sum = x + y  
    return parseInt(`${rest}${sum}`)
}
const respuesta = solution(num1, num2);

console.log(respuesta);