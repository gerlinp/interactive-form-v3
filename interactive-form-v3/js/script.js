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
const nameField = document.querySelector("#name");
const email = document.querySelector("#email");
let title = document.querySelector('#title');
let actCost = document.querySelector('#activities-cost');
let cost = 0;
let fail = ''
let emailCheck = true;

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


const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const telephoneInput = document.getElementById("telephone");
const emailInput = document.getElementById("email");

function isValidUsername(username) {
    return /^[a-z]+$/.test(username);
  }

function isValidEmail(email) {
    return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
};

isNameBlank = () => {
    if ( nameField.value == "") {
        fail += `Name field should not be blank`
    };
};

function showOrHideTip(show, element) { // show element when show is true, hide when false
    if (show) {
      element.style.display = "inherit";
      emailCheck = true;
    } else {
      element.style.display = "none";
        emailCheck = false;
    }
  };

  function createListener(validator) {
    return e => {
      const text = e.target.value;
      const valid = validator(text);
      const showTip = text !== "" && !valid;
      const tooltip = e.target.nextElementSibling;
      showOrHideTip(showTip, tooltip);
    };
  };

email.addEventListener("input", createListener(isValidEmail));

let form = document.querySelector('#submit')
document.querySelector('[type="submit"]').addEventListener('click', function(e) { 
    e.preventDefault();
    fail ='';
    isNameBlank();
   if (fail !== '' || show == true) {
        alert('form still has errors')
   } else {
    form.submit();
   }
    
});













