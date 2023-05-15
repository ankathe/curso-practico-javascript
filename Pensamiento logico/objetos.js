// arrays con objetos // METODO FILTER

let articles = [
    {name: "cycle", cost: 3000},
    {name: "tv", cost: 2500},
    {name: "book", cost: 320},
    {name: "cellphone", cost: 10000},
    {name: "laptop", cost: 20000},
    {name: "keyboard", cost: 500},
    {name: "earphones", cost: 1700},
];

let articlesFilter = articles.filter(function(article){
    return article.cost <= 500;
});

console.log(articlesFilter);

// arrays con objetos // METODO MAP

var nameArticles = articles.map(function(articles){
    return articles.name
});

// aqui si lo llamo con console.log(nameArticles), retorna el name de todos los articulos de mi array, 
// es decir, cycle, tv, book, cellphone etc.

// METODO FIND

var searchArticle = article.find(function(article){
    return article.name === "laptop"
});

console.log(searchArticle);

// me buscaria el nombre laptop en mi objeto que se encuentra dentro de un arreglo
// name: laptop, cost: 20000, esa seria la respuesta de la consola, es decir, la funcion sirve para 
// buscar elementos especificos dentro de un objeto 
