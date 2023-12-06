







// ~~~~~~~~~~~Funciones~~~~~~~~~~~


function mostrarMensaje (mensaje) {
    alert(mensaje);
}

function datosNoCargados (dato) {
    alert ('Has ingresado incorrectamente el ' + dato + ', ingrese un ' + dato + ' válido.')
}

function pedirDatos(num) {

let animal = "";
let nombre = "";
let color = "";


    mostrarMensaje ('Ingresar datos del animal N°' + num + '.');

    while (animal == "") { 
   animal = prompt ('Ingrese la especie del animal N°' + num + '.');
     if (animal == "") {
        datosNoCargados ('animal')
     }
    }

    while (nombre == "") {  
   nombre = prompt ('Ingrese el nombre del animal N°' + num + '.' );
     if (nombre == "") {
        datosNoCargados ('nombre')
     }
    }

    while (color == "") { 
   color = prompt ('Ingrese el color del animal N°' + num + '.');
   if (color == "") {
    datosNoCargados ('color')
     } else {
        mostrarMensaje ('Has ingresado correctamente los datos del animal ' + num + '.')
     }
    }


    let objeto = {
        animal : animal,
        nombre : nombre,
        color : color,
        
        edad : 0,
        vive : true,
        diasComer : 0,
        numero : num

    }

    return objeto;
}

function comer () {
   let rand = math.floor(math.random() * 5) + 1;

   return rand
}

function ahogarse (num) {
    var probabilidad = Math.random();
    var probAhogarse = 0.03;

    if (probabilidad < probAhogarse) {
      return false
    } else {
      return true
    }
}


//~~~~~~~~~~~Objetos~~~~~~~~~~~~~


let animal1 = pedirDatos (1)
let animal2 = pedirDatos (2)
let animal3 = pedirDatos (3)
let animal4 = pedirDatos (4)
let animal5 = pedirDatos (5)


//~~~~~~~~~~Codigo~~~~~~~~~~~

let continuar = confirm ('¿Comenzamos el juego?')
while (animal1.vive == true || animal2.vive == true || animal3.vive == true || animal4 == true || animal5 == true) {

  comida = comer ()
  comida2 = comer ()

  if (animal1.num == comida || animal1.num == comida2) {
    muere = ahogarse ()
    animal1.vive = muere
    if (animal1.vive == true) {
        animal1.edad++
        animal1.diasComer = 0;
    }
  } else {
    animal1.diasComer++
  }


  if (animal2.num == comida || animal2.num == comida2) {
    muere = ahogarse ()
    animal2.vive = muere
    if (animal2.vive == true) {
        animal2.edad++
        animal2.diasComer = 0;
    }
  } else {
    if (animal2.vive == true) {
        animal2.diasComer++
    }
  }


  if (animal3.num == comida || animal3.num == comida2) {
    muere = ahogarse ()
    animal3.vive = muere
    if (animal3.vive == true) {
        animal3.diasComer = 0;
        animal3.edad++
    }
  } else {
    if (animal3.vive == true) {
        animal3.diasComer++
    }
  }


  if (animal4.num == comida || animal4.num == comida2) {
    muere = ahogarse ()
    animal4.vive = muere
    if (animal5.vive == true) {
        animal4.diasComer = 0;
        animal4.edad++
    }
  } else {
    if (animal4.vive == true) {
        animal4.diasComer++
    }
  }


  if (animal5.num == comida || animal5.num == comida2) {
    muere = ahogarse ()
    animal5.vive = muere
    if (animal5.vive == true) {
        animal5.diasComer = 0;
        animal5.edad++
    }
  } else {
    if (animal5.vive == true) {
        animal5.diasComer++
    }
  }


  if (animal1.diasComer == 3){
    animal1.vive = false
  }
  if (animal2.diasComer == 3){
    animal2.vive = false
  }
  if (animal3.diasComer == 3){
    animal3.vive = false
  }
  if (animal4.diasComer == 3){
    animal4.vive = false
  }
  if (animal5.diasComer == 3){
    animal5.vive = false
  }


}






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