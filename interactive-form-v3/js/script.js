// Global Variables
const otherJob = document.querySelector('#other-job-role');
const design = document.querySelector('#design');
const color = document.querySelector('#color');
const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
const jshearts = document.querySelectorAll('[data-theme="heart js"]');
const act = document.querySelector('#activities');
const actInputs = document.querySelector('#activities').elements;
let title = document.querySelector('#title');
let actCost = document.querySelector('#activities-cost');
let cost = 0;


// Name field focus on startup function
focusName = function() {
    document.querySelector('#name').focus()
}

// Adds other job field when other is selected.
 jobCheck = () => {
    if ( title.value !== 'other' ) {
        otherJob.style.display = "none";
    } else {
        otherJob.style.display = "block";
    };
}
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

//prevents user from selecting mutltiple workshops that are at the same time.
function timeCheck(first, second) {
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

act.addEventListener('change', () => {
    check();
});







// Event Listener for Job role.
title.addEventListener('change', () => {
    jobCheck();
});
// Event listener for tshirt color.
design.addEventListener('change', () => {
    colorCheck();
});
// first load
colorCheck();
focusName();
jobCheck();
