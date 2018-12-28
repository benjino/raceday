// Assigns a race number from 0 to 1000.
let raceNumber = Math.floor(Math.random() * 1000);
// Is participant early (true) or not early (false).
const early = true;
// Age variable.
const age = 19;
// If the participant is early and over the age of 18, their race number will be greater than 1000.
if (early && age > 18) {
    raceNumber += 1000;
    };
// If you have arrived early and are over the age of 18.
if (early && age > 18) {
    console.log(`Your race start time will be at 9:30am, and your racenumber is ${raceNumber}.`);
// If you have not arrived early and are over the age of 18.
    } else if (!early && age > 18) {
      console.log(`Late adults run at 11:00 am; your racenumber is ${raceNumber}.`);
// If you are younger than 18.
    } else if (age < 18) {
      console.log(`Your race start time will be at 12:30 pm, and your racenumber is ${raceNumber}.`);
// If you are 18 years of age.
    } else {
      console.log('Please go to the registration desk, thank you.')
};
