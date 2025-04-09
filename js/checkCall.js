import { check } from "./check.js";

const submitButton = document.getElementsByClassName("JSsubmit")[0];

submitButton.addEventListener("click", function () {
  // submitButton.disabled = true;
  const name = document.getElementsByClassName("name")[0].value;
  const email = document.getElementsByClassName("email")[0].value;
  const phone = document.getElementsByClassName("phone")[0].value;

  if (check(name, "name") && check(email, "email") && check(phone, "phone")) {
    // Calling the function to check the data
    alert("Chamar a API para salvar os dados do cliente");
  } else {
    // If the data is not correct, show an alert
    alert("Dados inválidos");
  }
});
