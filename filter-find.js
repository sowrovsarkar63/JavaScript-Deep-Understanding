const ages = [32, 33, 16, 40, 18, 19, 12, 13, 15, 20];
const checkAdult = (age) => age >= 18;
const checkTenage = (age) => age < 18;
// const GetAdult = ages.filter(checkAdult);
const getTeen = ages.filter(checkTenage);

console.log(getTeen);
