let creditLimit = 500;

const loanOut = amount => {
  return new Promise((resolve, reject) => {
    if (creditLimit === 0) {
      reject("Insufficient funds")
    } else {
      if (creditLimit - amount < 0) {
        const newLoan = creditLimit;
        creditLimit = 0;
        resolve(newLoan);
      } else {
        creditLimit -= amount;
        resolve(amount);
      }
    }
  });
}

console.log("Asking for $150, which should be okay ...");
loanOut(150)
  .then((amountReceived) => {
    console.log(`\t-> I got $${amountReceived} loan from the bank! Remaining Credit Limit: $${creditLimit}`);
  })
  .catch((err) => {
    console.log(`\t-> Error: ${err}!`);
  });