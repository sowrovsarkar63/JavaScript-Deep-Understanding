const skills = ["html", "css", "js", "bootstrap"];
const numbers = [2, 4, 6, 8, 10];
/* 
for (const skill of skills) {
  let upperCase = skill.toUpperCase();
  console.log(upperCase);
}
 */

const SkillWithUpper = skills.map((skill) => {
  return skill.toUpperCase();
});
// console.log(SkillWithUpper); // it will log uppercase skill

const SquarOfNumbers = numbers.map((number, length, arr) => {
  //   return number * length;
  return arr;
});

console.log(SquarOfNumbers);

// more on mapping an object

const products = [
  { name: "water bottle", price: 50, color: "white" },
  { name: "mobile phone", price: 15000, color: "golden" },
  { name: "head phone", price: 1200, color: "black" },
  { name: "notes pad", price: 30, color: "blue" },
];

const productNames = products.map((product) => product.name);
const productPrices = products.map((product) => product.price);

console.log(productPrices);
