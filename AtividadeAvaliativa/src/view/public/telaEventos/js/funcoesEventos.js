document.addEventListener('DOMContentLoaded', () => {
    const dialog = document.getElementById('dialog');
    const evento = document.getElementById('addEvento');
    // const confirmarEvento = document.getElementById('confirmarEvento');
    const listaEventos = document.getElementById('listaEventos');
    const nome = document.getElementById('campoAddNomeEvento').value;
    const local = document.getElementById('campoAddLocalEvento').value;
    const data = document.getElementById('campoAddDataEvento').value;

    evento.addEventListener('click', () => {
        dialog.showModal();
    })

    const form = document.getElementById('formJanela');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:3000/api/eventos', {
                method: 'POST',
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({ nome, local, data })
            });

            if (res.ok) {
                alert('evento criado com sucesso');
                const novaLista = document.createElement('tr')
                const novoNome = document.createElement('td')
                const novoLocal = document.createElement('td')
                const novaData = document.createElement('td')

                listaEventos.appendChild(novaLista);
                novaLista.appendChild(novoNome);
                novaLista.appendChild(novoLocal);
                novaLista.appendChild(novaData);

                novoNome.textContent(nome);
                novoLocal.textContent(local);
                novaData.textContent(data);
            } else {
                const data = await res.json();
                alert(data.message || "Erro ao criar evento");
            }
        } catch (error) {
            alert('Impossível criar evento')
            console.error('Erro bisnho detectado!: ', error);
        }
    });
})