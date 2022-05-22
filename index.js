// Desafío 1 Backend - Coderhouse Comisión 31000 | Juan David Quintero


class User{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
        this.books = [];
        this.pets = [];
    }

    // Métodos
    getFullName(){
        return `${this.name} ${this.lastName}`;
    }
    
    addBooks(author, bookName){
        this.books.push({bookName: bookName, author: author});
    }

    getBooksNames(){
        let booksNames = (this.books).map((books)=> books.bookName);
        return booksNames;
    }

    addPet(pets){
        this.pets.push(pets);
    }

    countPets(){
        return this.pets.length;
    }
}

// Object 

const user1 = new User("Juan David", "Quintero");
user1.addBooks("La Divina Comedia", "Dante Alighieri");
user1.addBooks("Fausto", "Johann Wolfgang von Goethe");
user1.addPet("Gato");
user1.addPet("Lobo");
user1.addPet("Camaleón");


//Mostrar por consola la data
console.log(`Nombre de Usuario: ${user1.getFullName()}
${user1.name} ha leído los últimos días estos libros:
${user1.getBooksNames} sin embargo uno de ellos está roto 
y no sabe cuál mascota de su casa fue, ya que tiene ${user1.countPets}`);





