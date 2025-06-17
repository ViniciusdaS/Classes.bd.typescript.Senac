const form = document.getElementById('cadastro');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
        const res = await fetch('http://localhost:3000/api/users/login', {
            method: 'POST', 
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ email: email, password: password })
        }); 

        if(res.ok) {
            alert('usuário logado com sucesso !');
        } else {
            const data = await res.json();
            alert(data.message || "Erro bisonho detectado! 👹  queime o pc imediatamente");
        }
    } catch(error) {
        alert('Erro bizonho!')
        console.error('Erro ao criar usuário: ', error); 
    }
});