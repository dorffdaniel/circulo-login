//document.addEventListener('DOMContentLoaded', () => 

let conteudo = document.querySelector('.caixa');
let efeito = document.querySelector('.efeito');
let efeito2 = document.querySelector('.efeito2');
let btnEntrar = document.querySelector('.btnEntrar');

btnEntrar.addEventListener('click', clicou);
    let resulCampoVazio = document.querySelectorAll('.resulCampoVazio')
    let inputNome = document.querySelector('.inputNome');
    let inputSenha = document.querySelector('.inputSenha');

function clicou (){
    if (inputNome.value === '' || inputSenha.value === '') {
        resulCampoVazio.forEach((element) => {
            element.classList.add('mensagemErro');
        });
    } else {
        resulCampoVazio.forEach((element) => {
            element.classList.remove('mensagemErro');
        });
    }
}



conteudo.addEventListener('mouseover', ()=>{
    efeito.classList.add('efeitoAtivado');
    efeito2.classList.add('efeitoAtivado2');
})

conteudo.addEventListener('mouseout', ()=>{
    efeito.classList.remove('efeitoAtivado');
    efeito2.classList.remove('efeitoAtivado2');
})

const caixa = document.querySelector('.caixa');
const caixaCadastro = document.querySelector('.caixa-cadastro');

const btnCadastro = document.querySelector('.btnCadastro');

btnCadastro.addEventListener('click', ()=>{
    caixa.style.display = 'none';
    caixaCadastro.style.display='flex'; 
})

let btnEnviar = document.querySelector('.btnEnviar')
btnEnviar.addEventListener('click', function(){
    enviar();
})

function enviar(){
    let verificacao = document.querySelectorAll('.verificar');
    let contCadastro = document.querySelector('.conteudoCadastrado');
    let campoVazio = false;

    verificacao.forEach((event)=>{
    if(event.value.trim() ===''){
        campoVazio = true;
        event.style.border = '2px solid red'
    }else{
        event.classList.remove('campo');
        event.style.border = '';
        event.value = '';
    }

});

if(!campoVazio){
    contCadastro.classList.add('mostrar');
    setInterval(() => {
       contCadastro.classList.remove('mostrar') 
    }, 3000);
}else{
    console.log('invalido')
}
}

let btnLogin = document.querySelector('.btnLogin');

btnLogin.addEventListener('click', ()=>{
    caixa.style.display='flex'
    caixaCadastro.style.display='none'
})

caixaCadastro.addEventListener('mouseover',()=>{
    efeito.classList.add('efeitoCaixaCadastro')
    efeito2.classList.add('efeitoCaixaCadastro2')
})

caixaCadastro.addEventListener('mouseout',()=>{
    efeito.classList.remove('efeitoCaixaCadastro')
    efeito2.classList.remove('efeitoCaixaCadastro2')
})
