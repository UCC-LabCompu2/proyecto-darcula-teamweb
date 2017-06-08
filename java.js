/**
 * Created by Alumno on 08/06/2017.
 */


function verificar()
{
    masaI1 = document.getElementById("masaI1").value;
    velI1 = document.getElementById("velI1").value;
    masaI2 = document.getElementById("masaI2").value;
    velI2 = document.getElementById("velI2").value;
    masaF = document.getElementById("masaF").value;
    velF = document.getElementById("velF").value;

    if(masaI1!="" && masaI2!="" && masaF=="")
    {
        document.getElementById("masaF").value = Number(masaI1) + Number(masaI2);
    }
    if(masaI1!="" && masaF!="" && masaI2=="")
    {
        document.getElementById("masaI2").value = Number(masaF) - Number(masaI1)  ;
    }
    if(masaI2!="" && masaF!="" && masaI1=="")
    {
        document.getElementById("masaI1").value =  Number(masaF) - Number(masaI2);
    }



}
function completos ()
{



}

function convertir(unidad,id_campo)
{
    if(unidad!="Gramos"){
        if(unidad=="Kilogramos"){
            document.getElementById(id_campo).value = 
        }
    }

}


