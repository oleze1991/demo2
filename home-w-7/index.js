let money = [
  [27.34, "EUR"], 
  [24.65, "USD"],
  [6.4, "PLN"],
  [1, "UAH"],
  [40, "LEV"]
];

// document.querySelector('.time').innerHTML = `${Date()}`;

function convert(p){
  let f = money[document.getElementById('currency-f').value] [0];
  let s = money[document.getElementById('currency-s').value] [0];
  
  document.querySelector('.price').innerHTML = `${f / s}`;
  document.querySelector('.one').innerHTML = `${money[document.getElementById('currency-f').value] [1]}`;
  document.querySelector('.two').innerHTML = `${money[document.getElementById('currency-s').value] [1]}`;

  if(p == "F"){
    document.getElementById('second').value = document.getElementById('first').value * (f / s);
  }
  if(p == "S"){
    document.getElementById('first').value = document.getElementById('second').value * (s / f);
  }

}