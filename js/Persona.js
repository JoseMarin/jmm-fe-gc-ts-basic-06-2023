"use strict";
//Ejemplo POO
class Persona {
    //2-Constructor de clase
    constructor(newNom, newEdad, newCurso) {
        this.nombre = newNom;
        this.edad = newEdad;
        this.curso = newCurso;
    }
    //3-Métodos propios
    setCurso(newCurso) {
        this.curso = newCurso;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(newNombre) {
        this.nombre = newNombre;
    }
}
//Instancias de la clase Persona
let per1 = new Persona('Jose', 35, 'TS');
per1.setCurso('PY');
console.log(per1);
let per2 = new Persona('Diana', 55, 'Java');
per2.edad = 23;
per2.setNombre('David');
console.log(per2);
