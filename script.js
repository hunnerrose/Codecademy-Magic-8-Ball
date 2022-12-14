//Logging user's username and question they want to ask the Magic 8-Ball
/* let userName = document.getElementById('name').value;
let userQuestion = document.getElementById('question').value; */


//Set up expression for random number generator. Math.random returns a value btwn 0 (inclusive) and 1 (exclusive) while math.floor rounds to ensure we only have whole #s
let randomNumber = Math.floor(Math.random() * 8);

//this is the expression holder of what the 8-ball returns
let eightBall = "";

//conditionals which list the options the 8-ball can generate. Use '==' for comparison purposes vs a single '=' which just assigns/reassigns the variable

function submit() {
    let userName = document.getElementById('name').value;
    let userQuestion = document.getElementById('question').value;
    console.log(userName);
    console.log(userQuestion);
    let randomNumber = Math.floor(Math.random() * 8);;
        if (randomNumber == 0) {
        eightBall = "It is certain";
        } 
        else if (randomNumber == 1) {
        eightBall = "It is decidedly so";
        }
        else if (randomNumber == 2) {
        eightBall = "Reply hazy try again";
        }
        else if (randomNumber == 3) {
        eightBall = "Cannot predict now";
        }
        else if (randomNumber == 4) {
        eightBall = "Do not count on it";
        }
        else if (randomNumber == 5) {
        eightBall = "My sources say no";
        }
        else if (randomNumber == 6) {
        eightBall = "Outlook not so good";
        }
        else if (randomNumber == 7){
        eightBall = "Signs point to yes"};
        alert(eightBall);
        console.log(randomNumber)
        console.log(eightBall)
}


