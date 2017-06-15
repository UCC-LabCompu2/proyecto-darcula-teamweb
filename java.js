/**
 * Created by Alumno on 08/06/2017.
 */

function verificar()  //verifica que ingreses 2 de las 3 masas
{
    masaI1 = document.getElementById("masaI1").value;
    velI1 = document.getElementById("velI1").value;
    masaI2 = document.getElementById("masaI2").value;
    velI2 = document.getElementById("velI2").value;
    masaF = document.getElementById("masaF").value;
    velF = document.getElementById("velF").value;

    if (masaI1 != "" && masaI2 != "" && masaF == "") {
        document.getElementById("masaF").value = Number(masaI1) + Number(masaI2);
    }
    if (masaI1 != "" && masaF != "" && masaI2 == "") {
        document.getElementById("masaI2").value = Number(masaF) - Number(masaI1);
    }
    if (masaI2 != "" && masaF != "" && masaI1 == "") {
        document.getElementById("masaI1").value = Number(masaF) - Number(masaI2);
    }
}


    function convertirUnidadesmasa(valor, unidad) {   //modifica los gramos
        if (unidad == "hg") {
            valor = valor * 0.1;

        } else if (unidad == "dg") {
            valor = valor * 0.01;
        } else if (unidad == "kg") {
            valor = valor * 0.001;
        }
        return valor;
    }


    function convertirUnidadesvel(valor, unidad) {  // modifica la velocidad
        if (unidad == "dm") {
            valor = valor * 0.1;

        } else if (unidad == "cm") {
            valor = valor * 0.01;
        } else if (unidad == "mm") {
            valor = valor * 0.001;
        }
        return valor;
    }


    function calculo() {  // verifica las unidades y las pasa a g y a m

        var masa1 = parseFloat(document.getElementById("masaI1").value);
        var masa2 = parseFloat(document.getElementById("masaI2").value);
        var masaF = parseFloat(document.getElementById("masaF").value);
        var unidadmasa1 = parseFloat(document.getElementById("mmasaI1").value);
        var unidadmasa2 = parseFloat(document.getElementById("mmasaI2").value);
        var unidadmasaF = parseFloat(document.getElementById("mmasaF").value);


        var velocidad1 = parseFloat(document.getElementById("velI1").value);
        var velocidad2 = parseFloat(document.getElementById("velI2").value);
        var velocidadF = parseFloat(document.getElementById("velF").value);
        var unidadVel1 = parseFloat(document.getElementById("mvelI1").value);
        var unidadVel2 = parseFloat(document.getElementById("mvelI2").value);
        var unidadVelF = parseFloat(document.getElementById("mvelF").value);



        // controla que sean diferentes de g o de m

        if (unidadmasa1 != "g") {
            masa1 = convertirUnidadesmasa(masa1, unidadmasa1);
        }
        if (unidadmasa2 != "g") {
            masa2 = convertirUnidadesmasa(masa2, unidadmasa2);
        }
        if (unidadmasaF != "g") {
            masaF = convertirUnidadesmasa(masaF, unidadmasaF);
        }
        if (unidadVel1 != "m") {
            velocidad1 = convertirUnidadesvel(velocidad1, unidadVel1);
        }
        if (unidadVel2 != "m") {
            velocidad2 = convertirUnidadesvel(velocidad2, unidadVel2);
        }
        if (unidadVelF != "m") {
            velocidadF = convertirUnidadesvel(velocidad1, unidadVelF1);
        }
    }

