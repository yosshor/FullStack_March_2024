//create model for counter
let counter: number = 1;

//controller function
function handleClick(): number {
  counter++;
  console.log(counter);
  debugger;
  renderCounter(counter); //invocation of view function
  renderEven(checkIfEven(counter)); //invocation of view function
  return counter;
}

//view function
function renderCounter(counter: number): void {
  try {
    const screenCounter = document.querySelector("#counter");
    if (!screenCounter) {
      throw new Error("Element not found");
    }
    screenCounter.textContent = counter.toString();
  } catch (error) {
    console.error(error);
  }
}

function checkIfEven(counter: number): boolean {
  try {
    if (typeof counter !== "number") {
      throw new Error("Input is not a number");
    }
    return counter % 2 === 0;
  } catch (error) {
    console.error(error);
    return false;
  }
}

function renderEven(isEven: boolean): void {
  try {
    const screenEven = document.querySelector("#even");
    if (!screenEven) {
      throw new Error("Element not found");
    }
    screenEven.textContent = isEven ? "Even" : "Odd";
  } catch (error) {
    console.error(error);
  }
}
