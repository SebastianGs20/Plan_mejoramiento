//Ejercicio 9
let Masc=10.8
let Fem=0
let Op=prompt("Señor usuario elija uno de los metodos a medir")
let opciones=([1,2,3])

if (opciones=1){
    let Altura=prompt ("Señor usuario digite su altura")
    let Peso=prompt ("Señor usuario digite su Peso")
    let Imc=(Altura*Peso)/2
    console.log("Su ImC es: "),Imc;
} else if(opciones=2){
    let genero= prompt("Señor usuario digite su genero");
    let edad= prompt ("Señor usuario digite su edad")
    let Altura= prompt("Señor usuario digite su altura")
    let Peso = prompt ("Señor usuario digite su peso")
    let IMC = Altura*Peso
    if (genero=Masc){
        console.log("Señor usuario su %de grasa es de:",1.2*IMC+0.23*edad-5.4-genero);
    }
    
}