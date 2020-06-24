$(document).ready(function () {
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

  //stampo i messaggi
  for (var i = 0; i < studenti.length; i++) {
    var source = $('#entry-template').html();
    var template = Handlebars.compile(source);
    var html = template(studenti[i]);
    $('.container').append(html);
  }

})
