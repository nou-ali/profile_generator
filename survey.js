const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const profileDetails = {};

rl.question("What's your name? Nicknames are also acceptable", (answer) => {
  profileDetails.name = answer;

  rl.question("What's an activity you like doing?", (answer) => {
    profileDetails.activty = answer;

    rl.question("What do you listen to while doing that?", (answer) => {
      profileDetails.music = answer;

      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.)", (answer) => {
        profileDetails.mealTime = answer;

        rl.question("What's your favourite thing to eat for that meal?", (answer) => {
          profileDetails.favouriteMeal = answer;

          rl.question("Which sport is your absolute favourite?", (answer) => {
            profileDetails.sport = answer;

            rl.question("What is your superpower? In a few words, tell us what you are amazing at!", (answer) => {
              profileDetails.superpower = answer;

              console.log(`My name is ${profileDetails.name}. Pre COVID-19 I was really into ${profileDetails.activty} but I can't do that much anymore. Right now I'm listening to ${profileDetails.music} they're amazing. My favourite meal time is ${profileDetails.mealTime} and I love to eat ${profileDetails.favouriteMeal}. When I'm trying to be active I usually ${profileDetails.sport}, it's my favorite sport. If I had to choose a superpower, it would be ${profileDetails.superpower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});



