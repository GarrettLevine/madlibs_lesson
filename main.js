var form = document.getElementById('mainForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  var madlib = createMadlib();

  template(madlib);
});

function createMadlib() {
  var noun1 = document.getElementById('noun1').value;
  var noun2 = document.getElementById('noun2').value;
  var adjective1 = document.getElementById('adjective1').value;
  var adjective2 = document.getElementById('adjective2').value;
  var pluralNoun1 = document.getElementById('pluralNoun1').value;
  var pluralNoun2 = document.getElementById('pluralNoun2').value;
  var game = document.getElementById('game').value;

  var madlib = `A vacation is when you take a trip to some <strong>${adjective1}</strong> place
  with your <strong>${adjective2}</strong> family. Usually you go to some place
  that is near a/an <strong>${noun1}</strong> or up on a/an <strong>${noun2}</strong>.
  A good vacation place is one where you can ride <strong>${pluralNoun1}</strong>
  or play <strong>${game}</strong> or go hunting for <strong>${pluralNoun2}</strong>.`;

  return madlib;
}

function template(madlib) {
  document.getElementById('madlibContainer').innerHTML = madlib;
}
