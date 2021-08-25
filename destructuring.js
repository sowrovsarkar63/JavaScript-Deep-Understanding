// learn about destructuring
//object destructuring
const frontEndDev = {
  id: 1,
  duration: "6 month",
  skill: [
    "html",
    "css",
    "js",
    "jquery",
    "bootstrap",
    "sass",
    "coding standerd",
    "react js ",
    "design concept",
    "problem solving",
  ],
  profession: ["job", "freelancing"],
  position: {
    // junior: "1.5 year",
    mid: "2.5 year",
    senior: "3-4 year",
    ceo: "5-6 year",
  },
};

const { position } = frontEndDev; //destructuring object
const { junior = "I am already junior developer " } = position;

console.log(junior);
console.log(frontEndDev);

// Array destructuring

const tech = [
  "html",
  "css",
  "javascript",
  "jquery",
  "react js ",
  "bootstrap",
  "git and github",
  "coding standerd",
  "problem solving",
];

const [foundation, stylefoundation, ...oothers] = tech;

console.log(oothers[0]); //array destructuring
