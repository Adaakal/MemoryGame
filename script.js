const gameContainer = document.getElementById("game");
let compareCardCount = 0;
let matchedPairsCount = 0;
let currentFlippedCardsArr = [];
let matchedCardsArr = [];

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!

function isMatch(cardOne, cardTwo) {
  if (cardOne == cardTwo) {
    matchedCardsArr.push(cardOne);
    matchedCardsArr.push(cardTwo);
    console.log(matchedCardsArr);
    return true;
  } else {
    return false;
  }
}
function isGameOver() {
  if (matchedPairsCount = COLORS.length / 2) {
    return true;
  } else {
    return false;
  }
}
let firstFlippedCard = "";
let secondFlippedCard = "";
function handleCardClick(event) {
  event.preventDefault();
  let clickedCard = event.target;
  compareCardCount++;
  if (!(compareCardCount > 2)) {
    if (compareCardCount === 1) {
      firstFlippedCard = clickedCard;

      
      firstFlippedCard.style.backgroundColor = clickedCard.className;
      firstFlippedCard.classList.add('isFlipped');

      
    } else {
      secondFlippedCard = clickedCard;
      secondFlippedCard.style.backgroundColor = clickedCard.className;
      secondFlippedCard.classList.add('isFlipped');
      compareCardCount = 0;
      

      if (firstFlippedCard.className == secondFlippedCard.className) {
        matchedPairsCount++;
        const matchedCards = document.querySelectorAll(".isFlipped");
        console.log(matchedCards);
        for (let card of matchedCards) {
          card.classList.add('isMatched');
          card.classList.remove('isFlipped');
        } 
        console.log(matchedPairsCount);
        matchedCardsArr.push(firstFlippedCard);
        matchedCardsArr.push(secondFlippedCard);
        console.log(matchedCardsArr);
      } else {
        
        setTimeout(function(){
          const unMatchedCards = document.querySelectorAll(".isFlipped");
          console.log(unMatchedCards);
          for(let card of unMatchedCards) {
            card.style.backgroundColor = "white";
            card.classList.remove('isFlipped');
          }
          
          //secondFlippedCard.classList.remove('isFlipped');
        }, 2000);
        
        

      }


    }
  } else {
    alert("You've already clicked two cards!");
  }
  //getAttribute: isFlipped.....
  

}
// when the DOM loads
createDivsForColors(shuffledColors);

// function handleCardClick(event) {
//   event.preventDefault();
//   let clickedCard = event.target;
//   let flipped = {};
//   ++compareCardCount;
//   currentFlippedCardsArr.push(flipped);

//   //getAttribute: isFlipped.....
//   if (!(compareCardCount > 2 || flipped.isFlipped)) {

//     if (currentFlippedCardsArr.length === 1 || currentFlippedCardsArr.length === 2) {
//       flipped.clickedCardColor = event.target.className;
//       flipped.isFlipped = true;

//       clickedCard.style.backgroundColor = flipped.clickedCardColor;
//       console.log('compareCardCount: ' + compareCardCount);
//       //console.log("you just clicked", event.target);
//       console.log(currentFlippedCardsArr);
//       console.log(flipped);
//     } 
//     if (currentFlippedCardsArr.length === 2 && currentFlippedCardsArr[0].clickedCardColor != currentFlippedCardsArr[1].clickedCardColor) {
//       setTimeout(() => {
//         console.log("clear the area and change card back");
//         //for each element in the currentFlippedCardsArr, remove them
//         // flipped.clickedCardColor = " ";
//         // flipped.isFlipped = false;
//         // currentFlippedCardsArr = [];
//       }, 2000)
//     } 
//     else {
//       console.log("we may have a match");
//     }

//   } 
//   else {
//     console.log("You have already flipped 2 cards! or Card is already flipped.");

//   }


// }

// // when the DOM loads
// createDivsForColors(shuffledColors);

/*click a card and reveal its color if the target class === a certain color in the color array make the card that color -- click another card to do the same-- if the cards don't match, turn both cards back to their initial state -- if the cards do match, keep them turned*/
/**a counter variable for how many cards are flipped -- a pair variable to keep track of mathcing pairs -- setting a timer for how long the cards are flipped -- think about session storage**/