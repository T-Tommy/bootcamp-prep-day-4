// eslint-disable-next-line
function greet() {
    console.log('greet function called');

    // get the inputs by id
    var firstName = document.getElementById('first-name').value;
    var middleNameInput = document.getElementById('middle-name');
    var lastName = document.getElementById('last-name');

    // get value out of inputs
    var middleName = middleNameInput.value;
    lastName = lastName.value;

    // make the greeting
    var greeting = 'Hello ' + firstName + ' ' + middleName + ' ' + lastName + '!!!';
    console.log(greeting);

    // display greeting
    // remove prompt
}

// TO DO: validate name inputs
// TO DO: clear inputs after greet?