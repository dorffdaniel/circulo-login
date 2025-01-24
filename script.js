//document.addEventListener('DOMContentLoaded', () => 

let conteudo = document.querySelector('.caixa');
let efeito = document.querySelector('.efeito');
let efeito2 = document.querySelector('.efeito2');

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
