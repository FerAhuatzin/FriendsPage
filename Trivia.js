var espacio = $('#espacio')
espacio.hide()
function Jugar() {
    var array = []
    var jugar = $('#Jugar')
    jugar.hide()
    espacio.show()
    var preguntas = {
        p1: "Tiene un hijo llamado Ben",
        p2: "Esposo de Rachel",
        p3: "Se casó tres veces",
        p4: "UNAGIII",
        p5: "Conoció a Chandler en la universidad",
        p6: "Hermano de Monica",
        p7: "Tuvo una novia llamada Emily",
        p8: "Es paleontólogo",
        p9: "Tuvo de macota un mono llamado Marcel",
        p10: "Consiguió una novia llamada Julie después de un viaje a China",
        p11: "WE WHERE ON A BREAK",
        p12: "Su primera esposa resultó ser lesbiana",
        p13: "Se vistió de Armadillo en navidad para conmemorar jánuca y enseñarle a su hijo sus raices judías",
        p14: "Su frase habitual es: HI",
        p15: "Jugó Rugby una vez para impresionar a su novia",
        p16: "Se casó en las vegas por tercera vez",
        p17: "Confundió el nombre de su esposa en el altar",
        p18: "Fué despedido de su trabajo después de un ataque de ira contra su jefe porque se comió su sandwich",
        p19: "Interpretado por David Schwimmer",
        p20: "Salió con una de sus estudiantes",
        p21: "Esposa de Ross",
        p22: "Dejó en el altar a su comprometido",
        p23: "Tuvo un novio Italiano llamado Paolo",
        p24: "Tiene una hija con Ross",
        p25: "Trabaja de diseñadora de modas",
        p26: "Tuvo un novio llamado Barry",
        p27: "Su familia es rica",
        p28: "Conocía a Monica desde la preparatoria",
        p29: "Trabajó en Central Perk de mesera",
        p30: "Tiene dos hermanas",
        p31: "Salió con el papá de una de las novias de Ross",
        p32: "Su frase habitual es NOO",
        p33: "De joven se operó la nariz",
        p34: "Fué dama de honor en la boda de su exnovio con su mejor amiga",
        p35: "La más joven del grupo",
        p36: "Salió con Joey por un tiempo",
        p37: "Vivió con Monica gran parte de la serie",
        p38: "Gunther estaba enamorado de ella",
        p39: "Interpretado por Jennifer Aniston",
        p40: "Es la que mejor se viste del grupo",
        p41: "HOW YOU DOIN?",
        p42: "No comparte comida",
        p43: "Mejor amigo de Chandler",
        p44: "Creció con 7 hermanas",
        p45: "Es actor",
        p46: "Interpretado por Matt le Blanc",
        p47: "Tiene ascendencia italiana",
        p48: "Tiene un peluche de pinguino llamado Huggsy",
        p49: "Hace del Dr. Drake Ramoray",
        p50: "Fué el rabino en la boda de Cahandler y Monica",
        p51: "Fánatico de los knicks,Rangers,Giants y yankees",
        p52: "Se caracteriza por ser mujeriego",
        p53: "Ama la comida",
        p54: "Su comida favorita son las albóndigas",
        p55: "Fué contratado para una pélicula en las vegas  que nunca se realizó",
        p56: "Tiene un amigo imaginario llamado Maurice",
        p57: "Trabajó en el caesars palace",
        p58: "Se enamoró de su compañera que luego se mudó a Los Angeles",
        p59: "Jamás ha roto una promesa",
        p60: "No tiene habilidades matemáticas",
        p61: "Interpretado por Matthew Perry",
        p62: "Su mamá es una escritora érotica",
        p63: "Janice",
        p64: "Su padre es un travesti que trabaja en las Vegas",
        p65: "Odia el día de acción de gracias",
        p66: "Esposo de Monica",
        p67: "Roomie de Joey la mayor parte de la serie",
        p68: "Trabaja en una agencia de publicidad",
        p69: "Trabajó en analisis estadístico la mayor parte de la serie",
        p70: "Hace chistes cuando está incómodo",
        p71: "No le agradan los perros",
        p72: "Tuvo dos hijos adoptivos con mónica",
        p73: "Could i be more...",
        p74: "Personaje del grupo que se burla más de los demás",
        p75: "Solía fumar excesivamente",
        p76: "Su jefe solía darle nalgadas",
        p77: "Un tiempo vivió en Tulsa",
        p78: "Conoció a Ross en la universidad",
        p79: "No le gusta su apellido",
        p80: "Es medio escocés",
        p81: "Hermana de Ross",
        p82: "Esposa de Chandler",
        p83: "Obsesiva con el orden",
        p84: "I KNOOOW",
        p85: "Hubo un momento de la serie donde se puso rastas",
        p86: "Dueña del apartamento donde transcurre gran parte de la serie",
        p87: "Conoció a Rachel en la preparatoria",
        p88: "Solía tener obesidad",
        p89: "Trabaja en el mundo de la cocina",
        p90: "Personaje que tiene una manera peculiar de insultar a su hermano",
        p91: "Fué novio del mejor amigo de su papá",
        p92: "Tuvo un novio inventor de un famoso software",
        p93: "Conoció a Chandler en una cena de acción de gracias",
        p94: "Salió con un chico de preparatoria una vez",
        p95: "La interpreta Courney Cox",
        p96: "Es la más competitiva del grupo",
        p97: "Es el personaje que mejor juega futbolito",
        p98: "Usualmente se le refiere como mandona",
        p99: "Siempre quiso tener hijos",
        p100: "Es alérgica a los gatos",
        p101: "Interpretada por Lisa Kudrow",
        p102: "Regina Falange",
        p103: "Tiene una hermana gemela",
        p104: "Se embarazó de trillizos",
        p105: "Tiene un hermano",
        p106: "Creció con su abuela",
        p107: "Compositora de Smelly Cat",
        p108: "Habla frances",
        p109: "Es masajista",
        p110: "Es vegetariana",
        p111: "A menudo se le puede considerar ingenua",
        p112: "Odia las tiendas de cadena",
        p113: "Hubo un tiempo de su vida donde vivía en las calles",
        p114: "Aveces hace presentaciones musicales en Central Perk",
        p115: "Eventualmente para salirse con la suya menciona la muerte de su madre",
        p116: "Esposa de Mike",
        p117: "Se casó con un patinador canadiense para que el pudiera residir en Estados Unidos",
        p118: "No cree en la gravedad",
        p119: "Pensaba que su madre reencarnó en un gato",
        p120: "Tuvo una infancia caótica",
    }

    var preguntaAleatoria = Math.floor(Math.random() * (120) + 1)
    console.log(preguntaAleatoria)

    var contador = 1;

    for (const key in preguntas) {
        if (preguntas.hasOwnProperty(key)) {
            const element = preguntas[key];
            pregunta(array, preguntaAleatoria, contador, element)
            contador++
        }
    }

    // var Ross = $("#Ross")
    // var Rachel = $('#Rachel')
    // var Joey = $('#Joey')
    // var Chandler = $('#Chandler')
    // var Monica = $('#Monica')
    // var Phoebe = $('#Phoebe')

    // respuesta(Ross, Rachel, Joey, Chandler, Monica, Phoebe, 1, 20, preguntaAleatoria, array)
    // respuesta(Rachel, Joey, Chandler, Monica, Phoebe, Ross, 21, 40, preguntaAleatoria, array)
    // respuesta(Joey, Chandler, Monica, Phoebe, Ross, Rachel, 41, 60, preguntaAleatoria, array)
    // respuesta(Chandler, Monica, Phoebe, Ross, Rachel, Joey, 61, 80, preguntaAleatoria, array)
    // respuesta(Monica, Phoebe, Ross, Rachel, Joey, Chandler, 81, 100, preguntaAleatoria, array)
    // respuesta(Phoebe, Ross, Rachel, Joey, Chandler, Monica, 101, 120, preguntaAleatoria, array)


    if (preguntaAleatoria <= 20 && preguntaAleatoria >= 1) {
        document.getElementById('Ross').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria = 0
            console.log(preguntaAleatoria)
            array.pop(0)
            console.log(array)
            remover()
            Jugar()

        })
        document.getElementById('Rachel').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Joey').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Chandler').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Monica').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Phoebe').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
    }
    if (preguntaAleatoria <= 40 && preguntaAleatoria >= 21) {
        document.getElementById('Rachel').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria = 0
            console.log(preguntaAleatoria)
            array.pop(0)
            remover()
            Jugar()

        })
        document.getElementById('Ross').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Joey').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Chandler').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Monica').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Phoebe').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
    }
    if (preguntaAleatoria <= 60 && preguntaAleatoria >= 41) {
        document.getElementById('Joey').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria = 0
            console.log(preguntaAleatoria)
            array.pop(0)
            remover()
            Jugar()

        })
        document.getElementById('Rachel').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Ross').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Chandler').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Monica').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Phoebe').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
    }
    if (preguntaAleatoria <= 80 && preguntaAleatoria >= 61) {
        document.getElementById('Chandler').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria = 0
            console.log(preguntaAleatoria)
            array.pop(0)
            remover()
            Jugar()

        })
        document.getElementById('Rachel').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Joey').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Ross').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Monica').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Phoebe').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
    }
    if (preguntaAleatoria <= 100 && preguntaAleatoria >= 81) {
        document.getElementById('Monica').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria = 0
            console.log(preguntaAleatoria)
            array.pop(0)
            remover()
            Jugar()

        })
        document.getElementById('Rachel').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Joey').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Chandler').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Ross').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Phoebe').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
    }
    if (preguntaAleatoria <= 120 && preguntaAleatoria >= 101) {
        document.getElementById('Phoebe').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria = 0
            console.log(preguntaAleatoria)
            array.pop(0)
            remover()
            Jugar()

        })
        document.getElementById('Rachel').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Joey').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Chandler').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Monica').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
        document.getElementById('Ross').addEventListener('click', function () {
            console.log("Respuesta incorrecta")

        })
    }
    array.pop(0)
}

function pregunta(array, preguntaAleatoria, opcion, opciones) {
    var espacio = $('#espacio')
    if (preguntaAleatoria == opcion) {
        array.push(opciones)
        var p = document.createElement("p")
        p.append(array)
        espacio.append(p)
        console.log(p)
    }
}

function remover() {
    var texto = $('p')
    texto.hide()
}

// function respuesta(R1, R2, R3, R4, R5, R6, min, max, preguntaAleatoria, array) {
//     if (preguntaAleatoria >= min && preguntaAleatoria <= max) {
//         R1 = addEventListener('click', function () {
//             console.log("Respuesta correcta")
//             preguntaAleatoria=0
//             array.pop(0)
//             remover()
//             Jugar()
//         })
//         respuestaIncorrecta(R2)
//         respuestaIncorrecta(R3)
//         respuestaIncorrecta(R4)
//         respuestaIncorrecta(R5)
//         respuestaIncorrecta(R6)
//     }
// }
// function respuestaIncorrecta(R) {
//     R = addEventListener('click', function () {
//         console.log("Respuesta incorrecta")
//     })
// }