const otherJob = document.querySelector('#other-job-role');
let title = document.querySelector('#title');

// Name field focus on startup function
focusName = function() {
    document.querySelector('#name').focus()
}

// Event Listener for Job role.
title.addEventListener('click', function() {
    jobCheck();
});

// Adds other job field when other is selected.
jobCheck = () => {
    if ( title.value !== 'other' ) {
        otherJob.style.display = "none";
    } else {
        otherJob.style.display = "block";
    };
}

focusName();
jobCheck();
