function showError(errorElement, errorMessage) {
  const className = "."+errorElement;
  console.log(className,'className')
  const el = document.querySelector(className);
  console.log(el,'el')   //logi chlop dodal zeby zobaczyc czy cos sie znajduje

    document.querySelector("."+errorElement).classList.add("display-error");
    document.querySelector("."+errorElement).innerHTML = errorMessage;
}

function clearError(){
    let errors = document.querySelectorAll(".error");
    for(let error of errors){
        error.classList.remove("display-error");
    }
}

function isFullNameValid(fullname) {
    if(/^[a-zA-Z]{3,}( {1,2}[a-zA-Z]{3,}){0,}$/.test(fullname))
     {
       return (true)
     }
       return (false)
   }

function isUserNameValid(username) {
    /* 
      Usernames can only have: 
      - Lowercase Letters (a-z) 
      - Numbers (0-9)
      - Dots (.)
      - Underscores (_)
    */
      if(/^[a-z0-9_\.]+$/.exec(username))
      {
        return (true)
      }
        return (false)
    }
      

function ValidateEmail(mail) {
 if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail))
  {
    return (true)
  }
    return (false)
}

// https://regex101.com/library/uR2cG1
function isPhoneNumberValid(phone) {
    if(/^(?:(?:(?:(?:\+|00)\d{2})?[ -]?(?:(?:\(0?\d{2}\))|(?:0?\d{2})))?[ -]?(?:\d{3}[- ]?\d{2}[- ]?\d{2}|\d{2}[- ]?\d{2}[- ]?\d{3}|\d{7})|(?:(?:(?:\+|00)\d{2})?[ -]?\d{3}[ -]?\d{3}[ -]?\d{3}))$/.exec(phone))
     {
       return (true)
     }
       return (false)
   }

function ValidatePassword(password) {
    if(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password))
     {
       return (true)
     }
       return (false)
   }




let form = document.forms['sign-up-form'];
form.onsubmit = function(event) {
    
    event.preventDefault();
    
    clearError();
    
    
    
    if(isFullNameValid(form.fullname.value) === false) {
        showError("fullname-error", "You have to enter your Full Name");
        return false;
    }
    
    if(isUserNameValid(form.username.value) === false) {
        showError("username-error", "You have to enter your username");
        return false;
    }

    if(ValidateEmail(form.email.value) === false) {
        showError("email-error", "You have to enter your email");
        return false;
    }

    console.log(form.phonenumber);
    if(isPhoneNumberValid(form.phonenumber.value) === false) {
        showError("phonenumber-error", "You have to enter your Phone Number");
        return false;
    }


    if(ValidatePassword(form.password.value) === false) {
        showError("password-error", "You have to enter your password");
        return false;
    }
    
    if(form['confirm-password'].value !== form.password.value) {
        showError("confirm-password-error", "Passwords don't match");
        return false;
    }

    document.querySelector(".success").classList.add("display-success");
    document.querySelector(".success").innerHTML = "Your registration was successful.";
        
    
}