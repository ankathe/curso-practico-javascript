

function Identity(name,lastName,nickName){
    this.name = name;
    this.lastName = lastName;
    this.nickName = nickName;
    this.completeName = `${name} ${lastName}`;
}

const person = new Identity("juanDavid", "Castro gallego", "juandc");

console.log("Mi nombre es " + person.completeName + ", pero prefiero que me digas " + person.nickName + ".");

let person2 = new Identity("Angie", "cruz","angieyolas");

console.log("Mi nombre es " + person2.completeName + ", pero prefiero que me digas " + person2.nickName + ".");

let person3 = new Identity("john", "arias", "nalgas");

console.log("Mi nombre es " + person3.completeName + ", pero prefiero que me digas " + person3.nickName + ".");

let perro = new Identity("alma", "arias cruz", "mibebe");

console.log("Mi nombre es " + perro.completeName + ", pero prefiero que me digas " + perro.nickName + ".");

console.log(perro);

