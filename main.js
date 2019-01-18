// eslint-disable-next-line
function greet() {
    // get the inputs by id
    var firstNameInput = document.getElementById('first-name');
    var middleName = document.getElementById('middle-name');
    var lastName = document.getElementById('last-name').value;

    // get value out of inputs
    var firstName = firstNameInput.value;
    middleName = middleName.value;

    // make the greeting
    var greeting = 'Hello ' + firstName + ' ' + middleName + ' ' + lastName + '!!!';

    // display greeting
    var greeter = document.getElementById('greeter');
    // changes the prompt into the greeting
    greeter.textContent = '<h2>' + greeting + '</h2>';
}
// TO DO: validate name inputs
// TO DO: clear inputs after greet?