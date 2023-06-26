//Ejemplo POO

class Persona {
    //1-Atributos
    private nombre: string;
    public edad: number;
    public curso: string;
    
    //2-Constructor de clase
    constructor(newNom:string, newEdad:number, newCurso:string){
        this.nombre = newNom;
        this.edad = newEdad;
        this.curso = newCurso;
    }

    //3-Métodos propios
    setCurso(newCurso:string):void{
        this.curso = newCurso;
    }

    getNombre(): string{
        return this.nombre;
    }

    setNombre(newNombre: string): void{
        this.nombre = newNombre;
    }
}

//Instancias de la clase Persona
let per1 = new Persona('Jose',35,'TS');
per1.setCurso('PY');
console.log(per1);

let per2 = new Persona('Diana',55,'Java');
per2.edad = 23;
per2.setNombre('David');
console.log(per2);