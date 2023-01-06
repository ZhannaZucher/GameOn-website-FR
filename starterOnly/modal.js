function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelectorAll(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Issue 1:
//Close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

//Close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));


//Issue 2:
// DOM Elements to be checked on submitting
const form = document.getElementsByTagName('form')[0];

//Function for input's values validation

function validate() {

  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const email = document.getElementById('email');
  const birthDate = document.getElementById('birthdate');
  const contestQuantity = document.getElementById('quantity');
  const locations = document.querySelectorAll('.checkbox-input[type=radio]');
  const checkboxTerms = document.getElementById('checkbox1');

  //if the input value is empty or less of 2 characters 
  if (firstName.value === '' || firstName.value.length < 2) {
  //show this error message
    document
      .querySelector('#error-firstName')
      .textContent = 'Veuillez renseigner votre prénom.';
  }

  //if the input value is empty or less of 2 characters 
  if (lastName.value === '' || lastName.value.length < 2) {
  //show this error message
    document
      .querySelector('#error-lastName')
      .textContent = 'Veuillez renseigner votre nom.';
  }

  //if the input value is missing or the value does not match with requiered via 'type' attribute
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email.value)) {
  //show this error message
    document
      .querySelector('#error-email')
      .textContent = 'Veuillez renseigner votre email.';
  }

  //if the birthdate value is missing
  if (birthDate.value === '') {
  //show this error message
    document
      .querySelector('#error-birthdate')
      .textContent = 'Veuillez renseigner votre date de naissance.';
  }

  //if the input value is missing or the value does not match with requiered via type attribute
  if (contestQuantity.value === '' || contestQuantity.value.typeMismatch) {
  //show this error message
    document
      .querySelector('#error-contest')
      .textContent = 'Veuillez renseigner le nombre de tournois.';
  }

  //if the requiered terms are not accepted
  if (!checkboxTerms.checked) {
  //show this error message
    document
      .querySelector('#error-terms')
      .textContent = 'Veuillez accepter les conditions d\'utilisation.';
  }

// one location checkbox is requiered to be checked
  for (let location of locations) {
    if (location.checked === true) {
      return true;
    }
    else {
      document
        .querySelector('#error-location')
        .textContent = 'Veuillez choisir une ville.';
        return false;
    }
  }
}

