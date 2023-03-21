const nome = prompt ( 'inserisci il tuo nome');

const cognome = prompt ('inserisici il tuo cognome');

const colorePreferito = prompt ('qual è il tuo colore preferito ?')

document.getElementById('generapassword').innerHTML = `<p> questa è la tua password: <h2> ${nome}${cognome}${colorePreferito}21 </h2> </p>`;