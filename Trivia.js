
function joey() {

        alert("Correcto,sigue jugando")
        Jugar()

}
function ross() {

        alert("Correcto,sigue jugando")
        Jugar()

}
function Jugar() {
    var preguntaAleatoria = Math.floor(Math.random() * 2)
    if (preguntaAleatoria==0) {
        var preguntaAleatoria="¿Quién tiene un peluche de pinguino llamado hugsy?"
        joey()
    }
    if (preguntaAleatoria==1) {
        var preguntaAleatoria="Padre de Ben"
        ross()
    }
    console.log(preguntaAleatoria)
}