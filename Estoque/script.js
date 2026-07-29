//Variáveis
let inputNome = document.getElementById("input-nome"), inputMarca = document.getElementById("input-marca")
let inputValor = document.getElementById("input-valor"), inputEstoque = document.getElementById("input-estoque")
let inputAvaliacao = document.getElementById("input-avaliacao"), inputId = document.getElementById("input-id")

let estoque = []
let Id = 0

carregarDados()
mostrarEstoque()
salvarDados()

//Funções principais (CRUD)
function AdicionarProduto(){

    carregarDados()

    //Produto a ser adicionado
    let novoProduto = {
        nome: inputNome.value,
        marca: inputMarca.value,
        preco: Number(inputValor.value),
        estoque: Number(inputEstoque.value),
        rating: Number(inputAvaliacao.value),
        id: Id
    }
    Id ++
    //adicionar ao array, resetar os inputs e mostrar na página
    estoque.push(novoProduto)
    resetarInputs()
    mostrarEstoque()
    consoleLog()
    salvarDados()
}
function removerProduto(){
    carregarDados()
    //Produto a ser removido
    let produto = Number(inputId.value)

    //Vasculhar array pelo id escolhido
    for(let i = 0; i < estoque.length; i++){
        if(produto == estoque[i].id){
            //Remover produto se produto encontrado
            estoque.splice(i, 1)
        }
    }

    //Atualizar lista e resetar os inputs
    mostrarEstoque()
    resetarInputs()
    consoleLog()
    salvarDados()
}   
function procurarProduto(){
    carregarDados()
    //Produto a ser encontrado
    let produto = inputNome.value

    //Vasculhar array pelo produto
    for(let i = 0; i < estoque.length; i++){
        if(produto == estoque[i].nome){
            //Adicionar valores restantes
            inputMarca.value = estoque[i].marca
            inputValor.value = estoque[i].preco
            inputEstoque.value = estoque[i].estoque
            inputAvaliacao.value = estoque[i].rating
            inputId.value = estoque[i].id
        }
    }
}
function atualizarProduto(){
    carregarDados()
    //Produto a ser atualizado
    let produto = Number(inputId.value)

    //Vasculhar array pelo produto
    for(let i = 0; i < estoque.length; i++){
        if(produto == estoque[i].id){
            //Atualizar valores
            estoque[i].nome = inputNome.value
            estoque[i].marca = inputMarca.value
            estoque[i].preco = inputValor.value
            estoque[i].estoque = inputEstoque.value
            estoque[i].rating = inputAvaliacao.value
        }
    }

    
    resetarInputs()
    mostrarEstoque()
    salvarDados()
}
function alterarEstoque(){
    carregarDados()
    //Quantia a ser alterada e produto a ser alterado
    let quantia = document.getElementById("input-alterarEstoque")
    let produto = inputId.value
    
    //Vasculhar array pelo produto
    for(let i = 0; i < estoque.length; i++){
        if(produto == estoque[i].id){
            //Alterar valor do estoque
            estoque[i].estoque += Number(quantia.value)
        }
    }

    mostrarEstoque()
    procurarProduto()
    salvarDados()
}

//Funções user friendly
function resetarInputs(){
    inputNome.value = ""
    inputMarca.value = ""
    inputValor.value = ""
    inputEstoque.value = ""
    inputAvaliacao.value = ""
    inputId.value = ""

    inputNome.focus()
}
function mostrarEstoque(){
    //Lista
    let listaDeProdutos = document.getElementById("lista-produtos")

    //Resetar lista
    listaDeProdutos.innerHTML = ''

    //Loop para mostrar itens na página
    for(let i = 0; i < estoque.length; i++) {
        listaDeProdutos.innerHTML += `
        <div class = "card-produto">
            <h3>Nome - ${estoque[i].nome}</h3>
            <p>marca: ${estoque[i].marca}</p>
            <p>Valor: ${estoque[i].preco} R$</p>
            <p>Estoque: ${estoque[i].estoque}</p>
            <p>Avaliacao: ${estoque[i].rating}</p>
            <p>ID: ${estoque[i].id}</p>
        </div>
        `
    }
}
function consoleLog(){
    console.log(estoque)
}
function testar(){
    carregarDados()
    estoque = [
        {
        nome: "mouse",
        marca: "razer",
        preco: 120,
        estoque: 7,
        rating: 3.7,
        id: Id
        },
        {
        nome: "gpu",
        marca: "NVIDIA",
        preco: 1563,
        estoque: 12,
        rating: 3.4,
        id: Id + 1
        },
        {
        nome: "monitor",
        marca: "Samgsung",
        preco: 724,
        estoque: 0,
        rating: 4.6,
        id: Id + 2
        },
        {
        nome: "cpu",
        marca: "AMD",
        preco: 630,
        estoque: 0,
        rating: 4.9,
        id: Id + 3
        }
    ]
    Id += 4
    salvarDados()
    mostrarEstoque()
    resetarInputs()
    consoleLog()
}

//Local storage
function salvarDados(){
    localStorage.setItem('estoque', JSON.stringify(estoque))
}
function carregarDados(){
    estoque = JSON.parse(localStorage.getItem('estoque')) || []
}

//Filtros

function filtrar(){
    let filtro = document.getElementById("filtro")
    let listaDeProdutos = document.getElementById("lista-produtos")

    //Tirar estoque da tela
    listaDeProdutos.innerHTML = ""
    
    //Filtrar por estoque maior que 0
    if(filtro.value == "filtro-estoque"){
        for(let i = 0; i < estoque.length; i++){
            if(estoque[i].estoque > 0){
                listaDeProdutos.innerHTML += `
                    <div class = "card-produto">
                    <h3>Nome - ${estoque[i].nome}</h3>
                    <p>marca: ${estoque[i].marca}</p>
                    <p>Valor: ${estoque[i].preco} R$</p>
                    <p>Estoque: ${estoque[i].estoque}</p>
                    <p>Avaliacao: ${estoque[i].rating}</p>
                    <p>ID: ${estoque[i].id}</p>
                    </div>
                    `
            }
        }
    }

    //Filtrar por avaliação
    if(filtro.value == "filtro-avaliacao"){
        for(let i = 0; i < estoque.length; i++){
            if(estoque[i].rating >= 4){
                listaDeProdutos.innerHTML += `
                    <div class = "card-produto">
                    <h3>Nome - ${estoque[i].nome}</h3>
                    <p>marca: ${estoque[i].marca}</p>
                    <p>Valor: ${estoque[i].preco} R$</p>
                    <p>Estoque: ${estoque[i].estoque}</p>
                    <p>Avaliacao: ${estoque[i].rating}</p>
                    <p>ID: ${estoque[i].id}</p>
                    </div>
                    `
            }
        }
    }

    //Sem filtro
    if(filtro.value == "filtro-nada"){
        mostrarEstoque()
    }
}

//Event listeners

inputNome.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        inputMarca.focus()
    }
})

inputMarca.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        inputValor.focus()
    }
})

inputValor.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        inputEstoque.focus()
    }
})

inputEstoque.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        inputAvaliacao.focus()
    }
})

inputAvaliacao.addEventListener("keyup", function(e){
    if(e.key == "Enter"){
        AdicionarProduto()
    }
})