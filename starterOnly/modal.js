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


//Function for input's values validation and errors alerting


function validateForm() {

  const firstName = document.getElementById('first');
  const lastName = document.getElementById('last');
  const email = document.getElementById('email');
  const birthDate = document.getElementById('birthdate');
  const contestQuantity = document.getElementById('quantity');
  const checkboxTerms = document.getElementById('checkbox1');
  const loc1 = document.getElementById('location1');
  const loc2 = document.getElementById('location2');
  const loc3 = document.getElementById('location3');
  const loc4 = document.getElementById('location4');
  const loc5 = document.getElementById('location5');
  const loc6 = document.getElementById('location6');
  let formIsValid = true;

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

  //if the input value is empty or less of 2 characters 
  if (lastName.value === '' || lastName.value.length < 2) {
  //show this error message
    document
      .querySelector('#error-lastName')
      .textContent = 'Veuillez renseigner votre nom.';
    lastName
      .closest(".formData")
      .setAttribute('data-error-visible', 'true');
    formIsValid = false;
  }

  //if the input value is missing or the value does not match with requiered via 'type' attribute
  if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(email.value)) {
  //show this error message
    document
      .querySelector('#error-email')
      .textContent = 'Veuillez renseigner votre email.';
    email
      .closest(".formData")
      .setAttribute('data-error-visible', 'true');
    formIsValid = false;
  }

  //if the birthdate value is missing
  if (birthDate.value === '') {
  //show this error message
    document
      .querySelector('#error-birthdate')
      .textContent = 'Veuillez renseigner votre date de naissance.';
    birthDate
      .closest(".formData")
      .setAttribute('data-error-visible', 'true');
    formIsValid = false;
  }

  //if the input value is missing or the value does not match with requiered via type attribute
  if (contestQuantity.value === '' || contestQuantity.value.typeMismatch) {
  //show this error message
    document
      .querySelector('#error-contest')
      .textContent = 'Veuillez renseigner le nombre de tournois.';
    contestQuantity
      .closest(".formData")
      .setAttribute('data-error-visible', 'true');
    formIsValid = false;
  }

  //if the requiered terms are not accepted
  if (!checkboxTerms.checked) {
  //show this error message
    document
      .querySelector('#error-terms')
      .textContent = 'Veuillez accepter les conditions d\'utilisation.';
    formIsValid = false;
  }
 //if no one checkbox is checked
  if (!loc1.checked && !loc2.checked && !loc3.checked && !loc4.checked && !loc5.checked && !loc6.checked) {
  //show this error message
    document
      .querySelector('#error-location')
      .textContent = 'Veuillez choisir une ville.';
    formIsValid = false;
  }

  return formIsValid;
}

// 
const form = document.getElementsByTagName('form')[0];
const submitBtn = document.getElementsByClassName('btn-submit')[0];

submitBtn.addEventListener('click', function (event) {
  if (!validateForm()) {
    event.preventDefault();
  } else {
    alert ('ok');
  }
});