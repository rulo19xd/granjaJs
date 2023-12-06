







// ~~~~~~~~~~~Funciones~~~~~~~~~~~


function mostrarMensaje (mensaje) {
    alert(mensaje);
}

function pedirDatos(num) {


    mostrarMensaje ('Ingresar datos del animal N°' + num);
 let animal = prompt ('Ingrese la especie del animal N°' + num);
 let nombre = prompt ('Ingrese el nombre del animal N°' + num);
 let color = prompt ('Ingrese el color del animal N°' + num);


    let objeto = {
        animal:animal,
        nombre:nombre,
        color:color
    }

    return objeto;
}
function tirarDado () {
    
}

//~~~~~~~~~~~Objetos~~~~~~~~~~~~~
let animal1 = pedirDatos (1)
let animal2 = pedirDatos (2)
let animal3 = pedirDatos (3)
let animal4 = pedirDatos (4)
let animal5 = pedirDatos (5)



/*
<    >
Buenas genteeeee! Aunque es un poco mas tarde de lo pactado … aqui esta el

🚩🚩DESAFIO SEMANAL🚩🚩 🤑🤑

Vamos a crear un simulador de granja 🐄🐑🐤🐷!Nuestra granja debe empezar con 5 animales (de granja obviamente), y estos deben tener nombre, una especie, una edad inicial, etc

La granja se gestiona de la siguiente forma

Los animales no pueden pasar 3 dias sin comer, es decir que si el animal no come por 3 dias seguidos entonces muere
Por dia solo pueden comer 2 animales (1 dia = 1 ciclo 👀)
Existe la posibilidad del 3% de que el animal muera comiendo
Los animales comen por sorteo, es decir que usando ‘algo’ aleatorio (ya saben que es ese algo) vamos a decidir que animales comen ese dia.
Si el sorteo elige un animal que ya murio, cuenta como una comida menos (de las 2 diarias)
Mostrar cuantos dias pasaron hasta que murieron todos los animales
Hacer una lista al final de los animales, mostrando el nombre del animal y el dia que murio (y un mensaje emotivo por que nos entristece 😭)


Tengan en cuenta lo visto en la clase de ayer, piensen que cada animal cuenta con sus caracteristicas y “funcionalidades” como comer y morir 🤔

Recuerden revisar las reglas del desafio (cambios sobre como entregar)

Les deseo exitos a todos con el desafio y nos vemos esta tarde en el after 💪💪💪 */ 