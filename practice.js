var missy = 'dog';

function pizza() {
  var pepperoni = 'cheese';
}

pizza();

if (1 > 50) {
  console.log('bradford smells bad');
} else if (1 < 50) {
  console.log('bradford is pretty')
} else {
  console.log('bradford is retarted')
}

var hardDrugs = ['asprin', 'advil', 'tums', 'dayquil', 'mylanta', 'tylenol'];

for (var i = 0; i < hardDrugs.length; i++) {
  console.log(hardDrugs[i])
}

var iceCreams = ['chocolate', 'vanilla', 'strawberry', 'baby'];

iceCreams.push('grass');
console.log(iceCreams);

iceCreams.pop();
console.log(iceCreams);

iceCreams.unshift('cookie');
console.log(iceCreams);

iceCreams.shift();
console.log(iceCreams);

var car = {
  make: 'toyota',
  model: '4runner',
  wheels: 4,
  engine: {
    cylinders: 8,
    naturallyAsperated: true
  }
}

console.log(car);

console.log(car.make);
console.log(car['make']);

console.log(car.engine.cylinders);
