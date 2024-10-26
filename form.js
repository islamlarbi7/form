let form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let nameError = document.getElementById("nameError");
  let messageError = document.getElementById("messageError");
  let numberError = document.getElementById("numberError");

  numberError.textContent = "";
   messageError.textContent = "";
    emailError.textContent = "";
     nameError.textContent = "";
  let message = document.getElementById("message").value;
  let number = document.getElementById("number").value;
  let email = document.getElementById("email").value;
  let name = document.getElementById("name").value;
  console.log(name.trim().length);

  if (name.length > 50) {
    nameError.textContent = "error name should be betwen 0 and 50 ";
  }
  
  if (message.length > 20) {
      messageError.textContent = "error message should be betwen 0 and 20 ";
    }
    let numberValidate = /^\d{8}$/;
    if (!numberValidate.test(number)) {
        console.log(number);
        numberError.textContent = "error number should be >8";
    }
    let emailValidate = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailValidate.test(email)) {
        
        emailError.textContent = "error email should be betwen 0 and 50 ";
    }
}
);