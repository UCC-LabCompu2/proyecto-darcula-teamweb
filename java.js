
////////////////////////////////////////////////////////// FUNCIONES PARA EL CHOUE PLASTICO///////////////////////////////////////////////////////////

function verificar()  // controla que campo esta vacio, y en base a ese campo es el cálculo que realiza
{
    var masaI1 = Number(document.getElementById("masaI1").value);
    var masaI2 = Number(document.getElementById("masaI2").value);
    var masaF = Number(document.getElementById("masaF").value);
    var velI1 = Number(document.getElementById("velI1").value);
    var  velI2 = Number(document.getElementById("velI2").value);
    var  velF = Number(document.getElementById("velF").value);


    if (masaI1 != "" && masaI2 != "" &&velI2 != "" && velF != "" && velI1 != ""&& masaF == ""||(masaF == "0")) {
        document.getElementById("masaF").value = Number(masaI1) + Number(masaI2);
    }
    if (masaI1 != "" && masaF != "" &&velI2 != "" && velF != "" && velI1 != ""&& masaI2 == ""||(masaI2 == "0")) {
        document.getElementById("masaI2").value = Number(masaF) - Number(masaI1);
    }
    if (masaI2 != "" && masaF != "" &&velI2 != "" && velF != "" && velI1 != ""&&masaI1 == ""||(masaI1 == "0")) {
        document.getElementById("masaI1").value = Number(masaF) - Number(masaI2);
    }
    if (velI1 != "" && velI2 != "" &&masaI2 != "" && masaF != "" && masaI1 != "" &&velF == ""||(velF == "0")) {
        document.getElementById("velF").value = (Number(masaI1)*Number(velI1) + Number(masaI2)*Number(velI2))/(Number(masaI1)+Number(masaI2));
    }
    if (velI1 != "" && velF!= "" &&masaI2 != "" && masaF != "" && masaI1 != "" && velI2 == ""||(velI2 == "0")) {
        document.getElementById("velI2").value = ((Number(masaI1)+Number(masaI2))*Number(velF) - (Number(masaI1)*Number(velI1)))/Number(masaI2);
    }
    if (velI2 != "" && velF != "" &&masaI2 != "" && masaF != "" && masaI1 != "" && velI1 == ""||(velI1 == "0")) {
        document.getElementById("velI1").value = ((Number(masaI1)+Number(masaI2))*Number(velF) - (Number(masaI2)*Number(velI2)))/Number(masaI1);
    }
}

    function calculo() {

        // igualo las variables de las masas a numeros

        var masa1 = Number(document.getElementById("masaI1").value);
        var masa2 = Number(document.getElementById("masaI2").value);
        var masaF = Number(document.getElementById("masaF").value);


        // obtengo las unidades de las masas y las igualo a una variable

        var unidadmasa1 = document.getElementById("mmasaI1").value;
        var unidadmasa2 =document.getElementById("mmasaI2").value;
        var unidadmasaF = document.getElementById("mmasaF").value;



        // igualo las variables de las velocidades a numeros

        var velocidad1 =Number(document.getElementById("velI1").value);
        var velocidad2 = Number(document.getElementById("velI2").value);
        var velocidadF = Number(document.getElementById("velF").value);


        // obtengo las unidades de las velocidades y las igualo a una variable

        var unidadVel1 = document.getElementById("mvelI1").value;
        var unidadVel2 = document.getElementById("mvelI2").value;
        var unidadVelF = document.getElementById("mvelF").value;




        // controla que sean diferentes de g o de m

        if (unidadmasa1 != "g") {
            masa1 = convertirUnidadesmasa(masa1, unidadmasa1);
            unidadmasa1 = "g";
        }
        if (unidadmasa2 != "g") {
            masa2 = convertirUnidadesmasa(masa2, unidadmasa2);
            unidadmasa2 = "g";
        }
        if (unidadmasaF != "g") {
            masaF = convertirUnidadesmasa(masaF, unidadmasaF);
            unidadmasaF = "g";
        }
        if (unidadVel1 != "m") {
            velocidad1 = convertirUnidadesvel(velocidad1, unidadVel1);
            unidadVel1 = "m";
        }
        if (unidadVel2 != "m") {
            velocidad2 = convertirUnidadesvel(velocidad2, unidadVel2);
            unidadVel2 = "m";
        }
        if (unidadVelF != "m") {
            velocidadF = convertirUnidadesvel(velocidadF, unidadVelF);
            unidadVelF = "m";
        }

       verificar();
    }

