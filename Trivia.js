var espacio = $('#espacio')
espacio.hide()
function Jugar() {
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


    pregunta(preguntaAleatoria, 1, preguntas.p1)
    pregunta(preguntaAleatoria, 2, preguntas.p2)
    pregunta(preguntaAleatoria, 3, preguntas.p3)
    pregunta(preguntaAleatoria, 4, preguntas.p4)
    pregunta(preguntaAleatoria, 5, preguntas.p5)
    pregunta(preguntaAleatoria, 6, preguntas.p6)
    pregunta(preguntaAleatoria, 7, preguntas.p7)
    pregunta(preguntaAleatoria, 8, preguntas.p8)
    pregunta(preguntaAleatoria, 9, preguntas.p9)
    pregunta(preguntaAleatoria, 10, preguntas.p10)
    pregunta(preguntaAleatoria, 11, preguntas.p11)
    pregunta(preguntaAleatoria, 12, preguntas.p12)
    pregunta(preguntaAleatoria, 13, preguntas.p13)
    pregunta(preguntaAleatoria, 14, preguntas.p14)
    pregunta(preguntaAleatoria, 15, preguntas.p15)
    pregunta(preguntaAleatoria, 16, preguntas.p16)
    pregunta(preguntaAleatoria, 17, preguntas.p17)
    pregunta(preguntaAleatoria, 18, preguntas.p18)
    pregunta(preguntaAleatoria, 19, preguntas.p19)
    pregunta(preguntaAleatoria, 20, preguntas.p20)
    pregunta(preguntaAleatoria, 21, preguntas.p21)
    pregunta(preguntaAleatoria, 22, preguntas.p22)
    pregunta(preguntaAleatoria, 23, preguntas.p23)
    pregunta(preguntaAleatoria, 24, preguntas.p24)
    pregunta(preguntaAleatoria, 25, preguntas.p25)
    pregunta(preguntaAleatoria, 26, preguntas.p26)
    pregunta(preguntaAleatoria, 27, preguntas.p27)
    pregunta(preguntaAleatoria, 28, preguntas.p28)
    pregunta(preguntaAleatoria, 29, preguntas.p29)
    pregunta(preguntaAleatoria, 30, preguntas.p30)
    pregunta(preguntaAleatoria, 31, preguntas.p31)
    pregunta(preguntaAleatoria, 32, preguntas.p32)
    pregunta(preguntaAleatoria, 33, preguntas.p33)
    pregunta(preguntaAleatoria, 34, preguntas.p34)
    pregunta(preguntaAleatoria, 35, preguntas.p35)
    pregunta(preguntaAleatoria, 36, preguntas.p36)
    pregunta(preguntaAleatoria, 37, preguntas.p37)
    pregunta(preguntaAleatoria, 38, preguntas.p38)
    pregunta(preguntaAleatoria, 39, preguntas.p39)
    pregunta(preguntaAleatoria, 40, preguntas.p40)
    pregunta(preguntaAleatoria, 41, preguntas.p41)
    pregunta(preguntaAleatoria, 42, preguntas.p42)
    pregunta(preguntaAleatoria, 43, preguntas.p43)
    pregunta(preguntaAleatoria, 44, preguntas.p44)
    pregunta(preguntaAleatoria, 45, preguntas.p45)
    pregunta(preguntaAleatoria, 46, preguntas.p46)
    pregunta(preguntaAleatoria, 47, preguntas.p47)
    pregunta(preguntaAleatoria, 48, preguntas.p48)
    pregunta(preguntaAleatoria, 49, preguntas.p49)
    pregunta(preguntaAleatoria, 50, preguntas.p50)
    pregunta(preguntaAleatoria, 51, preguntas.p51)
    pregunta(preguntaAleatoria, 52, preguntas.p52)
    pregunta(preguntaAleatoria, 53, preguntas.p53)
    pregunta(preguntaAleatoria, 54, preguntas.p54)
    pregunta(preguntaAleatoria, 55, preguntas.p55)
    pregunta(preguntaAleatoria, 56, preguntas.p56)
    pregunta(preguntaAleatoria, 57, preguntas.p57)
    pregunta(preguntaAleatoria, 58, preguntas.p58)
    pregunta(preguntaAleatoria, 59, preguntas.p59)
    pregunta(preguntaAleatoria, 60, preguntas.p60)
    pregunta(preguntaAleatoria, 61, preguntas.p61)
    pregunta(preguntaAleatoria, 62, preguntas.p62)
    pregunta(preguntaAleatoria, 63, preguntas.p63)
    pregunta(preguntaAleatoria, 64, preguntas.p64)
    pregunta(preguntaAleatoria, 65, preguntas.p65)
    pregunta(preguntaAleatoria, 66, preguntas.p66)
    pregunta(preguntaAleatoria, 67, preguntas.p67)
    pregunta(preguntaAleatoria, 68, preguntas.p68)
    pregunta(preguntaAleatoria, 69, preguntas.p69)
    pregunta(preguntaAleatoria, 70, preguntas.p70)
    pregunta(preguntaAleatoria, 71, preguntas.p71)
    pregunta(preguntaAleatoria, 72, preguntas.p72)
    pregunta(preguntaAleatoria, 73, preguntas.p73)
    pregunta(preguntaAleatoria, 74, preguntas.p74)
    pregunta(preguntaAleatoria, 75, preguntas.p75)
    pregunta(preguntaAleatoria, 76, preguntas.p76)
    pregunta(preguntaAleatoria, 77, preguntas.p77)
    pregunta(preguntaAleatoria, 78, preguntas.p78)
    pregunta(preguntaAleatoria, 79, preguntas.p79)
    pregunta(preguntaAleatoria, 80, preguntas.p80)
    pregunta(preguntaAleatoria, 81, preguntas.p81)
    pregunta(preguntaAleatoria, 82, preguntas.p82)
    pregunta(preguntaAleatoria, 83, preguntas.p83)
    pregunta(preguntaAleatoria, 84, preguntas.p84)
    pregunta(preguntaAleatoria, 85, preguntas.p85)
    pregunta(preguntaAleatoria, 86, preguntas.p86)
    pregunta(preguntaAleatoria, 87, preguntas.p87)
    pregunta(preguntaAleatoria, 88, preguntas.p88)
    pregunta(preguntaAleatoria, 89, preguntas.p89)
    pregunta(preguntaAleatoria, 90, preguntas.p90)
    pregunta(preguntaAleatoria, 91, preguntas.p91)
    pregunta(preguntaAleatoria, 92, preguntas.p92)
    pregunta(preguntaAleatoria, 93, preguntas.p93)
    pregunta(preguntaAleatoria, 94, preguntas.p94)
    pregunta(preguntaAleatoria, 95, preguntas.p95)
    pregunta(preguntaAleatoria, 96, preguntas.p96)
    pregunta(preguntaAleatoria, 97, preguntas.p97)
    pregunta(preguntaAleatoria, 98, preguntas.p98)
    pregunta(preguntaAleatoria, 99, preguntas.p99)
    pregunta(preguntaAleatoria, 100, preguntas.p100)
    pregunta(preguntaAleatoria, 101, preguntas.p101)
    pregunta(preguntaAleatoria, 102, preguntas.p102)
    pregunta(preguntaAleatoria, 103, preguntas.p103)
    pregunta(preguntaAleatoria, 104, preguntas.p104)
    pregunta(preguntaAleatoria, 105, preguntas.p105)
    pregunta(preguntaAleatoria, 106, preguntas.p106)
    pregunta(preguntaAleatoria, 107, preguntas.p107)
    pregunta(preguntaAleatoria, 108, preguntas.p108)
    pregunta(preguntaAleatoria, 109, preguntas.p109)
    pregunta(preguntaAleatoria, 110, preguntas.p110)
    pregunta(preguntaAleatoria, 111, preguntas.p111)
    pregunta(preguntaAleatoria, 112, preguntas.p112)
    pregunta(preguntaAleatoria, 113, preguntas.p113)
    pregunta(preguntaAleatoria, 114, preguntas.p114)
    pregunta(preguntaAleatoria, 115, preguntas.p115)
    pregunta(preguntaAleatoria, 116, preguntas.p116)
    pregunta(preguntaAleatoria, 117, preguntas.p117)
    pregunta(preguntaAleatoria, 118, preguntas.p118)
    pregunta(preguntaAleatoria, 119, preguntas.p119)
    pregunta(preguntaAleatoria, 120, preguntas.p120)

    if(preguntaAleatoria <= 20 && preguntaAleatoria >= 1) {
        document.getElementById('Ross').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria=0
            console.log(preguntaAleatoria)
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
    if(preguntaAleatoria <= 40 && preguntaAleatoria >= 20) {
        document.getElementById('Rachel').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria=0
            console.log(preguntaAleatoria)
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
    if(preguntaAleatoria <= 60 && preguntaAleatoria >= 40) {
        document.getElementById('Joey').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria=0
            console.log(preguntaAleatoria)
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
    if(preguntaAleatoria <= 80 && preguntaAleatoria >= 60) {
        document.getElementById('Chandler').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria=0
            console.log(preguntaAleatoria)
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
    if(preguntaAleatoria <= 100 && preguntaAleatoria >= 80) {
        document.getElementById('Monica').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria=0
            console.log(preguntaAleatoria)
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
    if(preguntaAleatoria <= 120 && preguntaAleatoria >= 100) {
        document.getElementById('Phoebe').addEventListener('click', function () {
            console.log("Respuesta correcta")
            preguntaAleatoria=0
            console.log(preguntaAleatoria)
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
}

function pregunta(preguntaAleatoria, opcion, opciones) {
    // var espacio= $('#Espacio')
    if (preguntaAleatoria == opcion) {
        // espacio.append(opciones)
        alert(opciones)
    }
}