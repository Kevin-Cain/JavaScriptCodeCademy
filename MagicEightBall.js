

// Magic Eight Ball Future Teller

var userName = '';
userName ? console.log(`Hello ${userName}!`)
: console.log('Hello!');
var userQuestion = 'Am I the best Programmer ever?';
console.log(userQuestion);
var randomNumber = Math.floor(Math.random() * 8);
var eightBall = ''
if (randomNumber === 0) {
  eightball = 'It is certain'
} else if (randomNumber === 1){
  eightball = 'Reply hazy try again'
} else if (randomNumber === 2){
  eightball = 'Cannot predict now'
} else if (randomNumber === 3){
  eightball = 'Do not count on it'
} else if (randomNumber === 4){
  eightball = 'My sources say no'
} else if (randomNumber === 5){
  eightball = 'Outlook not so good'
} else if (randomNumber === 6){
  eightball = 'Signs point to yes'
}
console.log(eightball)