// Global Variables
const otherJob = document.querySelector('#other-job-role');
const design = document.querySelector('#design');
const color = document.querySelector('#color');
const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
const jshearts = document.querySelectorAll('[data-theme="heart js"]');
const act = document.querySelector('#activities');
const actInputs = document.querySelector('#activities').elements;
const payment = document.querySelector('#payment');
const payInfo = document.querySelector('#payment').options;
const cardNum = document.querySelector('#cc-num');
const zip = document.querySelector('#zip');
const cvv = document.querySelector('#cvv');
const form = document.querySelector('#form');
const nameInput =  document.querySelector('#name');
const emailInput =  document.querySelector('#email');
const inputs = [nameInput,emailInput,]
const month = document.querySelector('#exp-month');
const year = document.querySelector('#exp-year');
let title = document.querySelector('#title');
let actCost = document.querySelector('#activities-cost');
let cost = 0;

document.querySelector('#name').focus() // Name field focus on startup function
document.querySelector('[value=credit-card]').selected = true;  // Credit card the default option for payment.

// Adds other job field when other is selected.
 jobCheck = () => {
    if ( title.value !== 'other' ) {
        otherJob.style.display = "none";
    } else {
        otherJob.style.display = "block";
    };
};
jobCheck();
title.addEventListener('change', () => jobCheck()); // Event Listener for Job role.
    
// Adds Color field when a design is selected
colorCheck = () => {
    if ( design.value == 'Select Theme' ) {
        color.disabled = true;
    } else {
        color.disabled = false;
        for (i = 0; i < color.length; i++) {
            if (design.value == 'js puns') {
                designColor('heart js');
                color.selectedIndex = '1';
            } else {
                designColor('js puns');
                color.selectedIndex = '4';
            }                
        };
    };
};
colorCheck();
design.addEventListener('change', () => colorCheck()); // Event listener for tshirt color.

// checks data-theme and disables as neccessary.
function designColor(val) {
    if (color[i].getAttribute('data-theme') == val) {
        color[i].disabled = true;
    } else {
        color[i].disabled = false;
    }; 
};

// loops through activities and caluculates cost based on whats selected.
function check() {
    cost = 0;
    for (let i = 0; i < actInputs.length; i++ ) {
        if (actInputs[i].checked == true) {
            cost += parseInt(actInputs[i].getAttribute('data-cost'));
            actCost.innerHTML = `Total: $${cost}`;
        };
    actCost.innerHTML = `Total: $${cost}`;
    timeCheck();
    }
};
act.addEventListener('change', () => check()); // Event listener for actvities section

//prevents user from selecting mutltiple workshops that are at the same time.
function timeCheck() {
    if (actInputs[1].checked && actInputs[3].checked) {
        alert(`Please choose only one workshop between ${actInputs[1].getAttribute('data-day-and-time')}`);
        actInputs[1].checked = false;
        actInputs[3].checked = false;
    } else if (actInputs[2].checked && actInputs[4].checked) {
        alert(`Please choose only one workshop between ${actInputs[2].getAttribute('data-day-and-time')}`);
        actInputs[2].checked = false;
        actInputs[4].checked = false;
    }
};

// function to check what payment is selected.
function payCheck() {
    for (let i = 1; i < payInfo.length; i++ ) {
        let payVal = '#'
         payVal += payInfo[i].getAttribute('value');
        if (payInfo[i].selected) {
            document.querySelector(payVal).style.display = 'block'
        } else {
           document.querySelector(payVal).style.display = 'none'; 
        }
    }
};
payCheck();
payment.addEventListener('change', () => payCheck()); // Event listener for payment color.
    
/* Form Validation based on form validation from  */



const isValidCredit = (cardNum) => { return /^\d{13,16}$/.test(cardNum.value)};
const isValidCredit2 = (cardNum) => {return /^\d+$/.test(cardNum.value)}; 
const isValidZip = (zip) => { return /^\d{5}$/.test(zip.value)};
const IsValidcvv = (cvv) => { return /^\d{3}$/.test(cvv.value)};
const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
    elm.parentElement.classList.remove('not-valid');
    elm.parentElement.classList.remove('valid');
    elm.nextElementSibling.style.display = "none";
};

const invalidateElm = (elm) => {
    elm.parentElement.classList.add('not-valid');
    elm.nextElementSibling.style.display = "block";
};
const validateElm = (elm) => {
    elm.parentElement.classList.add('valid');
    elm.nextElementSibling.style.display = "none";
};


const validateInputs = () => {
    if (!isValidationOn) return;
    isFormValid = true;
    
    resetElm(emailInput);

    if (!nameInput.value) {
        isFormValid = false;
        invalidateElm(nameInput);
    } else {
        resetElm(nameInput);
        validateElm(nameInput);
    }

    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    } else {
        resetElm(emailInput);
        validateElm(emailInput);
    };

    let actCheck = document.querySelector('#activities legend');
    actCheck.classList.remove('not-valid');
    actCheck.classList.remove('valid');

    if ( cost == 0 ) {
        document.querySelector('#activities-hint').style.display = 'block'
        document.querySelector("#activities legend").classList.add('not-valid');
    } else {
        document.querySelector('#activities-hint').style.display = 'none'
        document.querySelector("#activities legend").classList.add('valid');
    };

 
};

const validateCC = () => {
    if (payInfo[1].selected) {
        let isCreditCardValid = true
    const creditcardval = [cardNum,zip,cvv];
    creditcardval.forEach( option => resetElm(option));   
        if (!isValidCredit2(cardNum)) {       
            document.querySelector('#cc-hint').innerHTML = 'Credit card cannot contain letters & be between 13 - 16 digits'
            isFormValid = false;
            isCreditCardValid = false
            invalidateElm(cardNum);
        } else {
            document.querySelector('#cc-hint').innerHTML = 'Credit card number must be between 13 - 16 digits'
            if (!isValidCredit(cardNum)) {
                isFormValid = false;
                isCreditCardValid = false
                invalidateElm(cardNum);
            };
        }
        if (!isValidZip(zip)) {
         isFormValid = false;
         isCreditCardValid = false
         invalidateElm(zip);
        };
 
        if (!IsValidcvv(cvv)) {
         isFormValid = false;
         isCreditCardValid = false
         invalidateElm(cvv);
        };
        let legend = document.querySelector(".payment-methods legend");
        if (isCreditCardValid) {

            if (legend.classList.contains('not-valid') ) {
                legend.classList.remove('not-valid');
            }
            legend.classList.add('valid')
        } else if (legend.classList.contains('valid')) {
            legend.classList.remove('valid');
            legend.classList.add('not-valid')
        };
    }
};

document.querySelector('.credit-card-box').addEventListener('keyup', (e) => {
    validateCC();
});

inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInputs();
    });
});

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    validateCC()
    if (isFormValid) {
        form.submit();
    }
});



