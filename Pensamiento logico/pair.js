let numbers=[1,4,6,8,10,16,2,14,15,9]
let newnumbers=[]

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] % 2 === 0){
        newnumbers.push(numbers[i])
    }
}

for(let i=0; i < newnumbers.length; i++){
    console.log(newnumbers[i] + "");
}

// la forma para saber si un numero es par es (numbers%2===0)
    