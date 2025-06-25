const dialog = document.getElementById('dialog'); 
const evento = document.getElementById('addEvento');
const confirmarEvento = document.getElementById('confirmarEvento');
const campoAddDataEvento = document.getElementById('campoAddDataEvento').value;
const nome1 = document.getElementById('nome1').value; 

evento.addEventListener('click', () => {
    dialog.showModal(); 
})

confirmarEvento.addEventListener('click', () => {
    nome1.push(campoAddDataEvento)
})


const form = document.getElementById('formJanela');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    const addNome = document.getElementById('campoAddNomeEvento').value;
    const addLocal = document.getElementById('campoAddLocalEvento').value;
    const addData = document.getElementById('campoAddDataEvento').value;

    try {
        const res = await fetch('http://localhost:3000/api/users', {
            method: 'POST', 
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({ addNome: addNome, addLocal: addLocal, addData: addData })
        }); 

        if(res.ok) {
            alert('evento criado com sucesso');
        } else {
            const data = await res.json();
            alert(data.message || "Erro ao criar evento");
        }
    } catch(error) {
        alert('Impossível criar evento')
        console.error('Erro bisnho detectado!: ', error); 
    }
});