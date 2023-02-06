    let nameElement = document.getElementById("name");
    let emailElement = document.getElementById("email");
    let passwordElement = document.getElementById("password");
    let nameErrorElement=document.getElementById("nameError");
    let emailErrorElement=document.getElementById("emailError");
    let passwordErrorElement=document.getElementById("passwordError");

    function validateEmptyField(fieldElem,errElement){
    if(fieldElem.value=='' || fieldElem.value==null){
    errElement.innerHTML="Can't be blank!";
    errElement.style.color = "red";
       fieldElem.style.borderColor="red";
       return false;
    }
    else{
    
       return true;
    }
    }



    function store() {
      if (blankCheck()&&emailValidation()&&passwordValidation()) {
        localStorage.setItem("name", nameElement.value);
        localStorage.setItem("email", emailElement.value);
        localStorage.setItem("password", passwordElement.value);
    
        moveToDisplay();
      }
     
    }

    nameElement.addEventListener("input", function () {
       
     nameErrorElement.innerHTML = "";
      nameElement.style.borderColor="#C9C9C9";
      validateEmptyField(nameElement,nameErrorElement);
    });
    emailElement.addEventListener("input", function () {
     emailErrorElement.innerHTML = "";
      emailElement.style.borderColor="#C9C9C9";
      validateEmptyField(emailElement,emailErrorElement);
      if(validateEmptyField(emailElement,emailErrorElement)){
        emailValidation();
      }
      else{
        return false;
      }
    });
    passwordElement.addEventListener("input",function() {
        passwordErrorElement.innerHTML = "";
        passwordElement.style.borderColor="#C9C9C9";
        validateEmptyField(passwordElement,passwordErrorElement);
        if(validateEmptyField(passwordElement,passwordErrorElement)){
            passwordValidation();
        }
        else{
            return false;
          }
    })

      function emailValidation(){
      let a =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (emailElement.value.match(a)) {
        
        return true;
      } else {
        emailErrorElement.innerHTML = "invalid email!";
        emailErrorElement.style.color = "red";
        emailElement.style.borderColor="red";
        return false;
      }
    
      }
      function passwordValidation(){
        if(passwordElement.value.length<=8){
            passwordErrorElement.innerHTML="password should contain more than 8 characters!";
            return false;
        }
        else{
            return true;
        }
    }
    function blankCheck() {
        if (validateEmptyField(nameElement,nameErrorElement)) {
         return true;
        } 
        else if(validateEmptyField(emailElement,emailErrorElement)){
            return true;
        }
        else if(validateEmptyField(passwordElement,passwordErrorElement)){
            return true;
        }
        else{
            return false;
        }

        
        
      }
    function moveToDisplay() {
      document.getElementById("reg").style.display = "none";
      document.getElementById("next").style.display = "block";

      document.getElementById("nameDisplay").value =
        localStorage.getItem("name");
      document.getElementById("emailDisplay").value =
        localStorage.getItem("email");
      document.getElementById("passwordDisplay").value =
        localStorage.getItem("password");
    }
    

    function logOut(){
        document.getElementById("reg").style.display = "block";
        document.getElementById("next").style.display = "none";
  
    }