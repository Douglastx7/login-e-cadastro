//====================== ATIVAR CORES NOS INPUTS DA ENTRADA
let inputEmail, inputEmaiColor;
let inputSenha, inputSenhaColor;
let erroEmail, erroSenha;
let preencha;

function AtivarCorEntrar() {

    if (emailDigitado == '') {
        inputEmail = document.querySelector('.inputEmail')
        inputEmail.classList.add('ativarBordaVermelha')

        preencha = document.querySelector('.h1')
        preencha.classList.add('ativarPreenchaCampor')
    }
    if (senhaDigitado == '') {
        inputSenha = document.querySelector('.inputSenha')
        inputSenha.classList.add('ativarBordaVermelha')

        preencha = document.querySelector('.h1')
        preencha.classList.add('ativarPreenchaCampor')
    }


    for (let i = 0; i < listaUsuarios.length; i++) {

        if (listaUsuarios[i].email != emailDigitado && emailDigitado != '') {
            inputEmaiColor = document.querySelector('.inputEmail')
            inputEmaiColor.classList.add('ativarColorVermelho')

            erroEmail = document.querySelector('.ErroEmail')
            erroEmail.classList.add('ativarErroEmail')
        } else {
            inputEmaiColor = document.querySelector('.inputEmail')
            inputEmaiColor.classList.remove('ativarColorVermelho')

            erroEmail = document.querySelector('.ErroEmail')
            erroEmail.classList.remove('ativarErroEmail')
        }


        if (listaUsuarios[i].senha != senhaDigitado && senhaDigitado != '') {
            inputSenhaColor = document.querySelector('.inputSenha')
            inputSenhaColor.classList.add('ativarColorVermelho')

            erroSenha = document.querySelector('.ErroSenha')
            erroSenha.classList.add('ativarErroSenha')
        } else {
            inputSenhaColor = document.querySelector('.inputSenha')
            inputSenhaColor.classList.remove('ativarColorVermelho')

            erroSenha = document.querySelector('.ErroSenha')
            erroSenha.classList.remove('ativarErroSenha')
        }
    }
    if (listaUsuarios == '') {

        preencha = document.querySelector('.h1')
        preencha.classList.add('naoPossuiCadastro')

        inputEmaiColor = document.querySelector('.inputEmail')
        inputEmaiColor.classList.add('ativarColorVermelho')

        inputSenhaColor = document.querySelector('.inputSenha')
        inputSenhaColor.classList.add('ativarColorVermelho')
    }

}


// ======================================= FUNÇÃO REMOVER
function RemoverCorEntrada() {

    inputEmail = document.querySelector('.inputEmail')
    inputEmail.classList.remove('ativarBordaVermelha')

    inputSenha = document.querySelector('.inputSenha')
    inputSenha.classList.remove('ativarBordaVermelha')

    preencha = document.querySelector('.h1')
    preencha.classList.remove('ativarPreenchaCampor')
}

//====================== ATIVAR CORES NOS INPUTS DO CADASTRO



let inputCriarEmail;
let inputCriarsenha2;
let inputCriarsenha1;
let criarEmailErrado, criarSenhaErrado;
// let preencha;

function CorCriarCadastro() {

    CorEmail()
    CorSenha1()
    CorSenha2()

    preencha = document.querySelector('.h1-criar')
    preencha.classList.add('ativarPreenchaCampor')
}


function CorEmail() {
    if (verificarEmail == '') {
        inputCriarEmail = document.querySelector('.inputCriarEmail')
        inputCriarEmail.classList.add('ativarBordaVermelha')
    }

    if (emailIncorreto == true) {
        inputCriarEmail = document.querySelector('.inputCriarEmail')
        inputCriarEmail.classList.add('ativarColorVermelho')

        criarEmailErrado = document.querySelector('.erroCriarEmail')
        criarEmailErrado.classList.add('crirEmailErrado')
    }
}

