const dialog = document.getElementById('dialog'); 
const evento = document.getElementById('addEvento');
const confirmarEvento = document.getElementById('confirmarEvento');
const listaEventos = document.getElementById('listaEventos'); 

evento.addEventListener('click', () => {
    dialog.showModal(); 
})

const form = document.getElementById('formJanela');

form.addEventListener('submit', async(e) => {
    e.preventDefault();

    confirmarEvento.addEventListener('click', () => {

    const nomeEvento = document.getElementById('campoAddNomeEvento').value;
    const localEvento = document.getElementById('campoAddLocalEvento').value;
    const dataEvento = document.getElementById('campoAddDataEvento').value;
        
    const novoNome = document.createElement('th')
    const novoLocal = document.createElement('th')
    const novaData = document.createElement('th')

    listaEventos.appendChild(novoNome);
    listaEventos.appendChild(novoLocal); 
    listaEventos.appendChild(novaData);

    newNome.textContent(nomeEvento);
    newLocal.textContent(localEvento);
    newData.textContent(dataEvento);
})

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
