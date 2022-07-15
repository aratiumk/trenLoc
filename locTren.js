"use strict";

window.addEventListener(
  `load`,
  (event) => {
    initialise();
  },
  false
);

function initialise() {
  initFormValidation();
  let button = document.getElementById(`button-1`);
  button.addEventListener(`click`, grabData);
}

function grabData(event) {
  event.preventDefault();
  let dateFormular = new FormData(document.getElementById(`formular`));
  let client = {};
  for (let pair of dateFormular.entries()) {
    let inputName = pair[0];
    let inputValue = pair[1];
    client[inputName] = inputValue;
  }

  console.log(client);
}

function initFormValidation() {
  let numeFamilie = document.getElementById(`nume-familie`);
  numeFamilie.addEventListener("input", function (event) {
    if (numeFamilie.validity.tooShort) {
      numeFamilie.setCustomValidity(
        `Va rog sa va introduceti minim 3 caractere`
      );
      numeFamilie.reportValidity();
    } else if (numeFamilie.validity.tooLong) {
      numeFamilie.setCustomValidity(
        `Va rog introduceti mai putin de 20 de caractere`
      );
      numeFamilie.reportValidity();
    } else if (numeFamilie.validity.valueMissing) {
      numeFamilie.setCustomValidity(
        `Va rog introduceti numele dumneavoastra de familie`
      );
      numeFamilie.reportValidity();
    } else {
      numeFamilie.setCustomValidity("");
    }
  });

  let prenumele = document.getElementById(`prenume`);
  prenumele.addEventListener("input", function (event) {
    if (prenumele.validity.tooShort) {
      prenumele.setCustomValidity(`Va rog sa va introduceti minim 3 caractere`);
      prenumele.reportValidity();
    } else if (prenumele.validity.tooLong) {
      prenumele.setCustomValidity(
        `Va rog introduceti mai putin de 20 de caractere`
      );
      prenumele.reportValidity();
    } else if (prenumele.validity.valueMissing) {
      prenumele.setCustomValidity(`Va rog introduceti numele dumneavoastra`);
      prenumele.reportValidity();
    } else {
      prenumele.setCustomValidity("");
    }
  });

  let varsta = document.getElementById(`varsta`);
  varsta.addEventListener("input", function (event) {
    if (varsta.validity.rangeUnderFlow) {
      varsta.setCustomValidity(`Va rog sa va introduceti varsta corect`);
      varsta.reportValidity();
    } else if (varsta.validity.rangeOverFlow) {
      varsta.setCustomValidity(`va rog sa va introduceti varsta corect`);
      varsta.reportValidity();
    } else if (varsta.validity.valueMissing) {
      varsta.setCustomValidity(`Va rog introduceti varsta dumneavoastra`);
      varsta.reportValidity();
    } else {
      varsta.setCustomValidity("");
    }
  });

  let mail = document.getElementById(`email`);
  mail.addEventListener("input", function (event) {
    if (mail.validity.typeMismatch) {
      mail.setCustomValidity(`Va rog sa introduceti o adresa de mail valida`);
      mail.reportValidity();
    } else if (mail.validity.valueMissing) {
      mail.setCustomValidity(`Va rog introduceti mail-ul dumneavoastra`);
      mail.reportValidity();
    } else {
      mail.setCustomValidity("");
    }
  });

  let numarDeTelefon = document.getElementById(`telefon`);
  numarDeTelefon.addEventListener("input", function (event) {
    if (numarDeTelefon.validity.patternMismatch) {
      numarDeTelefon.setCustomValidity(
        `Va rog sa va introduceti numar de telefon corect`
      );
      numarDeTelefon.reportValidity();
    } else {
      numarDeTelefon.setCustomValidity("");
    }
  });
}