function RemoverCorEmailErrado() {

    inputCriarEmail = document.querySelector('.inputCriarEmail')
    inputCriarEmail.classList.remove('ativarColorVermelho')

    criarEmailErrado = document.querySelector('.erroCriarEmail')
    criarEmailErrado.classList.remove('crirEmailErrado')
}

function CorSenha1() {
    if (verificandoSenha1 == '') {
        inputCriarsenha1 = document.querySelector('.inputCriarsenha1')
        inputCriarsenha1.classList.add('ativarBordaVermelha')
    }

    if (verificandoSenha1.length < 6) {
        inputCriarsenha1 = document.querySelector('.inputCriarsenha1')
        inputCriarsenha1.classList.add('ativarColorVermelho')

        preencha = document.querySelector('.h1-criar')
        preencha.classList.add('crirSenhaSeisCaracteres')
    }

    if (verificandoSenha1 != verificandoSenha2) {

        inputCriarsenha1 = document.querySelector('.inputCriarsenha1')
        inputCriarsenha1.classList.add('ativarColorVermelho')

        inputCriarsenha1 = document.querySelector('.inputCriarsenha1')
        inputCriarsenha1.classList.add('crirSenhaNaoIgual')
    }
}

function CorSenha2() {
    if (verificandoSenha2 == '') {
        inputCriarsenha2 = document.querySelector('.inputCriarsenha2')
        inputCriarsenha2.classList.add('ativarBordaVermelha')
    }

    if (verificandoSenha1.length < 6) {
        inputCriarsenha2 = document.querySelector('.inputCriarsenha2')
        inputCriarsenha2.classList.add('ativarColorVermelho')

        preencha = document.querySelector('.h1-criar')
        preencha.classList.add('crirSenhaSeisCaracteres')

        preencha = document.querySelector('.h1-criar')
        preencha.classList.add('crirSenhaSeisCaracteres')
    }
    if (verificandoSenha1 != verificandoSenha2) {

        inputCriarsenha2 = document.querySelector('.inputCriarsenha2')
        inputCriarsenha2.classList.add('ativarColorVermelho')

        inputCriarsenha2 = document.querySelector('.inputCriarsenha2')
        inputCriarsenha2.classList.add('ativarBordaVermelha')

        preencha = document.querySelector('.h1-criar')
        preencha.classList.add('crirSenhaNaoIgual')

    }
}

function RemoverCorSenha1E2() {

    if (verificandoSenha1.length < 6) {
        inputCriarsenha1 = document.querySelector('.inputCriarsenha1')
        inputCriarsenha1.classList.remove('ativarColorVermelho')

        inputCriarsenha2 = document.querySelector('.inputCriarsenha2')
        inputCriarsenha2.classList.remove('ativarColorVermelho')

    }

    if (verificandoSenha1 == verificandoSenha2) {
        inputCriarsenha1 = document.querySelector('.inputCriarsenha1')
        inputCriarsenha1.classList.remove('ativarColorVermelho')

        inputCriarsenha2 = document.querySelector('.inputCriarsenha2')
        inputCriarsenha2.classList.remove('ativarColorVermelho')
    }
}

function removerseForIgual() {

    preencha = document.querySelector('.h1-criar')
    preencha.classList.remove('crirSenhaNaoIgual')

}

function RemoverCorCriarCadastro() {

    inputCriarEmail = document.querySelector('.inputCriarEmail')
    inputCriarEmail.classList.remove('ativarBordaVermelha')

    inputCriarsenha1 = document.querySelector('.inputCriarsenha1')
    inputCriarsenha1.classList.remove('ativarBordaVermelha')

    inputCriarsenha2 = document.querySelector('.inputCriarsenha2')
    inputCriarsenha2.classList.remove('ativarBordaVermelha')

    preencha = document.querySelector('.h1-criar')
    preencha.classList.remove('ativarPreenchaCampor')

    preencha = document.querySelector('.h1-criar')
    preencha.classList.remove('crirSenhaSeisCaracteres')

}

function CadastroCriado() {
    preencha = document.querySelector('.h1-criar')
    preencha.classList.add('cadastroCriado')
}