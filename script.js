const form = document.getElementById("newsletterForm");

const emailInput = document.getElementById("email");

const errorMsg = document.getElementById("errorMsg");

const signupCard = document.getElementById("signupCard");

const successCard = document.getElementById("successCard");

const userEmail = document.getElementById("userEmail");

const dismissBtn = document.getElementById("dismissBtn");


form.addEventListener("submit", function(event){

    event.preventDefault();

    const email = emailInput.value.trim();

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email)){

        errorMsg.textContent =
        "Valid email required";

        emailInput.classList.add("error-input");

        return;
    }

    errorMsg.textContent = "";

    emailInput.classList.remove("error-input");

    userEmail.textContent = email;

    signupCard.style.display = "none";

    successCard.style.display = "block";
});


dismissBtn.addEventListener("click", function(){

    successCard.style.display = "none";

    signupCard.style.display = "flex";

    emailInput.value = "";

});