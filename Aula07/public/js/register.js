const form = document.getElementById('cadastro');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        await fetch('http://localhost:3000/api/users', {
            method: 'POST', 
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        }); 

        if(resizeBy.ok) {
            alert('usuário criado com sucesso');
        } else {
            const data = await res.json();
            alert(data.message || "Erro bisonho 👹") 
        }
    } catch(error) {
        error('Erro bisonho 👹');
        console.error('Erro ao criar usuário: ', error); 
    }
});