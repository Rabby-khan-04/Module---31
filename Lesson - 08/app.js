const fish = {
  name: "King Hilsa",
  address: "Chandpur",
  color: "silver",
  phone: "01625983256",
  price: 4000,
};

// const phone = fish.phone;
// const price = fish.price;
// const color = fish.color;

const { phone, name, color } = fish;

console.log(phone, name, color);

// Array Destructuring

const arr = [21, 32, 54, 13, 43, 12, 54];

const [one, two, three, four, five, six] = arr;

console.log(one, two);
