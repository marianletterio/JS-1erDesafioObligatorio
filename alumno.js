class Alumno{

    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.nota1 = 0;
        this.nota2 = 0;
        this.nota3 = 0;    
    }

    calcularPromedio(){
        return (this.nota1 + this.nota2 + this.nota3) / 3;
    }
}