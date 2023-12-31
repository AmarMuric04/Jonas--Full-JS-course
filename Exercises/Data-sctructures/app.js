// // Coding Challenge #1

// /*
// We're building a football betting app (soccer for my
//      American friends 😅)!

// Suppose we get data from a web service about a certain
//  game (below). In this challenge we're gonna work with
//   the data. So here are your tasks:

// 1. Create one player array for each team (variables
//     'players1' and 'players2')
// 2. The first player in any player array is the
// goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable
// ('gk') with the goalkeeper's name, and one array
// ('fieldPlayers') with all the remaining 10 field
// players
// 3. Create an array 'allPlayers' containing all
// players of both teams (22 players)
// 4. During the game, Bayern Munich (team 1) used
// 3 substitute players. So create a new array
// ('players1Final') containing all the original
//  team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
// 5. Based on the game.odds object, create one
// variable for each odd (called 'team1', 'draw' and
// 'team2')
// 6. Write a function ('printGoals') that receives
//  an arbitrary number of player names (NOT an array)
//  and prints each of them to the console, along with
//   the number of goals that were scored in total
//    (number of player names passed in)
// 7. The team with the lower odd is more likely
// to win. Print to the console which team is more
// likely to win, WITHOUT using an if/else statement
//  or the ternary operator.

// TEST DATA FOR 6: Use players 'Davies', 'Muller',
// 'Lewandowski' and 'Kimmich'. Then, call the function
// again with players from game.scored

// GOOD LUCK 😀
// */

// const game = {
//   team1: "Bayern Munich",
//   team2: "Borrussia Dortmund",
//   players: [
//     [
//       "Neuer",
//       "Pavard",
//       "Martinez",
//       "Alaba",
//       "Davies",
//       "Kimmich",
//       "Goretzka",
//       "Coman",
//       "Muller",
//       "Gnarby",
//       "Lewandowski",
//     ],
//     [
//       "Burki",
//       "Schulz",
//       "Hummels",
//       "Akanji",
//       "Hakimi",
//       "Weigl",
//       "Witsel",
//       "Hazard",
//       "Brandt",
//       "Sancho",
//       "Gotze",
//     ],
//   ],
//   score: "4:0",
//   scored: [
//     "Lewandowski",
//     "Gnarby",
//     "Lewandowski",
//     "Hummels",
//     "Davies",
//     "Muller",
//     "Lewandowski",
//     "Kimmich",
//   ],
//   date: "Nov 9th, 2037",
//   odds: {
//     team1: 1.33,
//     x: 3.25,
//     team2: 6.5,
//   },
// };
// const players1 = [...game.players[0]];
// const players2 = [...game.players[1]];
// console.log(players1, players2);

// let [gk, pavard, ...fieldPlayers] = players1;
// pavard = "thiago";
// const teamAfterSubmission = [gk, pavard, ...fieldPlayers];
// console.log(teamAfterSubmission);
// console.log(gk);
// console.log(fieldPlayers);
// const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// const players1Final = [...players1, "Thiago", "Çoutinho", "Perisic"];
// console.log(players1Final);

// const { team1, team2 } = game.odds;
// const draw = game.odds.x;
// console.log(team1, draw, team2);

// function printGoals(scorers) {
//   goalsScored = 0;
//   const scoreSummary = [];
//   for (let i = 0; i < scorers.length; i++) {
//     goalsScored = i;
//     scoreSummary.push(`${goalsScored + 1} scored by: ${scorers[i]},`);
//   }
//   //   console.log(scoreSummary.join(", "));
//   console.log(...scoreSummary);
// }
// printGoals(game.scored);
// const underdog =
//   team1 > team2
//     ? "Bayern is more likely to win"
//     : "Dortmund is more likely to win";

// console.log(underdog);

// function bet(bet, what) {
//   return bet * what;
// }
// console.log(bet(1000, team2));

// Coding Challenge #2

