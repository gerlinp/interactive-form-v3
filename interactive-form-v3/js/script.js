// Global Variables
const otherJob = document.querySelector('#other-job-role');
const design = document.querySelector('#design');
const color = document.querySelector('#color');
const jsPuns = document.querySelectorAll('[data-theme="js puns"]');
const jshearts = document.querySelectorAll('[data-theme="heart js"]');
let title = document.querySelector('#title');



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

//Activities

const act = document.querySelector('#activities').elements;
let cost = 0;
let actCost = document.querySelector('#activities-cost');

function check() {
    cost = 0;
    for (let i = 0; i < act.length; i++ ) {
        if (act[i].checked == true) {
            console.log(act[i])
            cost += parseInt(act[i].getAttribute('data-cost'));
            console.log(cost)
            actCost.innerHTML = `Total: $${cost}`;
        };
    };  
    actCost.innerHTML = `Total: $${cost}`;
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
