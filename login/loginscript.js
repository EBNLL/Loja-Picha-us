let adms = []
let usuarios = []

function mudarTela() {

    const telas = document.querySelectorAll(".tela")
    telas.forEach(function (tela) {
        tela.classList.remove("ativa")
    })

}

function telaInicial() {

    window.location = "http://127.0.0.1:5500/Loja-Picha-us/principal/index.html"

}

function telaLogin() {

    mudarTela()
    document.getElementById("section-login").classList.add("ativa")

}

function telaCadastro() {

    mudarTela()
    document.getElementById("section-cadastro").classList.add("ativa")

}

function telaExcluir() {

    mudarTela()
    document.getElementById("section-excluir").classList.add("ativa")

}

function telaCadastroAdm() {

    let senha = prompt("Qual a senha?")

    if (senha == "adm123") {

        mudarTela()
        document.getElementById("section-cadastroAdm").classList.add("ativa")

    }

    else {

        document.getElementById("aviso-login")

    }
}

function cadastrarAdm() {

    carregarDados()

    let confirmarSenha = document.getElementById("input-confirmarSenhaAdm").value

    let novoAdm = {

        id: Date.now(),
        nomeAdm: document.getElementById("input-nomeAdm").value,
        emailAdm: document.getElementById("input-emailAdm").value,
        senhaAdm: document.getElementById("input-senhaAdm").value

    }

    if (novoAdm.senhaAdm == confirmarSenha) {

        if (novoAdm.nomeAdm != "" && novoAdm.emailAdm != "" && novoAdm.senhaAdm != "") {

            document.getElementById("aviso-cadastroAdm").innerHTML = ""
            adms.push(novoAdm)
            telaLogin()

        }

        else {

            document.getElementById("aviso-cadastroAdm").innerHTML = "Teste"

        }

    }

    else {

        document.getElementById("aviso-cadastroAdm").innerHTML = "Senha errada"

    }

    salvar()

    console.log(adms)
}

function cadastrarUsuarios() {

    carregarDados()

    let confirmarSenha = document.getElementById("input-confirmarSenha").value

    let novoUsuario = {

        id: Date.now(),
        nomeDoUsuario: document.getElementById("input-nome").value,
        sobrenomeDoUsuario: document.getElementById("input-sobrenome").value,
        email: document.getElementById("input-email").value,
        senha: document.getElementById("input-senha").value,
        dataDeNascimento: document.getElementById("input-nascimento").value,

    }

    if (novoUsuario.senha == confirmarSenha) {

        if (novoUsuario.nomeDoUsuario != "" && novoUsuario.sobrenomeDoUsuario != ""
            && novoUsuario.email != "" && novoUsuario.senha != "" &&
            novoUsuario.dataDeNascimento != "") {

            document.getElementById("aviso-cadastro").innerHTML = ""
            usuarios.push(novoUsuario)
            telaLogin()

        }

        else {

            document.getElementById("aviso-cadastro").innerHTML = "Teste"

        }

    }

    else {

        document.getElementById("aviso-cadastro").innerHTML = "Senha errada"

    }

    salvar()

    console.log(usuarios)
    console.log(novoUsuario.aceitouOsTermos)
}

function entrarNoSite() {

    carregarDados()

    let loginEmail = document.getElementById("input-login-email").value
    let loginsenha = document.getElementById("input-login-senha").value

    for (i = 0; i < usuarios.length; i++) {

        if (loginEmail == usuarios[i].email && loginsenha == usuarios[i].senha) {

            localStorage.setItem("usuarioLogado", loginEmail)
            window.location = "http://127.0.0.1:5500/Loja-Picha-us/principal/index.html"

        }

        else {

            document.getElementById("aviso-login").innerHTML = "Teste"

        }
    }
    for (i = 0; i < adms.length; i++) {

        if (loginEmail == adms[i].emailAdm && loginsenha == adms[i].senhaAdm) {

            window.location = "http://127.0.0.1:5500/Loja-Picha-us/Estoque/index.html"

        }

        else {

            document.getElementById("aviso-login").innerHTML = "Teste"

        }
    }

    salvar()

}

function excluirConta() {

    carregarDados()

    let nome = document.getElementById("input-nome-excluir").value
    let email = document.getElementById("input-login-email-excluir").value
    let senha = document.getElementById("input-login-senha-excluir").value

    for (i = 0; i < usuarios.length; i++) {

        if (nome == usuarios[i].nome && email == usuarios[i].email && email == usuarios[i].senha) {

            usuarios.splice(i, 1)

        }

        else {

            document.getElementById("aviso-login").innerHTML = "Teste"

        }
    }
    for (i = 0; i < adms.length; i++) {

        if (nome == adms[i].nomeAdm && email == adms[i].emailAdm && senha == adms[i].senhaAdm) {

            usuarios.splice(i, 1)

        }

        else {

            document.getElementById("aviso-login").innerHTML = "Teste"

        }
    }

    salvar()

}

function salvar() {

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    localStorage.setItem("adms", JSON.stringify(adms))

}

function carregarDados() {

    usuarios = JSON.parse(localStorage.getItem("usuarios")) || []
    adms = JSON.parse(localStorage.getItem("adms")) || []

}

function testar() {

    adms = [
        {
            nome: "Ana Silva",
            email: "ana.silva@email.com",
            senha: "senhaSegura123"
        },
        {
            nome: "Carlos Souza",
            email: "carlos.souza@email.com",
            senha: "senhaForte456!"
        },
        {
            nome: "Mariana Costa",
            email: "mariana.costa@email.com",
            senha: "abc123Senha*"
        },
        {
            nome: "João Pedro",
            email: "joao.pedro@email.com",
            senha: "suporte2026#"
        },
        {
            nome: "Beatriz Lima", email: "beatriz.lima@email.com",
            senha: "senhaAdmin789"
        }
    ]

    usuarios = [
        {
            nome: "Lucas", sobrenome: "Mendes",
            email: "lucas.mendes@email.com",
            senha: "userPass123",
            dataDeNascimento: "1995-04-12"
        },
        {
            nome: "Juliana", sobrenome: "Rocha",
            email: "juliana.rocha@email.com",
            senha: "senhaUsuario456",
            dataDeNascimento: "1998-09-25"
        },
        {
            nome: "Gabriel", sobrenome: "Martins",
            email: "gabriel.martins@email.com",
            senha: "abcUser789*",
            dataDeNascimento: "1990-12-03"
        },
        {
            nome: "Camila",
            sobrenome: "Duarte",
            email: "camila.duarte@email.com",
            senha: "cliente2026#",
            dataDeNascimento: "2001-07-15"
        },
        {
            nome: "Rafael",
            sobrenome: "Lindemman",
            email: "rafael.lindemman@email.com",
            senha: "minhaSenha321",
            dataDeNascimento: "1988-02-20"
        }
    ];
    salvar()
}