/* 
Let's continue with our football betting app!
*/
const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels", "Murga"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*
1. Loop over the game.scored array and print each player name to the console, along with the goal number 
(Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied 
  how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team named of victs directly from the game object, don't hardcode them (except for "draw"). 
HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored 
as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
// */
// for (const [index, scorer] of game.scored.entries()) {
//   console.log(`Goal number ${index + 1} was scored by: ${scorer}`);
// }

// const value = Object.entries(game.odds);
// let sum = 0;
// for (const [odd, values] of value) {
//   console.log(odd, values);
//   sum += values;
// }
// console.log((sum / value.length).toFixed(2));

// function a(parameter) {
//   const newArray = [];
//   for (let i = 0; i < parameter.length; i++) {
//     newArray.push(`${i + 1}: ${parameter[i]}`);
//   }
//   console.log(...newArray);
// }
// a(game.scored);

// function b(odds) {
//   let oddsAverage = 0;
//   for (i = 0; i < odds.length; i++) {
//     oddsAverage += odds[i] / odds.length;
//   }
//   console.log(oddsAverage.toFixed(2));
// }
// b(Object.values(game.odds));

// const entries = Object.entries(game.odds);

// // console.log(entries);
// for (const [team, odds] of entries) {
//   word = team === "x" ? "draw" : `victory ${game[team]}`;
//   console.log(`Odds of ${word} ${odds}`);
// }

// const scorers = {};

// for (const player of game.scored) {
//   scorers[player] ? scorers[player]++ : (scorers[player] = 1);
// }

// // game.scored.forEach(function (element) {
// //   scorers[element] ? scorers[element]++ : (scorers[element] = 1);
// // });
// console.log(scorers);

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, it was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, "⚽️ GOAL"],
  [36, "🔁 Substitution"],
  [47, "⚽️ GOAL"],
  [61, "🔁 Substitution"],
  [64, "🔶 Yellow card"],
  [69, "🔴 Red card"],
  [70, "🔁 Substitution"],
  [72, "🔁 Substitution"],
  [76, "⚽️ GOAL"],
  [80, "⚽️ GOAL"],
  [92, "🔶 Yellow card"],
]);

// const events = [...new Set(gameEvents.values())];
// console.log(events);

// gameEvents.delete(64);
// console.log(gameEvents);

// console.log(90 / gameEvents.size);
// // console.log([...gameEvents.keys()][gameEvents.size - 1]);
// console.log([...gameEvents.keys()].pop());

// for (const [key, value] of gameEvents) {
//   if (key < 45) {
//     console.log(`[FIRST HALF] ${key}: ${value}`);
//   } else console.log(`[SECOND HALF] ${key}: ${value}`);
// }

// Coding Challenge #4

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.

THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅


Afterwards, test with your own test data!

GOOD LUCK 😀
// */ document.body.append(document.createElement("textarea"));
// document.body.append(document.createElement("button"));
// document.querySelector("button").style.width = "10vw";
// document.querySelector("button").style.height = "10vh";
// document.querySelector("button").style.backgroundColor = "red";

// document.querySelector("button").addEventListener("click", fixWords);

// function fixWords(a) {
//   {
//     const text = document.querySelector("textarea").value;
//     const newText = text.toLowerCase().replaceAll("\n", " ").trim();
//     const newArrayText = [];
//     const arrayText = newText.split(" ");
//     for (const wordsTwo of arrayText) {
//       if (wordsTwo != "") {
//         newArrayText.push(wordsTwo);
//       }
//     }
//     for (const [i, words] of newArrayText.entries()) {
//       const correctWord =
//         words.slice(0, words.indexOf("_")) +
//         words
//           .slice(words.indexOf("_") + 1, words.indexOf("_") + 2)
//           .toUpperCase() +
//         words.slice(words.indexOf("_") + 2);
//       console.log(`${correctWord.padEnd(20, " ")} ${"✅" + "✅".repeat(i)}`);
//     }
//   }
// }
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const splitFlights = flights.split("+");
for (const delayed of splitFlights) {
  const delayedFlight = delayed.includes("Delayed")
    ? delayed.replace("Delayed", "🔴 Delayed")
    : delayed;
  const capitalize =
    delayedFlight.slice(0, delayedFlight.indexOf(";")) +
    delayedFlight.slice(delayedFlight.indexOf(";")).toUpperCase();
  const replaceToFrom = capitalize.replace(";", " from ");
  const replaceToTo = replaceToFrom.replace(";", " to ");
  const replaceToSpace = replaceToTo.replaceAll("_", " ");
  const slice =
    replaceToSpace.slice(0, replaceToFrom.indexOf("from") + 8) +
    replaceToSpace.slice(
      replaceToSpace.indexOf("to") - 1,
      replaceToSpace.indexOf("to") + 6
    ) +
    replaceToSpace.slice(replaceToSpace.indexOf(";"));
  const finalString = slice.trim().replace(";", " (");
  const abc = finalString.replace(":", "h");
  console.log(abc.concat(")").padStart(100, " "));
}
