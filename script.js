

let passwordField = document.getElementById("password");
let confirmPasswordField = document.getElementById("confirm-password");
let submitBtn = document.getElementById("create-profile");

submitBtn.addEventListener('click', checkPassword);

function checkPassword(e) {
    
    let valid = true;
    if (passwordField.value !== confirmPasswordField.value) {
        confirmPasswordField.style.border = "solid 3px red"
        confirmPasswordField.willValidate = false;
        confirmPasswordField.validationMessage = "Passwords do not match";
        console.log('majke ti ga izbokarim')
        e.preventDefault();
    }
    return valid;
};

confirmPasswordField.addEventListener('change', function() {
    if (passwordField.value !== confirmPasswordField.value) {
        confirmPasswordField.style.border = "solid 3px red"
    } else {
        confirmPasswordField.style.border = "1px solid gray";
    }
});

passwordField.addEventListener('change', function() {
    if (passwordField.value !== confirmPasswordField.value) {
        confirmPasswordField.style.border = "solid 3px red"
    } else {
        confirmPasswordField.style.border = "1px solid gray";
    }
});