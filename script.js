function regexChecker() {
    firstName = document.getElementById("firstName").value;
    let firstNameRegex = /^[A-Z][a-z]+$/;
    lastName = document.getElementById("lastName").value;
    let lastNameRegex = /^[A-Z][a-z]+$/;
    if (firstName.match(firstNameRegex) && lastName.match(lastNameRegex)) {
        alert("Yay! Your inputs were all correct!");
    } else {
        alert("Oh no! Thats an invalid format!");
    };
};