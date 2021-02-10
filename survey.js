const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//SURVEY QUESTIONS
let question1 = "What's your name? Nicknames are also acceptable : ";
let question2 = "What's an activity you like doing? ";
let question3 = "What do you listen to while doing that? ";
let question4 = "Which meal is your favourite (eg: dinner, brunch, etc.) ";
let question5 = "What's your favourite thing to eat for that meal? ";
let question6 = "Which sport is your absolute favourite? ";
let question7 = "What is your superpower? In a few words, tell us what you are amazing at! ";



rl.question(question1, (answer1) => {
  // console.log(answer1);
  rl.question(question2, (answer2) => {
    // console.log(answer2);
    rl.question(question3, (answer3) => {
      rl.question(question4, (answer4) => {
        rl.question(question5, (answer5) => {
          rl.question(question6, (answer6) => {
            rl.question(question7, (answer7) => {
              //log has to be in the last question,
              //so the whole question list can run.
              //If placed inside another question it
              //will stop the other q's from completing
              console.log(`Thank you for your valuable feedback: ${answer1}`);
              rl.close();
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7} at inopportune times.`);
            });
          });
        });
      });
    });
  });
});