function convertirUnidadesmasa(valor, unidad)   //modifica los gramos
    {
         if (unidad == "hg")
         {
          valor = valor * 0.1;
         }

         else if (unidad == "dg")
         {
          valor = valor * 0.01;
         }

         else if (unidad == "kg")
         {
          valor = valor * 0.001;
         }

        return valor;
    }


function convertirUnidadesvel(valor, unidad)   // modifica la velocidad
  {
      if (unidad == "km")
      {
        valor = valor * 0.36;

        return valor;
      }
  }






//////////////////////////////////////////////////////// FUNCIONES PARA EL CHOUE ELASTICO///////////////////////////////////////////////////





function verificar1()   // controla que campo esta vacio, y en base a ese campo es el cálculo que realiza
{
    var masaI1 = Number(document.getElementById("masaI1").value);
    var masaI2 = Number(document.getElementById("masaI2").value);
    var masaF1 = Number(document.getElementById("masaF1").value);
    var masaF2 = Number(document.getElementById("masaF2").value);

    var velI1 = Number(document.getElementById("velI1").value);
    var  velI2 = Number(document.getElementById("velI2").value);
    var  velF1 = Number(document.getElementById("velF1").value);
    var  velF2 = Number(document.getElementById("velF2").value);


    if (masaI1 != "" && masaI2 != "" &&velI2 != "" && velF1 != "" && velI1 != ""&& masaF1 == ""||(masaF1 == "0")) {
        document.getElementById("masaF1").value =((Number(document.getElementById("masaI1"))*(Math.pow(Number(document.getElementById("velI1")), 2)))+(Number(document.getElementById("masaI2"))*(Math.pow(Number(document.getElementById("velI2")), 2)))-(Number(document.getElementById("masaF2"))*(Math.pow(Number(document.getElementById("velF2")), 2))))/(Math.pow( Number(document.getElementById("velF1")), 2));
    }
    if (masaI1 != "" && masaF1 != "" &&velI2 != "" && velF1 != "" && velI1 != ""&& masaI2 == ""||(masaI2 == "0")) {
        document.getElementById("masaI2").value = ((Number(document.getElementById("masaF1"))*(Math.pow(Number(document.getElementById("velF1")), 2)))+(Number(document.getElementById("masaF2"))*(Math.pow(Number(document.getElementById("velF2")), 2)))-(Number(document.getElementById("masaI1"))*(Math.pow(Number(document.getElementById("velI1")), 2))))/(Math.pow( Number(document.getElementById("velI1")), 2));
    }
    if (masaI2 != "" && masaF1 != "" &&velI2 != "" && velF1 != "" && velI1 != ""&&masaI1 == ""||(masaI1 == "0")) {
        document.getElementById("masaI1").value = ((Number(document.getElementById("masaF1"))*(Math.pow(Number(document.getElementById("velF1")), 2)))+(Number(document.getElementById("masaF2"))*(Math.pow(Number(document.getElementById("velF2")), 2)))-(Number(document.getElementById("masaI1"))*(Math.pow(Number(document.getElementById("velI1")), 2))))/(Math.pow( Number(document.getElementById("velI2")), 2));
    }
    if (velI1 != "" && velI2 != "" &&masaI2 != "" && masaF1 != "" && masaI1 != "" &&velF1 == ""||(velF1 == "0")) {
        document.getElementById("velF1").value = Math.pow(((Number(document.getElementById("masaI1"))*(Math.pow(Number(document.getElementById("velI1")), 2)))+(Number(document.getElementById("masaI2"))*(Math.pow(Number(document.getElementById("velI2")), 2)))-(Number(document.getElementById("masaF2"))*(Math.pow(Number(document.getElementById("velF2")), 2))))/(Number(document.getElementById("velF1"))),0.5);
    }
    if (velI1 != "" && velF1!= "" &&masaI2 != "" && masaF1 != "" && masaI1 != "" && velI2 == ""||(velI2 == "0")) {
        document.getElementById("velI2").value = Math.pow(((Number(document.getElementById("masaF1"))*(Math.pow(Number(document.getElementById("velF1")), 2)))+(Number(document.getElementById("masaF2"))*(Math.pow(Number(document.getElementById("velF2")), 2)))-(Number(document.getElementById("masaI1"))*(Math.pow(Number(document.getElementById("velI1")), 2))))/(Number(document.getElementById("masaI2"))),0.5);
    }
    if (velI2 != "" && velF1 != "" &&masaI2 != "" && masaF1 != "" && masaI1 != "" && velI1 == ""||(velI1 == "0")) {
        document.getElementById("velI1").value = Math.pow(((Number(document.getElementById("masaF1"))*(Math.pow(Number(document.getElementById("velF1")), 2)))+(Number(document.getElementById("masaF2"))*(Math.pow(Number(document.getElementById("velF2")), 2)))-(Number(document.getElementById("masaI2"))*(Math.pow(Number(document.getElementById("velI2")), 2))))/(Number(document.getElementById("masaI1"))),0.5);
    }
    if (masaI1 != "" && masaI2 != "" &&velI2 != "" && velF2 != "" && velI1 != ""&& masaF2 == ""||(masaF2 == "0")) {
        document.getElementById("masaF2").value = ((Number(document.getElementById("masaI1"))*(Math.pow(Number(document.getElementById("velI1")), 2)))+(Number(document.getElementById("masaI2"))*(Math.pow(Number(document.getElementById("velI2")), 2)))-(Number(document.getElementById("masaF1"))*(Math.pow(Number(document.getElementById("velF1")), 2))))/(Math.pow( Number(document.getElementById("velF2")), 2));
    }
    if (velI1 != "" && velI2 != "" &&masaI2 != "" && masaF2 != "" && masaI1 != "" &&velF2 == ""||(velF2 == "0")) {
        document.getElementById("velF2").value = Math.pow(((Number(document.getElementById("masaI1"))*(Math.pow(Number(document.getElementById("velI1")), 2)))+(Number(document.getElementById("masaI2"))*(Math.pow(Number(document.getElementById("velI2")), 2)))-(Number(document.getElementById("masaF1"))*(Math.pow(Number(document.getElementById("velF1")), 2))))/(Number(document.getElementById("velF2"))),0.5);
    }

}

