class Usuario  {   
    constructor(nombre, apellido, mascotas = [], libros = []){
        this.nombre = nombre;
        this.apellido = apellido;  
        this.mascotas = mascotas;
        this.libros = libros;      
    }
    getFullName(){
        return (`${this.nombre} ${this.apellido}`)
    }

    addMascota(mascotas){
        this.mascotas.push(mascotas)        
    }

    countMascotas(){
        return(
        `Usted tiene ${this.mascotas.length} mascotas`
        )        
    }

    addBook(nombre, autor){
        this.libros.push({nombre: nombre, autor: autor})
        
    }

    getBookNames(){
        return(this.libros.map(book => book.nombre))
    }
}


const user1 = new Usuario('Juan', 'Perez')
user1.getBookNames();
user1.addMascota();
user1.addBook(`Harry Potter`, `J.K.Rowling`);
user1.countMascotas();
user1.getBookNames()

