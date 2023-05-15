let myObject ={
    nickName: ": alma",
    level: ": expert",
    position: ": my pet",
}

function printMyObject(object){
    for(let property in object){
    console.log(property + " " + object[property]);
    } 
}

printMyObject(myObject);