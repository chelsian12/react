const App = () => {
  const numbers = [1, 4, 5, 9, 12, 16, 17, 26];

  function oddEven(numbers) {
    const odds = [];
    const evens = [];

    for (let i = 0; i < numbers.length; i++) {
      const num = numbers[i];
      if (num % 2 === 0) {
        evens.push(num);
      } else {
        odds.push(num);
      }
    }

    return { odds, evens };
  }

  function multiplication(numbers) {
    let multiply = 1;
    for (let i = 0; i < numbers.length; i++) {
      multiply *= numbers[i];
    }
    return multiply;
  }

  function totals(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
      total += numbers[i];
    }
    return total;
  }

  function minmax(numbers) {
    let min = Math.min(...numbers);
    let max = Math.max(...numbers);

    return { min, max };
  }

  const { odds, evens } = oddEven(numbers);
  console.log("Odds:", odds);
  console.log("Evens:", evens);

  const multiply = multiplication(numbers);
  console.log("multiplication:", multiply);

  const total = totals(numbers);
  console.log("Total:", total);

  const { min, max } = minmax(numbers);
  console.log("Minimum:", min);
  console.log("Maximum:", max);

  return <div></div>;
};

export default App;
