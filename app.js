// El principal objetivo de este desafío es fortalecer tus habilidades
//  en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = []

function agregarAmigo() {
    let amigo_del_usuario = document.getElementById("amigo").value
    if (amigo_del_usuario === "") {
        alert("Por favor, inserte un nombre")
    } else {
        console.log("no esta vacio")
        amigos.push(amigo_del_usuario)
        console.log(amigos)
        let mostrar_lista = document.getElementById("listaAmigos")
        mostrar_lista.innerHTML += `<li>${amigo_del_usuario}</li>`
        limpiar()
    }
}

function indice_ramdon() {
    return Math.floor(Math.random()*amigos.length)
}

function sortearAmigo() {
    if (amigos.length == 0) {
        console.log("la lista esta vacia")
        alert("la lista esta vacia")
    }else {
    let indice = indice_ramdon()
    console.log(amigos[indice])
    let sorteado = document.getElementById("resultado")
    sorteado.innerHTML = `<h2>El amigo sorteado es: ${amigos[indice]}</h2>`
    amigos = document.getElementById("listaAmigos")
    amigos.innerHTML = ""
    amigos = []
    }
}

function limpiar() {
    let valor_de_caja = document.getElementById("amigo")
    valor_de_caja.value = ""
}