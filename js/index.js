var lista = []
function adicionando(body){
    
    var texto01 = document.getElementById("texto01").value
    var texto02 = document.getElementById("texto02").value
    var texto03 = document.getElementById("texto03").value
    var tabela = document.getElementById("tabela_compra")
    texto03 = parseFloat(texto03)

    var linha = document.createElement("tr")
    var elemento01 = document.createElement("td")
    elemento01.setAttribute("scope", 'row')

    var elemento02 = document.createElement("td")


    var elemento03 = document.createElement("td")
    elemento03.setAttribute("id", `preco_${lista.length}`)

    var elemento04 = document.createElement("td")

    elemento01.innerText = texto01
    elemento02.innerText = texto02
    elemento03.innerText = texto03

    var total = texto02 * texto03
    elemento04.innerText = total

    linha.appendChild(elemento01);
    linha.appendChild(elemento02);
    linha.appendChild(elemento03);
    linha.appendChild(elemento04);
    lista.push(texto03)
    
    
    var teste = Math.min(...lista)

    if (teste === texto03){
        document.body.style.color = "white"
        elemento03.style.color = "green"
    } 
    else{
        elemento03.style.color = "white"
    }

    tabela.appendChild(linha);
    
    
    
}