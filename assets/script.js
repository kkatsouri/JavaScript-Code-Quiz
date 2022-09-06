question = document.querySelector('#question');
choices = Array.from(document.querySelectorAll('.choice-text'));
scoreText = document.querySelector('#score');

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
      question: 'Complete the following statement: A _______ is used to repeat a specific block of code a known number of times.'
      choice1: 'Comment'
      choice2: 'For loop'
      choice3: 'Operator'
      choice4: 'If Statement'
      answer: 'For loop'
    },
    {
        question: 'What is an array?'
        choice1: 'A type of variable that stores multiple values'
        choice2: 'A block of code designed to perform a aprticular task'
        choice3: 'A conditional statement'
        choice4: 'Not a type of variable that stores multiple values'
        answer: 'A type of variable that stores multiple values'
      },
      {
        question: 'What is Math.random() for?'
        choice1: 'Randomises random number between 0 and 1000'
        choice2: 'Returns an error'
        choice3: 'Multiplies values'
        choice4: 'Returns a pseudo-random number between 0 and 1'
        answer: 'Returns a pseudo-random number between 0 and 1'
      },
      {
        question: 'How does = work as an assignment operator?'
        choice1: 'Removes the value of left operand to right operand'
        choice2: 'Assigns value to its left operand according to its right operand'
        choice3: 'Claims left operand is opposite to right operand'
        choice4: 'Claims left operand does not equal right operand'
        answer: 'Assigns value to its left operand according to its right operand'
      },
      {
        question: 'Correct syntax for an alert box:'
        choice1: 'alert.document(window)'
        choice2: 'window.alert(Hello)'
        choice3: '(Hello).alert'
        choice4: 'alert[Hello]'
        answer: 'window.alert(Hello)'
      },
      {
        question: 'How do you add comments to a Javascript file?'
        choice1: '//Comment'
        choice2: '/**Comment*/'
        choice3: '<!--Comment-->'
        choice4: '-------Comment-------'
        answer: '//Comment'
      },
      {
        question: 'Why do we use arrays in Javascript?'
        choice1: 'To organise our Javascript file'
        choice2: 'To rank information in our Javascript file'
        choice3: 'To store different variables within a single value'
        choice4: 'To store different elements within a single variable'
        answer: 'To store different elements within a single variable'
      },
      {
        question: 'What does document.querySelector() do?'
        choice1: 'Returns a variable that matches the document'
        choice2: 'Returns a document'
        choice3: 'Returns the first element within the document that matches the selector'
        choice4: 'Returns a query'
        answer: 'Returns the first element within the document that matches the selector'
      },
      {
        question: 'What is the EventTarget in the following: button.addEventListener('click', (event)...'
        choice1: 'click'
        choice2: 'addEventListener'
        choice3: '(event)'
        choice4: 'button'
        answer: 'button'
      },
      {
        question: 'How do you call a function called aFunction?'
        choice1: 'Hello? Function?'
        choice2: 'call = aFunction()'
        choice3: 'function aFunction()'
        choice4: 'document.afunction'
        answer: 'function aFunction()'
      },
]