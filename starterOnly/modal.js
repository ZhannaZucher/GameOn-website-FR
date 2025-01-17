//"use strict";

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
const form = document.getElementsByTagName('form')[0];
const submitBtn = document.getElementsByClassName('btn-submit')[0];
const confirmForm = document.getElementById("confirmation");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Close modal form 
function closeModal() {
  modalbg.style.display = "none";
}

//Close modal event
closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));


/******Functions for input's values validation and errors alerting*****/

// Firstname input value validating function
function validateFirstName(formIsValid) {
  const firstName = document.getElementById('first');
  //if the input value is empty or less of 2 characters 
  if (firstName.value === '' || firstName.value.length < 2) {
    //show this error message
    document
      .querySelector('#error-firstName')
      .textContent = 'Veuillez renseigner votre prénom.';
    firstName
      .closest(".formData")
      .setAttribute('data-error-visible', 'true');
    formIsValid = false;
  }
  else {
    // Remove error alert
    document
      .querySelector('#error-firstName')
      .textContent = '';
    firstName
      .closest(".formData")
      .removeAttribute('data-error-visible');
  }
  return formIsValid;
};

// Lastname input value validating function
function validateLastName(formIsValid) {
  const lastName = document.getElementById('last');
  // if the input value is empty or less of 2 characters 
  if (lastName.value === '' || lastName.value.length < 2) {
    // show this error message
    document
      .querySelector('#error-lastName')
      .textContent = 'Veuillez renseigner votre nom.';
    lastName
      .closest(".formData")
      .setAttribute('data-error-visible', 'true');
    formIsValid = false;
  }
  else {
    // Remove error alert
    document
      .querySelector('#error-lastName')
      .textContent = '';
    lastName
      .closest(".formData")
      .removeAttribute('data-error-visible');
  }
  return formIsValid;
};

// Email input value validating function
function validateEmail(formIsValid) {
  const email = document.getElementById('email');
  //if the input value is missing or the value does not match with requiered via 'type' attribute
  if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email.value)) {
    //show this error message
    document
      .querySelector('#error-email')
      .textContent = 'Veuillez renseigner votre email.';
    email
      .closest(".formData")
      .setAttribute('data-error-visible', 'true');
    formIsValid = false;
  }
  else {
    // Remove error alert
    document
      .querySelector('#error-email')
      .textContent = '';
    email
      .closest(".formData")
      .removeAttribute('data-error-visible');
  }
  return formIsValid;
};

// Birthdate input value validating function
function validateBirthDate(formIsValid) {
  const birthDate = document.getElementById('birthdate');
  // if the birthdate value is missing
  if (birthDate.value === '') {
    // Show this error message
    document
      .querySelector('#error-birthdate')
      .textContent = 'Veuillez renseigner votre date de naissance.';
    birthDate
      .closest(".formData")
      .setAttribute('data-error-visible', 'true');
    formIsValid = false;
  }
  else {
  // Remove error alert
    document
      .querySelector('#error-birthdate')
      .textContent = '';
    birthDate
      .closest(".formData")
      .removeAttribute('data-error-visible');
  }
  return formIsValid;
};

// Quantity of contests made input value validating function
function validateContestQuantity(formIsValid) {
  const contestQuantity = document.getElementById('quantity');
  // if the input value is missing or the value does not match with requiered via type attribute
  if (contestQuantity.value === '' || contestQuantity.value.typeMismatch) {
  // Show this error message
    document
      .querySelector('#error-contest')
      .textContent = 'Veuillez renseigner le nombre de tournois.';
    contestQuantity
      .closest(".formData")
      .setAttribute('data-error-visible', 'true');
    formIsValid = false;
  }
  else {
  // Remove error alert
    document
      .querySelector('#error-contest')
      .textContent = '';
    contestQuantity
      .closest(".formData")
      .removeAttribute('data-error-visible');
  }
  return formIsValid;
};

// Checkbox for requiered terms approval validating function
function validateCheckBoxTerms(formIsValid) {
  const checkboxTerms = document.getElementById('checkbox1');
  // if the requiered terms are not accepted
  if (!checkboxTerms.checked) {
  // Show this error message
    document
      .querySelector('#error-terms')
      .textContent = 'Veuillez accepter les conditions d\'utilisation.';
    formIsValid = false;
  }
  else {
  // Remove error alert
    document
      .querySelector('#error-terms')
      .textContent = '';
  }
  return formIsValid;
};

//Function for location checkbox' input's values validation and errors alerting:
function validateCheckBoxLocations(formIsValid) {
  const loc1 = document.getElementById('location1');
  const loc2 = document.getElementById('location2');
  const loc3 = document.getElementById('location3');
  const loc4 = document.getElementById('location4');
  const loc5 = document.getElementById('location5');
  const loc6 = document.getElementById('location6');
  //if no one checkbox is checked
  if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
    //show this error message
    document
      .querySelector('#error-location')
      .textContent = 'Veuillez choisir une ville.';
    formIsValid = false;
  }
  else {
  // Remove error alert
    document
      .querySelector('#error-location')
      .textContent = '';
  }
  return formIsValid;
};


//Function for form validation
function validateForm() {
  let formIsValid = true;
  formIsValid = validateFirstName(formIsValid);
  formIsValid = validateLastName(formIsValid);
  formIsValid = validateEmail(formIsValid);
  formIsValid = validateBirthDate(formIsValid);
  formIsValid = validateContestQuantity(formIsValid);
  formIsValid = validateCheckBoxTerms(formIsValid);
  formIsValid = validateCheckBoxLocations(formIsValid);
  return formIsValid;
}

//submit modal event
form.addEventListener('submit', function (event) {
  event.preventDefault();
  if (validateForm()) {
    confirmRegistration()
  }
});

//at succesful submitting a confirmation message appears instead of the modal
function confirmRegistration() {
  form.style.display = "none";
  confirmForm.style.display = "flex";
}