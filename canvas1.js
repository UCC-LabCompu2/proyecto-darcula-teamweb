/**
 * Created by aguma on 19/6/2017.
 */
/**
 * Created by aguma on 15/6/2017.
 */
// Función que crea un circulo.
function circle(x, y, r, color) {
    contexto.fillStyle = color;
    contexto.beginPath();
    contexto.arc(x, y, r, 0, Math.PI*2, true);
    contexto.closePath();
    contexto.fill();
}

// Función que crea un rectangulo.
function rect(x, y, w, h, color) {
    contexto.fillStyle = color;
    contexto.fillRect(x, y, w, h);
}

// Función que crea un objeto pelota
function Pelota(x, y, r, color) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color;
    this.dx = 1;
    this.dy = 1.1;
    this.speed = 2;
    this.center = this.r/2;

    this.update = function() {
        if (this.x+this.center > ancho_rectangulo || this.x-this.center < 0) {
            this.dx = -this.dx;
        }

        if (this.y+this.center > alto_rectangulo || this.y-this.center < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx * this.speed;
        this.y += this.dy * this.speed;
    }

    this.draw = function() {
        circle(this.x, this.y, this.r, this.color);
    }
}


//Función que actualiza y dibuja la pelota.
function gameLoop() {
    limpiar();

    // Si (pelota.x > width) entonces clearInterval(intervalId9);
    if(cuenta < 66)
    {
        pelota1.update();
        pelota1.draw();

        pelota2.update();
        pelota2.draw();
        cuenta ++;
    } else

    if(cuenta==66)
    {
        pelota1.color= "blue";
        pelota2.color= "yellow"
        cuenta ++;
    }else if (cuenta > 66 && cuenta <140)
    {
        pelota1.update();
        pelota1.draw();
        pelota2.update();
        pelota2.draw();
        cuenta ++;
    }else if (cuenta ==140)
    {
        pelota1.x=50;
        pelota1.y= 50;
        pelota1.color="yellow";
        pelota2.x = 50;
        pelota2.y= 250;
        pelota2.color = "blue";
        cuenta = 0;
    }

}

// Función que limpia los pasos de la pelota
function limpiar() {
    contexto.fillStyle = "gray";
    rect(0, 0, ancho_rectangulo, alto_rectangulo);
}

// Función para iniciar el programa
function init() {
    canvas = document.getElementById("lienzo");
    contexto = canvas.getContext("2d");
    ancho_rectangulo = canvas.width;
    alto_rectangulo = canvas.height;

    pelota1 = new Pelota(50, 50, 10, "yellow");
    pelota2 = new Pelota(50, 250, 10, "blue");

    setInterval(gameLoop, 20); //Llama a la función gameLoop cada 20 milisegundos de forma indefinida.
}

window.onload = init;

// Variables.
var canvas, contexto, ancho_rectangulo, alto_rectangulo;
var cuenta = 0;

function hanColisionado(rectanguloA, rectanguloB) {
    return !(
        ((rectanguloA.y + rectanguloA.height) < (rectanguloB.y)) ||
        (rectanguloA.y > (rectanguloB.y + rectanguloB.height)) ||
        ((rectanguloA.x + rectanguloA.width) < rectanguloB.x) ||
        (rectanguloA.x > (rectanguloB.x + rectanguloB.width))
    );
}