var nameVar = 'Rick';
var nameVar = 'Bill'
console.log('nameVar', nameVar);

let nameLet = 'Wendolyn';
nameLet = 'Jessy';
console.log('nameLet', nameLet);

const nameConst = 'Donut';
console.log('nameConst', nameConst);

function getPetName() {
	var petName = 'Jessy';
	return petName;
};

const petName = getPetName();
console.log(petName);

// Block Scoping

const fullName = 'Rick Slick';
let firstName;

if (fullName) {
  firstName = fullName.split(' ')[0];
  console.log(firstName);
};

console.log(firstName);