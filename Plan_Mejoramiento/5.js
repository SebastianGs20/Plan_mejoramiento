//Ejercicio 5

let N = prompt ("Señor usuario por favor digite un numero: "," ")
let D = prompt ("señor usuario por favor digite otro numero: "," ")
let Dv = N%(2*D)

if (Dv===0){
    console.log("Señor usuario el resultado es divisible: ",Dv);
    if ((N%D===0)) {
        console.log("Es divisible, Su primer numero con el segundo");

        if (N%(2*D)===0) {
            console.log("Es divisible, su primer numero con el segundo por 2");
        }else{
            console.log("No es divisible Resultado= 2");
        }
    }else {
        console.log("No es divisible");
    }
}

