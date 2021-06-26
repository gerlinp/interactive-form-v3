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

// function for chekc what payment is selected.
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
    
/*-------- Form Validation-------*/

const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

const form = document.querySelector('#form');
const thanks = document.querySelector('.thanks');
const nameInput =  document.querySelector('#name');
const emailInput =  document.querySelector('#email');

const inputs = [nameInput,emailInput]

let isFormValid = false;
let isValidationOn = false;

const resetElm = (elm) => {
    elm.classList.remove('invalid');
    elm.nextElementSibling.style.display = "none";
};

const invalidateElm = (elm) => {
    elm.classList.add('invalid');
    elm.nextElementSibling.style.display = "block";
};

const validateInputs = () => {
    if (!isValidationOn) return;
    isFormValid = true;
    resetElm(nameInput);
    resetElm(emailInput);

    if (!nameInput.value) {
        isFormValid = false;
        invalidateElm(nameInput);
    }

    if (!isValidEmail(emailInput.value)) {
        isFormValid = false;
        invalidateElm(emailInput);
    }
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    isValidationOn = true;
    validateInputs();
    if (isFormValid) {
        form.remove();
        thanks.style.display = "block";
    }
});

inputs.forEach(input => {
    input.addEventListener('input', () => {
        validateInputs();
    });
});


