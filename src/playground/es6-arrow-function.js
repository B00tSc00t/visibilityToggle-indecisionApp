function square(x) {
  return x * x;
};

console.log(square(8));

// const squareArrow = (x) => {
//   return x * x;
// };

const squareArrow = (x) => x * x;

console.log(squareArrow(9));

const getFirstName = (fullName) => {
  return  fullName.split(' ')[0];
};
console.log(getFirstName('Rick Donut'));

const getLastName = (lastName) => lastName.split(' ')[1];
console.log(getLastName('Rick Donut'));