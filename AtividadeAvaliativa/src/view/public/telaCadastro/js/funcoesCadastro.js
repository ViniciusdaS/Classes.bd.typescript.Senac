const formCadastro = document.getElementById('formCadastro');
const campoNome = document.getElementById('campoNome').value;
const campoEmail = document.getElementById('campoEmail').value;
const campoSenha = document.getElementById('cmapoSenha').value;
const cadastrar = document.getElementById('cadastrar'); 

cadastrar.addEventListener('click', alternarPagina = () => {
    window.location.href('./telaEventos/index.html')
})

