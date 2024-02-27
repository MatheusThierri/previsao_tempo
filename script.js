const key = "(key removida por segurança)"

function colocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = "Temperatura: " + Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".max").innerHTML = "Máxima: " + Math.floor(dados.main.temp_max) + "°C"; 
    document.querySelector(".min").innerHTML = "Mínima: " + Math.floor(dados.main.temp_min) + "°C"; 
}

async function buscarCidade(cidade){

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())
    
    colocarDadosNaTela(dados);
 
}

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade)
}
