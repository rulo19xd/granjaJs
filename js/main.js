
// ~~~~~~~~~~~Funciones~~~~~~~~~~~

function mostrarMensajeAl (mensaje) {  //mostrar alertas
    alert(mensaje);
}
function mostrarMensaje (mensaje) { //mostrar en consola
    console.log(mensaje);
}

function datosNoCargados (dato) { //cargar datos incorrectamente
    mostrarMensajeAl ('Has ingresado incorrectamente el ' + dato + ', ingrese un ' + dato + ' válido.')
}

function pedirDatos(num) { //pedimos los datos al usuario

let animal = "";
let nombre = "";
let color = "";


    mostrarMensajeAl ('Ingresar datos del animal N°' + num + '.');

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
        mostrarMensajeAl ('Has ingresado correctamente los datos del animal ' + num + '.')
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

function comer () { // sorteo de animales
   let rand = math.floor(math.random() * 5) + 1;

    return rand
}

function ahogarse () { //probabilidad de ahogarse
    var probabilidad = Math.random();
    var probAhogarse = 0.03;

    if (probabilidad < probAhogarse) {
      return false
    } else {
      return true
    }
}


//~~~~~~~~~~~Objetos y Variables~~~~~~~~~~~~~


let animal1 = pedirDatos (1);
let animal2 = pedirDatos (2);
let animal3 = pedirDatos (3);
let animal4 = pedirDatos (4);
let animal5 = pedirDatos (5);

let cont = 1;

//~~~~~~~~~~Codigo~~~~~~~~~~~

let continuar = confirm ('¿Comenzamos el juego?');

if (continuar == true) { 

  //comprobar si alguno esta vivo
while (animal1.vive == true || animal2.vive == true || animal3.vive == true || animal4 == true || animal5 == true) {


//ver en que dia estamos
  mostrarMensaje ('EN EL DIA ' + cont + ':');
//sorteo de comidas
  comida = comer()
  comida2 = comer()
// le toca a animal 1
  if (animal1.num == comida || animal1.num == comida2) {
    //se ahoga
    muere = ahogarse ()
    animal1.vive = muere
    mostrarMensaje (animal1.nombre + ' se ha ahogado y ha muerto :/');
    if (animal1.vive == true) {
      //come
        animal1.edad++
        animal1.diasComer = 0;
    } else {
      //comio un animal muerto
      mostrarMensaje ('Has desperdiciado una comida alimentando un animal muerto') 
    }
  } else {
    //no le toco comer
    animal1.diasComer++
    mostrarMensaje ('Tu animal lleva ' + animal1.diasComer + ' sin comer, ten cuidado, podria morir de hambre.')
  }

//le toca a animal 2
  if (animal2.num == comida || animal2.num == comida2) {
    //se ahoga
    muere = ahogarse ()
    animal2.vive = muere
    mostrarMensaje (animal2.nombre + ' se ha ahogado y ha muerto :/');
    if (animal2.vive == true) {
      //come
        animal2.edad++
        animal2.diasComer = 0;
    } else {
      //comio un animal muerto
      mostrarMensaje ('Has desperdiciado una comida alimentando un animal muerto') 
    }
  } else {
    //no le toco comer
    animal2.diasComer++
    mostrarMensaje ('Tu animal lleva ' + animal2.diasComer + ' sin comer, ten cuidado, podria morir de hambre.')
  }  

// le toca a animal 3
  if (animal3.num == comida || animal3.num == comida2) {
    //se ahoga
    muere = ahogarse ()
    animal3.vive = muere
    mostrarMensaje (animal3.nombre + ' se ha ahogado y ha muerto :/');
    if (animal3.vive == true) {
      //come
        animal3.diasComer = 0;
        animal3.edad++
      } else {
        //comio un animal muerto
        mostrarMensaje ('Has desperdiciado una comida alimentando un animal muerto') 
      }
      } else {
        //no le toco comer
      animal3.diasComer++
      mostrarMensaje ('Tu animal lleva ' + animal3.diasComer + ' sin comer, ten cuidado, podria morir de hambre.')
    }

//le toca a animal 4
  if (animal4.num == comida || animal4.num == comida2) {
    //se ahoga
    muere = ahogarse ()
    animal4.vive = muere
    mostrarMensaje (animal4.nombre + ' se ha ahogado y ha muerto :/');
    if (animal4.vive == true) {
      //come
        animal4.diasComer = 0;
        animal4.edad++
      } else {
        //comio un animal muerto
        mostrarMensaje ('Has desperdiciado una comida alimentando un animal muerto') 
      }
    } else {
      // no le toco comer
      animal4.diasComer++
      mostrarMensaje ('Tu animal lleva ' + animal4.diasComer + ' sin comer, ten cuidado, podria morir de hambre.')
    }
    

//le toca a animal 5
  if (animal5.num == comida || animal5.num == comida2) {
    muere = ahogarse ()
    animal5.vive = muere
    mostrarMensaje (animal5.nombre + ' se ha ahogado y ha muerto :/');
  if (animal5.vive == true) {
    animal5.diasComer = 0;
    animal5.edad++
  } else {
    mostrarMensaje ('Has desperdiciado una comida alimentando un animal muerto') 
}
  } else {
  animal5.diasComer++
  mostrarMensaje ('Tu animal lleva ' + animal5.diasComer + ' sin comer, ten cuidado, podria morir de hambre.')
}

  if (animal1.diasComer == 3){
    animal1.vive = false
    mostrarMensaje (animal1.nombre + 'ha muerto en el dia ' + animal1.edad)
  }
  if (animal2.diasComer == 3){
    animal2.vive = false
    mostrarMensaje (animal2.nombre + 'ha muerto en el dia ' + animal2.edad)
  }
  if (animal3.diasComer == 3){
    animal3.vive = false
    mostrarMensaje (animal3.nombre + 'ha muerto en el dia ' + animal3.edad)
  }
  if (animal4.diasComer == 3){
    animal4.vive = false
    mostrarMensaje (animal4.nombre + 'ha muerto en el dia ' + animal4.edad)
  }
  if (animal5.diasComer == 3){
    animal5.vive = false
    mostrarMensaje (animal5.nombre + 'ha muerto en el dia ' + animal5.edad)
  }
  cont++; 
}
} else {
  mostrarMensajeAl ('okey, entiendo q no quieras jugar al simulador')
  mostrarMensajeAl ('pero yo si quiero asique empecemos')
  while (animal1.vive == true || animal2.vive == true || animal3.vive == true || animal4 == true || animal5 == true) {


    //ver en que dia estamos
      mostrarMensaje ('EN EL DIA ' + cont + ':');
    //sorteo de comidas
      comida = comer ()
      comida2 = comer ()
    // le toca a animal 1
      if (animal1.num == comida || animal1.num == comida2) {
        //se ahoga
        muere = ahogarse ()
        animal1.vive = muere
        mostrarMensaje (animal1.nombre + ' se ha ahogado y ha muerto :/');
        if (animal1.vive == true) {
          //come
            animal1.edad++
            animal1.diasComer = 0;
        } else {
          //comio un animal muerto
          mostrarMensaje ('Has desperdiciado una comida alimentando un animal muerto') 
        }
      } else {
        //no le toco comer
        animal1.diasComer++
        mostrarMensaje ('Tu animal lleva ' + animal1.diasComer + ' sin comer, ten cuidado, podria morir de hambre.')
      }
    
    //le toca a animal 2
      if (animal2.num == comida || animal2.num == comida2) {
        //se ahoga
        muere = ahogarse ()
        animal2.vive = muere
        mostrarMensaje (animal2.nombre + ' se ha ahogado y ha muerto :/');
        if (animal2.vive == true) {
          //come
            animal2.edad++
            animal2.diasComer = 0;
        } else {
          //comio un animal muerto
          mostrarMensaje ('Has desperdiciado una comida alimentando un animal muerto') 
        }
      } else {
        //no le toco comer
        animal2.diasComer++
        mostrarMensaje ('Tu animal lleva ' + animal2.diasComer + ' sin comer, ten cuidado, podria morir de hambre.')
      }  
    
    // le toca a animal 3
      if (animal3.num == comida || animal3.num == comida2) {
        //se ahoga
        muere = ahogarse ()
        animal3.vive = muere
        mostrarMensaje (animal3.nombre + ' se ha ahogado y ha muerto :/');
        if (animal3.vive == true) {
          //come
            animal3.diasComer = 0;
            animal3.edad++
          } else {
            //comio un animal muerto
            mostrarMensaje ('Has desperdiciado una comida alimentando un animal muerto') 
          }
          } else {
            //no le toco comer
          animal3.diasComer++
          mostrarMensaje ('Tu animal lleva ' + animal3.diasComer + ' sin comer, ten cuidado, podria morir de hambre.')
        }
    
    //le toca a animal 4
      if (animal4.num == comida || animal4.num == comida2) {
        //se ahoga
        muere = ahogarse ()
        animal4.vive = muere
        mostrarMensaje (animal4.nombre + ' se ha ahogado y ha muerto :/');
        if (animal4.vive == true) {
          //come
            animal4.diasComer = 0;
            animal4.edad++
          } else {
            //comio un animal muerto
            mostrarMensaje ('Has desperdiciado una comida alimentando un animal muerto') 
          }
        } else {
          // no le toco comer
          animal4.diasComer++
          mostrarMensaje ('Tu animal lleva ' + animal4.diasComer + ' sin comer, ten cuidado, podria morir de hambre.')
        }
        
    
    //le toca a animal 5
      if (animal5.num == comida || animal5.num == comida2) {
        muere = ahogarse ()
        animal5.vive = muere
        mostrarMensaje (animal5.nombre + ' se ha ahogado y ha muerto :/');
      if (animal5.vive == true) {
        animal5.diasComer = 0;
        animal5.edad++
      } else {
        mostrarMensaje ('Has desperdiciado una comida alimentando un animal muerto') 
    }
      } else {
      animal5.diasComer++
      mostrarMensaje ('Tu animal lleva ' + animal5.diasComer + ' sin comer, ten cuidado, podria morir de hambre.')
    }
    
      if (animal1.diasComer == 3){
        animal1.vive = false
        mostrarMensaje (animal1.nombre + 'ha muerto en el dia ' + animal1.edad)
      }
      if (animal2.diasComer == 3){
        animal2.vive = false
        mostrarMensaje (animal2.nombre + 'ha muerto en el dia ' + animal2.edad)
      }
      if (animal3.diasComer == 3){
        animal3.vive = false
        mostrarMensaje (animal3.nombre + 'ha muerto en el dia ' + animal3.edad)
      }
      if (animal4.diasComer == 3){
        animal4.vive = false
        mostrarMensaje (animal4.nombre + 'ha muerto en el dia ' + animal4.edad)
      }
      if (animal5.diasComer == 3){
        animal5.vive = false
        mostrarMensaje (animal5.nombre + 'ha muerto en el dia ' + animal5.edad)
      }
      cont++; 
    }
}


if (animal1.vive == false && animal2.vive == false && animal3.vive == false && animal4.vive == false && animal5.vive == false) {
  mostrarMensaje ('Hasta que murieron todos los animales pasaron ' + cont + 'dias.')
  mostrarMensaje ( animal1.nombre + ' murio a la edad de ' + animal1.edad + ' añitos :(')
  mostrarMensaje ( animal2.nombre + ' murio a la edad de ' + animal2.edad + ' añitos :(')
  mostrarMensaje ( animal3.nombre + ' murio a la edad de ' + animal3.edad + ' añitos :(')
  mostrarMensaje ( animal4.nombre + ' murio a la edad de ' + animal4.edad + ' añitos :(')
  mostrarMensaje ( animal5.nombre + ' murio a la edad de ' + animal5.edad + ' añitos :(')
  
  mostrarMensaje ('Fin del Simulador')
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