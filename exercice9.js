const prompt = require("prompt-sync")({ sigint: true }); // <– remplace prompt() du navigateur

function calculatrice() {
  const op = prompt("Opération (+, -, *, /) : ").trim();
  const a = parseFloat(prompt("Premier nombre : "));
  const b = parseFloat(prompt("Deuxième nombre : "));

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.log("Veuillez entrer des nombres valides.");
    return;
  }

  switch (op) {
    case "+":
      console.log(`${a} + ${b} = ${a + b}`);
      break;
    case "-":
      console.log(`${a} - ${b} = ${a - b}`);
      break;
    case "*":
      console.log(`${a} * ${b} = ${a * b}`);
      break;
    case "/":
      if (b === 0) console.log("Erreur : division par zéro.");
      else console.log(`${a} / ${b} = ${a / b}`);
      break;
    default:
      console.log("Opération non reconnue. Utilise +, -, * ou /");
  }
}

calculatrice();
