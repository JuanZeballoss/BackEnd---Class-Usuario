import { readFileSync, writeFileSync } from "fs";

class Contenedor {
  constructor(id) {
    this.id = id;   
    this.data = readFileSync("./BDT2.txt", "utf-8");
    this.array = JSON.parse(this.data);
  }
  getAll() {
    const getAll = this.array;
    console.log(getAll);
  }

  save() {
    const add = [{
        "id": 1,
        "Nombre": "Trescha",
        "Apellido": "Lintot",
        "email": "tlintot0@mashable.com"
      }, {
        "id": 2,
        "Nombre": "Ariadne",
        "Apellido": "Costan",
        "email": "acostan1@state.tx.us"
      }, {
        "id": 3,
        "Nombre": "Marabel",
        "Apellido": "Rouch",
        "email": "mrouch2@noaa.gov"
      }, {
        "id": 4,
        "Nombre": "Juan",
        "Apellido": "Zeballos",
        "email": "juanzeballoss@outlook.com"
      }]
      writeFileSync("./BDT2.txt", `${JSON.stringify(add)}`);
  }

  getById(idParam) {
    const get = this.array.find(({ id }) => id === idParam);
    console.log(get);
  }

  deleteAll() {
    const deleteAll = (this.array.length = 0);
    console.log(deleteAll);
    const add = [{
        "id": 1,
        "Nombre": "Trescha",
        "Apellido": "Lintot",
        "email": "tlintot0@mashable.com"
      }, {
        "id": 2,
        "Nombre": "Ariadne",
        "Apellido": "Costan",
        "email": "acostan1@state.tx.us"
      }, {
        "id": 3,
        "Nombre": "Marabel",
        "Apellido": "Rouch",
        "email": "mrouch2@noaa.gov"
      }, {
        "id": 4,
        "Nombre": "Juan",
        "Apellido": "Zeballos",
        "email": "juanzeballoss@outlook.com"
      }]
      writeFileSync("./BDT2.txt", `${JSON.stringify(add)}`);
  }

  deleteById(deleteParam) {
    const deleteById = this.array.splice(deleteParam, 1);
    console.log(deleteById);
    const result = this.array
    console.log(result)
    const add = [{
        "id": 1,
        "Nombre": "Trescha",
        "Apellido": "Lintot",
        "email": "tlintot0@mashable.com"
      }, {
        "id": 2,
        "Nombre": "Ariadne",
        "Apellido": "Costan",
        "email": "acostan1@state.tx.us"
      }, {
        "id": 3,
        "Nombre": "Marabel",
        "Apellido": "Rouch",
        "email": "mrouch2@noaa.gov"
      }, {
        "id": 4,
        "Nombre": "Juan",
        "Apellido": "Zeballos",
        "email": "juanzeballoss@outlook.com"
      }]
      writeFileSync("./BDT2.txt", `${JSON.stringify(add)}`);
    
  }
}

const user1 = new Contenedor();
user1.save(2);
user1.getById(4);
user1.deleteById(1);
user1.deleteAll();
user1.getAll();
