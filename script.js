console.log("JavaScript Events");

// const myButton = document.getElementById("my-button");

// myButton.addEventListener("click", () => {
//   const result = document.getElementById("result");
//   result.innerHTML = "Hello World";
// });

const addButton = document.getElementById("add-btn");

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  const num1 = document.getElementById("num1");
  const num2 = document.getElementById("num2");

  console.log("Num 1" num1.value);
  console.log("Num 2" num2.value);
});
