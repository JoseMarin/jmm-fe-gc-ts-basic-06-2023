//Class persona

//nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura.
type tipSexo = 'H' | 'M';
const defSexo: tipSexo = 'H';

class Persona {
    //1-Atributos de class
    //private
    private nombre: string;
    private edad: number;
    private DNI: string;
    private sexo: tipSexo;
    private peso: number;
    private altura: number;

    //2-Constructor de la clase
    constructor(newDni: string){
        this.nombre = '';
        this.edad = 0;
        this.DNI = newDni;
        this.sexo = defSexo;
        this.peso = 0;
        this.altura = 0;
    }

    //3-Métodos propios
    saluda(){
        console.log(`Hola mundo, soy ${this.nombre}.`);
    }

}

