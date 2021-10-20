// 1) Criar uma página de HTML para cadastrar usuário e senha com dois inputs e duas labels,
// além de um botão "Cadastrar". 
// Os dados devem ser armazenados no Local Storage. Mostrar uma mensagem "Cadastro realizado!"

// 2) Após mensagem de "Cadastro realizado", acessar página de Login, onde o usuário deve digitar nome/senha os quais devem conferir
//   com os dados armazenados. Caso estejam corretos, mostrar mensagem de " Login efetuado!", caso não, "Login falhou!"


// ========================= Banco de dados

let listaUsuarios = JSON.parse(localStorage.getItem('chave')) || []
let emailDigitado, senhaDigitado, verificandoSenha1, verificandoSenha2;
let verificadorExistente = 0;
let incluiArroba = '@'
let incluiPonto = '.'
let contemArroba = false;
let contemPonto = false;
let emailIncorreto = false;
// ==========================================================================


// ======== FUNÇÃO VERIFICANDO SE JÁ TEM UMA CONTA 
function ContaExistente() {
    if (listaUsuarios != '') {

        let temConta = document.querySelector('.temConta')
        temConta.classList.add('temUmaConta')

    } else {

        let cadastro = document.querySelector('.cadastro')
        cadastro.classList.add('cadastrar')

        let temConta = document.querySelector('.NaotemConta')
        temConta.classList.add('AddConta')
    }
}



// ========================= FUNÇÃO CRIAR CONTA
function CriarConta() {

    verificarEmail = document.getElementById('criarEmail').value
    verificandoSenha1 = document.getElementById('criarSenha').value
    verificandoSenha2 = document.getElementById('criarSegundaSenha').value
    contemArroba = verificarEmail.includes(incluiArroba)
    contemPonto = verificarEmail.includes(incluiPonto)
    VerificarEcriar()
}

// ================================ VERIFICAR PARA CRIAR CADASTRO
function VerificarEcriar() {
    RemoverCorCriarCadastro()

    if (verificarEmail != '' && verificandoSenha1 != '' && verificandoSenha2 != '') {

        if (contemArroba && contemPonto) {
            removerseForIgual()
            if (verificandoSenha1.length >= 6) {

                if (verificandoSenha1 == verificandoSenha2) {
                    AddDadosLocalStorage()
                    AtivarAlertaVoltar()
                    CadastroCriado()
                    LimparCampoDoCadastro()

                } else {
                    CorSenha1()
                    CorSenha2()
                }

            } else {
                CorSenha1()
                CorSenha2()
            }

            RemoverCorEmailErrado()
        } else {
            emailIncorreto = true
            CorEmail()
        }
    } else {
        CorCriarCadastro()
    }

}
// ================================ ADICIONADO DADOS NO LOCAL STORAGE

function AddDadosLocalStorage() {
    let usuario = {}
    usuario.email = document.getElementById('criarEmail').value
    usuario.senha = document.getElementById('criarSenha').value
    listaUsuarios.push(usuario)
    localStorage.setItem('chave', JSON.stringify(listaUsuarios))
}





// ========================= FUNÇÃO ENTRAR NA CONTA
function EntrarNaconta() {
    RemoverCorEntrada()

    emailDigitado = document.getElementById('entrarEmail').value
    senhaDigitado = document.getElementById('entrarSenha').value
    verificadorExistente = 0;

    if (emailDigitado != '' && senhaDigitado != '') {

        for (let i = 0; i < listaUsuarios.length; i++) {

            if (listaUsuarios[i].email == emailDigitado && listaUsuarios[i].senha == senhaDigitado) {

                window.location.href = '/html/Entrou.html'
                return
            } else {
                verificadorExistente++
            }
        }
        if (verificadorExistente == listaUsuarios.length || listaUsuarios == '') {
            AtivarCorEntrar()
        }

    } else {
        AtivarCorEntrar()
    }

}


// ============== FUNÇÃO LIMPAR CAOMPOS DO CADASTRO
function LimparCampoDoCadastro() {

    document.getElementById('criarEmail').value = ''
    document.getElementById('criarSegundaSenha').value = ''
    document.getElementById('criarSenha').value = ''
}


// ======== FUNÇÃO MOSTRAR AO USUÁRIO O BOTÃO DE VOLTAR

function AtivarAlertaVoltar() {
    let ativarVolar = document.querySelector('.voltar')
    ativarVolar.classList.add('ativarVoltar')
}