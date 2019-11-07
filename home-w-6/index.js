const products = [
  'apple',
  'apricot',
  'avocado',
  'banana',
  'blackberry',
  'blackcurrant',
  'blueberry',
  'boysenberry',
  'cherry',
  'coconut',
  'fig',
  'grape',
  'grapefruit',
  'kiwifruit',
  'lemon',
  'lime',
  'lychee',
  'mandarin',
  'mango',
  'melon',
  'nectarine',
  'orange',
  'papaya',
  'passion fruit',
  'peach',
  'pear',
  'pineapple',
  'plum',
  'pomegranate',
  'quince',
  'raspberry',
  'strawberry',
  'watermelon',
];

let prWeight = 0;



document.getElementById('btn-load').onclick = function()
{
  prWeight = getRandomFload(1, 5);
  document.querySelector('#product-weight').innerHTML = `${prWeight} кг`;
  document.querySelector('#product-cost').innerHTML = ` `;
  document.querySelector('#product-price').innerHTML = ` `;
  // alert('Нажата кнопка');
}

function getRandomFload(min, max) {
  return Math.floor(Math.random() * (max - min)) + min + Math.floor( Math.random() * 100) / 100;
}

function Product(name, price) {
  this.name = name;
  this.price = price;
}

function calcPrice(pr) {
  if (prWeight != 0) {
    let allCost = pr.dataset.price * prWeight;
    let coma3 = Math.floor((allCost - Math.floor(allCost)) * 1000);
    if ((coma3 - (Math.floor(coma3 / 10)) * 10) > 5) coma3 += 10;
    let prCost = Math.floor(allCost) +  Math.floor(coma3 / 10) / 100;
    document.querySelector('#product-cost').innerHTML = `${prCost} $`;
    document.querySelector('#product-price').innerHTML = `${pr.dataset.price} $/кг`;
  }
  else  alert('Зважте будь ласка товар!');
}

function disP() {
  const ITEMS = products.map(name => new Product(name, getRandomFload(7, 50)));
  const items = ITEMS
    .map(({ name, price}) => `<div class="product" data-price="${price}" data-name="${name}">
      <h2>${name}</h2>
      <p>${price} $/кг</p>
    </div>`)
    .join('');

    // console.log(items);

    document.querySelector('#products').innerHTML = items;
    
    document.querySelectorAll('.product').forEach(pr => pr.addEventListener('click', () => calcPrice(pr)));
}

window.onload = disP();
