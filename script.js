let suma = 0;
let cont = 0;

function validarNota(nota){
    if (isNaN(nota)){
        alert("Ingresá un número válido");
        return false;
    }
    if ((nota) < 1 || (nota) > 10){
        alert("Ingresá un número entre 1 y 10");
        return false;
    }
    return true;

}

let nombre = prompt("Ingresá el nombre del alumno");
let apellido = prompt("Ingresá el apellido del alumno");
let dni = prompt("Ingresá el DNI del alumno");

let alumno = new Alumno(nombre, apellido, dni);

while(cont < 3){
    
    let nota = parseInt(prompt("Ingresá una nota de tu parcial"));
    
    if (validarNota(nota)){
        if(cont == 0){ 
        alumno.nota1 = nota;
        }
        else if (cont == 1){
            alumno.nota2 = nota;
        }
        else if (cont == 2){
            alumno.nota3 = nota;
        }
        cont++
    }
}

if (cont > 0){
    let total = alumno.calcularPromedio();
    alert("Tu promedio final es de: " + total);
        if (total >= 6){
            alert("Felicidades, promocionaste la materia!");
        }
        else if(total >= 4 && total < 6){
            alert("Genial, aprobaste la cursada! Ahora a preparar el final!");
        }
        else{
            alert("No aprobaste la cursada, pero no te preocupes! Podés recursar la materia o rendirla libre.");
        }
    }

