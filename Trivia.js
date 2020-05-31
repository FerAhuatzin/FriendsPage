var espacio = $('#espacio')
espacio.hide()

function Jugar(puntos) {
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

    if (preguntaAleatoria <= 20 && preguntaAleatoria >= 1) {
        document.getElementById('Ross').addEventListener('click', function respuestaRoss() {
            console.log("Respuesta correcta")

            array.pop(0)
            document.getElementById('Ross').removeEventListener('click', respuestaRoss)
            puntos++
            remover()
            Jugar(puntos)

        })

        document.getElementById('Rachel').addEventListener('click', function respuestaRachel() {
            remover()
            puntaje(puntos)
            document.getElementById('Rachel').removeEventListener('click', respuestaRachel)
        })

        document.getElementById('Joey').addEventListener('click', function respuestaJoey() {
            remover()
            puntaje(puntos)
            document.getElementById('Joey').removeEventListener('click', respuestaJoey)
        })

        document.getElementById('Chandler').addEventListener('click', function respuestaChandler() {
            remover()
            puntaje(puntos)
            document.getElementById('Chandler').removeEventListener('click', respuestaChandler)
        })

        document.getElementById('Monica').addEventListener('click', function respuestaMonica() {
            remover()
            puntaje(puntos)
            document.getElementById('Monica').removeEventListener('click', respuestaMonica)

        })

        document.getElementById('Phoebe').addEventListener('click', function respuestaPhoebe() {
            remover()
            puntaje(puntos)
            document.getElementById('Phoebe').removeEventListener('click', respuestaPhoebe)
        })
    }
    if (preguntaAleatoria <= 40 && preguntaAleatoria >= 21) {
        document.getElementById('Rachel').addEventListener('click', function respuestaRachel1() {
            console.log("Respuesta correcta")

            array.pop(0)
            document.getElementById('Rachel').removeEventListener('click', respuestaRachel1)
            puntos++
            remover()
            Jugar(puntos)

        })

        document.getElementById('Ross').addEventListener('click', function respuestaRoss1() {
            remover()
            puntaje(puntos)
            document.getElementById('Ross').removeEventListener('click', respuestaRoss1)

        })

        document.getElementById('Joey').addEventListener('click', function respuestaJoey1() {
            remover()
            puntaje(puntos)
            document.getElementById('Joey').removeEventListener('click', respuestaJoey1)
        })

        document.getElementById('Chandler').addEventListener('click', function respuestaChandler1() {
            remover()
            puntaje(puntos)
            document.getElementById('Chandler').removeEventListener('click', respuestaChandler1)
        })

        document.getElementById('Monica').addEventListener('click', function respuestaMonica1() {
            remover()
            puntaje(puntos)
            document.getElementById('Monica').removeEventListener('click', respuestaMonica1)

        })

        document.getElementById('Phoebe').addEventListener('click', function respuestaPhoebe1() {
            remover()
            puntaje(puntos)
            document.getElementById('Phoebe').removeEventListener('click', respuestaPhoebe1)
        })
    }
    if (preguntaAleatoria <= 60 && preguntaAleatoria >= 41) {
        document.getElementById('Joey').addEventListener('click', function respuestaJoey2() {
            console.log("Respuesta correcta")

            array.pop(0)
            document.getElementById('Joey').removeEventListener('click', respuestaJoey2)
            puntos++
            remover()
            Jugar(puntos)

        })

        document.getElementById('Rachel').addEventListener('click', function respuestaRachel2() {
            remover()
            puntaje(puntos)
            document.getElementById('Rachel').removeEventListener('click', respuestaRachel2)
        })

        document.getElementById('Ross').addEventListener('click', function respuestaRoss2() {
            remover()
            puntaje(puntos)
            document.getElementById('Ross').removeEventListener('click', respuestaRoss2)
        })

        document.getElementById('Chandler').addEventListener('click', function respuestaChandler2() {
            remover()
            puntaje(puntos)
            document.getElementById('Chandler').removeEventListener('click', respuestaChandler2)
        })

        document.getElementById('Monica').addEventListener('click', function respuestaMonica2() {
            remover()
            puntaje(puntos)
            document.getElementById('Monica').removeEventListener('click', respuestaMonica2)
        })

        document.getElementById('Phoebe').addEventListener('click', function respuestaPhoebe2() {
            remover()
            puntaje(puntos)
            document.getElementById('Phoebe').removeEventListener('click', respuestaPhoebe2)
        })
    }
    if (preguntaAleatoria <= 80 && preguntaAleatoria >= 61) {
        document.getElementById('Chandler').addEventListener('click', function respuestaChandler3() {
            console.log("Respuesta correcta")

            array.pop(0)
            document.getElementById('Chandler').removeEventListener('click', respuestaChandler3)
            puntos++
            remover()
            Jugar(puntos)

        })

        document.getElementById('Rachel').addEventListener('click', function respuestaRachel3() {
            remover()
            puntaje(puntos)
            document.getElementById('Rachel').removeEventListener('click', respuestaRachel3)
        })

        document.getElementById('Joey').addEventListener('click', function respuestaJoey3() {
            remover()
            puntaje(puntos)
            document.getElementById('Joey').removeEventListener('click', respuestaJoey3)
        })

        document.getElementById('Ross').addEventListener('click', function respuestaRoss3() {
            remover()
            puntaje(puntos)
            document.getElementById('Ross').removeEventListener('click', respuestaRoss3)
        })

        document.getElementById('Monica').addEventListener('click', function respuestaMonica3() {
            remover()
            puntaje(puntos)
            document.getElementById('Monica').removeEventListener('click', respuestaMonica3)
        })
        document.getElementById('Phoebe').addEventListener('click', function respuestaPhoebe3() {
            remover()
            puntaje(puntos)
            document.getElementById('Phoebe').removeEventListener('click', respuestaPhoebe3)
        })
    }
    if (preguntaAleatoria <= 100 && preguntaAleatoria >= 81) {
        document.getElementById('Monica').addEventListener('click', function respuestaMonica4() {
            console.log("Respuesta correcta")

            array.pop(0)
            document.getElementById('Monica').removeEventListener('click', respuestaMonica4)
            puntos++
            remover()
            Jugar(puntos)

        })

        document.getElementById('Rachel').addEventListener('click', function respuestaRachel4() {
            remover()
            puntaje(puntos)
            document.getElementById('Rachel').removeEventListener('click', respuestaRachel4)
        })

        document.getElementById('Joey').addEventListener('click', function respuestaJoey4() {
            remover()
            puntaje(puntos)
            document.getElementById('Joey').removeEventListener('click', respuestaJoey4)
        })

        document.getElementById('Chandler').addEventListener('click', function respuestaChandler4() {
            remover()
            puntaje(puntos)
            document.getElementById('Chandler').removeEventListener('click', respuestaChandler4)
        })

        document.getElementById('Ross').addEventListener('click', function respuestaRoss4() {
            remover()
            puntaje(puntos)
            document.getElementById('Ross').removeEventListener('click', respuestaRoss4)
        })

        document.getElementById('Phoebe').addEventListener('click', function respuestaPhoebe4() {
            remover()
            puntaje(puntos)
            document.getElementById('Phoebe').removeEventListener('click', respuestaPhoebe4)
        })
    }
    if (preguntaAleatoria <= 120 && preguntaAleatoria >= 101) {
        document.getElementById('Phoebe').addEventListener('click', function respuestaPhoebe5() {
            console.log("Respuesta correcta")

            array.pop(0)
            document.getElementById('Phoebe').removeEventListener('click', respuestaPhoebe5)
            puntos++
            remover()
            Jugar(puntos)

        })
        document.getElementById('Rachel').addEventListener('click', function respuestaRachel5() {
            remover()
            puntaje(puntos)
            document.getElementById('Rachel').removeEventListener('click', respuestaRachel5)
        })

        document.getElementById('Joey').addEventListener('click', function respuestaJoey5() {
            remover()
            puntaje(puntos)
            document.getElementById('Joey').removeEventListener('click', respuestaJoey5)
        })

        document.getElementById('Chandler').addEventListener('click', function respuestaChandler5() {
            remover()
            puntaje(puntos)
            document.getElementById('Chandler').removeEventListener('click', respuestaChandler5)
        })

        document.getElementById('Monica').addEventListener('click', function respuestaMonica5() {
            remover()
            puntaje(puntos)
            document.getElementById('Monica').removeEventListener('click', respuestaMonica5)
        })

        document.getElementById('Ross').addEventListener('click', function respuestaRoss5() {
            remover()
            puntaje(puntos)
            document.getElementById('Ross').removeEventListener('click', respuestaRoss5)
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
function puntaje(puntos) {
    if (puntos <= 5) {
        var p = document.createElement("p")
        p.append("Obtuviste " + puntos + ": Aparentemente a alguien no le gusta tanto friends")
        espacio.append(p)
    }
    if (puntos>=6 && puntos<=19) {
        var p = document.createElement("p")
        p.append("Obtuviste " + puntos + ": vamos puedes hacerlo mejor")
        espacio.append(p)
    }

    if (puntos <= 20 && puntos >= 69) {
        var p = document.createElement("p")
        p.append("Obtuviste " + puntos + ": Nada mal eh, intentalo de nuevo!")
        espacio.append(p)
    }

     if(puntos <= 50 && puntos >= 21){
        var p = document.createElement("p")
        p.append("Obtuviste " + puntos + ": Guaau impresionante eres todo un conocedor de Friends!!!")
        espacio.append(p)
     }
    
    if(puntos <= 99 && puntos >= 51){
        var p = document.createElement("p")
        p.append("Obtuviste " + puntos + ": Pero que gran puntaje!!! parece que ya te viste la serie más de una vez")
        espacio.append(p)
    }
   
     if(puntos >= 100){
        var p = document.createElement("p")
        p.append("Obtuviste " + puntos + ": Eres toda una máquina de sabiduría de friends, parece que te sabes los episodios de memoria!!!")
        espacio.append(p)
     }
}

