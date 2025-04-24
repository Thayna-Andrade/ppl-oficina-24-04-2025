function lerIdade(){
    var idade = parseInt(document.getElementById("entrada").value);
}

votacao(idade);

function votacao(idade){
    if(idade < 18){
        document.getElementById("resposta").innerHTML = `<div class="tile">Idade informada: ${idade}</div>`
        document.getElementById("resposta").innerHTML += `<div class="tile">A pessoa não pode votar</div>`
    } else {
         document.getElementById("resposta").innerHTML = `<div class="tile">Idade informada: ${idade}</div>`
    }
    }