function calculoe() {

    // igualo las variables de las masas a numeros

    var masa1 = Number(document.getElementById("masaI1").value);
    var masa2 = Number(document.getElementById("masaI2").value);
    var masaF1 = Number(document.getElementById("masaF1").value);
    var masaF2 = Number(document.getElementById("masaF2").value);


    // obtengo las unidades de las masas y las igualo a una variable

    var unidadmasa1 = document.getElementById("mmasaI1").value;
    var unidadmasa2 = document.getElementById("mmasaI2").value;
    var unidadmasaF1 = document.getElementById("mmasaF1").value;
    var unidadmasaF2 = document.getElementById("mmasaF2").value;



    // igualo las variables de las velocidades a numeros

    var velocidad1 =Number(document.getElementById("velI1").value);
    var velocidad2 = Number(document.getElementById("velI2").value);
    var velocidadF1 = Number(document.getElementById("velF1").value);
    var velocidadF2 = Number(document.getElementById("velF2").value);


    // obtengo las unidades de las velocidades y las igualo a una variable

    var unidadVel1 = document.getElementById("mvelI1").value;
    var unidadVel2 = document.getElementById("mvelI2").value;
    var unidadVelF1 = document.getElementById("mvelF1").value;
    var unidadVelF2 = document.getElementById("mvelF2").value;




    // controla que sean diferentes de g o de m

    if (unidadmasa1 != "g") {
        masa1 = convertirUnidadesmasa(masa1, unidadmasa1);
        unidadmasa1 = "g";
    }
    if (unidadmasa2 != "g") {
        masa2 = convertirUnidadesmasa(masa2, unidadmasa2);
        unidadmasa2 = "g";
    }
    if (unidadmasaF1 != "g") {
        masaF1 = convertirUnidadesmasa(masaF1, unidadmasaF1);
        unidadmasaF1 = "g";
    }
    if (unidadmasaF2 != "g") {
        masaF2 = convertirUnidadesmasa(masaF2, unidadmasaF2);
        unidadmasaF = "g";
    }
    if (unidadVel1 != "m") {
        velocidad1 = convertirUnidadesvel(velocidad1, unidadVel1);
        unidadVel1 = "m";
    }
    if (unidadVel2 != "m") {
        velocidad2 = convertirUnidadesvel(velocidad2, unidadVel2);
        unidadVel2 = "m";
    }
    if (unidadVelF1 != "m") {
        velocidadF1 = convertirUnidadesvel(velocidadF1, unidadVelF1);
        unidadVelF1 = "m";
    }
    if (unidadVelF2 != "m") {
        velocidadF2 = convertirUnidadesvel(velocidadF2, unidadVelF2);
        unidadVelF2 = "m";
    }


    verificar1();
}

