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

const SquarOfNumbers = numbers.map((number) => {
  return number * 2;
});
console.log(SquarOfNumbers);
