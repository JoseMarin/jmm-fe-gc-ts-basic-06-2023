"use strict";
//Class persona
const defSexo = 'H';
class Persona {
    //2-Constructor de la clase
    constructor(newDni) {
        this.nombre = '';
        this.edad = 0;
        this.DNI = newDni;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }
    //3-Métodos propios
    saluda() {
        console.log(`Hola mundo, soy ${this.nombre}.`);
    }
}
