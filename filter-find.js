const ages = [32, 33, 16, 40, 18, 19, 12, 13, 15, 20];
const checkAdult = (age) => age >= 18;
const checkTenage = (age) => age < 18;
// const GetAdult = ages.filter(checkAdult);
const getTeen = ages.filter(checkTenage);

const products = [
  { name: "water bottle", price: 50, color: "white" },
  { name: "mobile phone", price: 15000, color: "black" },
  { name: "head phone", price: 1200, color: "black" },
  { name: "notes pad", price: 30, color: "blue" },
];

const Blackproducts = products.filter((product) => product.color == "black");
for (const product of Blackproducts) {
  console.log(product.name, product.price);
}
