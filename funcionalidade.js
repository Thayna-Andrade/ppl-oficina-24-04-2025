function lerIdade() {
    var idade = parseInt(document.getElementById("entrada").value);

    votacao(idade);
}

function votacao(idade) {
    document.getElementById("resposta").innerHTML = "<div class='tile'>"
    document.getElementById("resposta").innerHTML += `<div class="avatar">${idade}</div>`
    if (idade < 18) {
        document.getElementById("resposta").innerHTML += `<div class="corpo">A pessoa não pode votar</div>`
    } else {
        document.getElementById("resposta").innerHTML += `<div class="tile">A pessoa pode votar</div>`
    }   document.getElementById("resposta").innerHTML += "</div>"
}