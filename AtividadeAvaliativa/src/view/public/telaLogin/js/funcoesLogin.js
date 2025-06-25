const form = document.getElementById('cadastro');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const email = document.getElementById('campoEmail').value;
    const senha = document.getElementById('campoSenha').value;

    try {
        const res = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST', 
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ email: email, senha: senha })
        }); 

        if(res.ok) {
            alert('usuário logado com sucesso !');
        } else {
            const data = await res.json();
            alert(data.message || "Impossível criar usuário");
        }
    } catch(error) {
        alert('Erro bisonho detectado!')
        console.error('Erro bisonho detectado!: ', error); 
    }
});