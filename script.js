let suma = 0;
let cont = 0;


for (let i = 0; i < 3 ; i++){
    
    let nota = parseInt(prompt("Ingresá las notas de tus parciales"));

    if (isNaN(nota)){
        alert("Ingresá un número válido");
        continue;
    }
    if ((nota) < 1 || (nota) > 10){
        alert("Ingresá un número entre 1 y 10");
    }

    suma += nota; 
    cont++;
}

if (cont > 0){
    let total = suma / cont;
    if(total >= 1 && total <= 10){
        alert("Tu promedio final es de: " + total);
        if (total >= 6){
            alert("Felicidades, promocionaste la materia!");
        }
        if(total >= 4 && total < 6){
            alert("Genial, aprobaste la cursada! Ahora a preparar el final!");
        }
        if(total < 4){
            alert("No aprobaste la cursada, pero no te preocupes! Podés recursar la materia o rendirla libre.");
        }
    }
}

