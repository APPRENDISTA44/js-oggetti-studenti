//oggetto studente
var studente = {
  'nome' : 'Ernesto',
  'cognome' : 'Rossi',
  'eta' : 25,
};

for (var chiave in studente) {
  console.log(studente[chiave]);
}

//array studenti
var studenti = [
  {
    'nome' : 'Ernesto',
    'cognome' : 'Rossi',
    'eta' : 25
  },
  {
    'nome' : 'Luca',
    'cognome' : 'Verdi',
    'eta' : 24
  },
  {
    'nome' : 'Fabio',
    'cognome' : 'Blu',
    'eta' : 26
  },
]
console.log(studenti);
for (var i = 0; i < studenti.length; i++) {
  console.log(studenti[i].nome,studenti[i]['cognome']);
}

//faccio inserire un nuovo oggetto
var nome = prompt('inserire nome');
var cognome = prompt('inserire cognome');
var eta = parseInt(prompt('inserire età'));
var oggetto = {
  'nome' : nome,
  'cognome' : cognome,
  'eta' : eta
}
studenti.push(oggetto);
console.log(studenti);
