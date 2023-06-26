//defino la clase electrodomestico
type tColor = 'blanco'| 'negro'| 'rojo'| 'azul' | 'gris';

const defColor: tColor = 'blanco';
const defConsumo = 'F';
const defPrecio = 100;
const defPeso = 5;

class Electrodomestico {
    //1-Atributos de clase
    protected preciobase: number;
    protected color: tColor;
    protected consumo: string;
    protected peso: number;

    //2-Constructor de clase
    constructor(newConsumo:string){
        this.color = defColor;
        this.consumo = this.comprobarConsumoEnergetico(newConsumo);
        this.preciobase = defPrecio;
        this.peso = defPeso;
    }

    //3-Métodos propios
    getPrecioBase():number{
        return this.preciobase;
    }

    getColor():tColor{
        return this.color;
    }

    getCon():string{
        return this.consumo;
    }

    getPeso(){
        return this.peso; 
    }

    comprobarConsumoEnergetico(letra: string){
        switch (letra) {
            case 'A':
                return 'A';     
                break;
            case 'B':
                return 'B';     
                break;
            case 'C':
                return 'C';     
                break;
            case 'D':
                return 'D';     
                break;
            case 'E':
                return 'E';     
                break;
            default:
                return defConsumo; 
                break;
        }
    }
}



