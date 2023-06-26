"use strict";
//Definimos clase Lavadora
class Lavadora extends Electrodomestico {
    //2-Constructor de clase
    constructor(newConsumo) {
        super(newConsumo);
        this.carga = 5;
    }
    //3-Métodos propios
    getPrecioBase() {
        // let pb = super.getPrecioBase();
        return 200;
    }
}
