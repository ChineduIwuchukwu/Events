console.log("JavaScript Events");

// const myButton = document.getElementById("my-button");

// myButton.addEventListener("click", () => {
//   const result = document.getElementById("result");
//   result.innerHTML = "Hello World";
// });

// const addButton = document.getElementById("add-btn");

// addButton.addEventListener("click", (event) => {
//   event.preventDefault();

//   const num1 = document.getElementById("num1");
//   const num2 = document.getElementById("num2");
//   const result = document.getElementById("result");

//   const addition = parseInt(num1.value) + parseInt(num2.value);
//   result.innerHTML = addition;
// });

const contactForm = document.getElementById("contact");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const fullName = document.getElementById("fullname");
  const email = document.getElementById("email");
  const age = document.getElementById("age");
  const message = document.getElementById("message");

  const tableRow = document.createElement("tr");
  tableRow.innerHTML = `        
          <td>${fullName.value}</td>
          <td>${email.value}</td>
          <td>${age.value}</td>
          <td>${message.value}</td>
      `;

  const tableBody = document.getElementById("table-body");
  tableBody.appendChild(tableRow);
});
