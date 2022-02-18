    // This is my first JavaScript code!
    console.log('Hello World');

    // Performing a task
    function greet(name, lastName) {
      console.log('Hello ' + name + ' ' + lastName);
    }

    greet('John', 'Smith');
    greet('Mary');

    // Calculating a value
    function square(number) {
      return number * number;
    }

    console.log(square(2));

    let selectedColors = ['red', 'blue'];
    selectedColors[2] = 'green';
    console.log(selectedColors.length);
    
    let name = 'Mosh'; // String Literal
    let age = 30; // Number Literal
    let isApproved = false; // Boolean Literal
    let firstName = undefined;
    let person = {
      name: 'Mosh',
      age: 30
    };

    // Dot Notation
    person.name = 'John';

    // Bracket Notation
    let selection = 'name';
    person[selection] = 'Mary';

    console.log(person.name);

    let interestRate = 0.3;
    interestRate = 1;
    console.log(interestRate);

    console.log(name);

    // Cannot be a reserved keyword
    // Should be meaningful
    // Cannot start with a number (1name)
    // Cannot contain a space or hyphen (-)
    // Are case-sensitive

    let lastName = 'Hamedani';