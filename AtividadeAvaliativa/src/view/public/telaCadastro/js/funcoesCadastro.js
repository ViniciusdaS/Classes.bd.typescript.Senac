const formCadastro = document.getElementById('formCadastro');
const campoNome = document.getElementById('campoNome').value;
const campoEmail = document.getElementById('campoEmail').value;
const campoSenha = document.getElementById('cmapoSenha').value;

formCadastro.addEventListener('click', cadastrar = () => {
        if(!campoNome && !campoEmail && !campoSenha) {
            alert('Preencha todos os campos !')
        } else {
            alert('Cadastro concluído')
        }
}); 
