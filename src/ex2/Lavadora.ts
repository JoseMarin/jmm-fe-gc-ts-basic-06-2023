//Definimos clase Lavadora

class Lavadora extends Electrodomestico {
    //1-atributos de clase
    protected carga:number;

    //2-Constructor de clase
    constructor(newConsumo:string){
        super(newConsumo);
        this.carga = 5;
    }

    //3-Métodos propios
    getPrecioBase(): number {
        // let pb = super.getPrecioBase();
        return 200;
    }
}