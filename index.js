
let dato = prompt("¿cual es la capital de Austria?")

while( (dato !="Viena") && (dato !="viena")  ){

    alert(`tu respuesta es: ${dato} y es incorrecta.`);
    dato = prompt("Prueba nuevamente, ¿cual es la capital de Austria?")
    
}

if ((dato = "Viena") || (dato = "viena")){
    alert("tu respuesta es correcta!")
}
