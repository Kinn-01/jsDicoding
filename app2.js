// Function
function multiply(a, b) {
  return a * b;
}

console.log(multiply(3, 5));

function Greeting(Names, language) {
  if (language === "English") {
    console.log(`Good Morning ${Names}!`);
  } else if (language === "French") {
    console.log(`Bonjour ${Names}!`);
  } else {
    console.log(`Selamat Pagi ${Names}!`);
  }
}

Greeting("Harry", "French");

// Function Parameter
const user = {
  id: 24,
  displayName: "Aip",
  fullName: "Gilman Arief",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);

// Default Parameter
function exponentsFormula(baseNumber, exponent = 2) {
  let result = baseNumber ** exponent;
  console.log(`${baseNumber}^${exponent} = ${result}`);
}

exponentsFormula(4);
