function videoGame(name,year,country){
    this.name = name;
    this.year = year;
    this.country= country;
}
const game = new videoGame("god of war", "2021", "england");

console.log("El video juego " + game.name + " fue lanzado en " + game.country + " en el anio " + game.year);

const otherGame = new videoGame("mario", 2023, "scotland");

console.log("El video juego " + otherGame.name + " fue lanzado en " + otherGame.country + " en el anio " + otherGame.year);

const otherGame1 = new videoGame("zeldanew", 2023, "colombia");

console.log("El video juego " + otherGame1.name + " fue lanzado en " + otherGame1.country + " en el anio " + otherGame1.year);