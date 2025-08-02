const cardCode = [
  "127137", // A, Spade
  "127138", // 2, Spade
  "127139", // 3, Spade
  "127140", // 4, Spade
  "127141", // 5, Spade
  "127142", // 6, Spade
  "127143", // 7, Spade
  "127144", // 8, Spade
  "127145", // 9, Spade
  "127146", // 10, Spade
  "127147", // J, Spade
  "127149", // Q, Spade
  "127150", // K, Spade
  "127153", // A, Heart
  "127154", // 2, Heart
  "127155", // 3, Heart
  "127156", // 4, Heart
  "127157", // 5, Heart
  "127158", // 6, Heart
  "127159", // 7, Heart
  "127160", // 8, Heart
  "127161", // 9, Heart
  "127162", // 10, Heart
  "127163", // J, Heart
  "127165", // Q, Heart
  "127166", // K, Heart
  "127169", // A, Diamond
  "127170", // 2, Diamond
  "127171", // 3, Diamond
  "127172", // 4, Diamond
  "127173", // 5, Diamond
  "127174", // 6, Diamond
  "127175", // 7, Diamond
  "127176", // 8, Diamond
  "127177", // 9, Diamond
  "127178", // 10, Diamond
  "127179", // J, Diamond
  "127181", // Q Diamond
  "127182", // K, Diamond
  "127185", // A, Club
  "127186", // 2, Club
  "127187", // 3, Club
  "127188", // 4, Club
  "127189", // 5, Club
  "127190", // 6, Club
  "127191", // 7, Club
  "127192", // 8, Club
  "127193", // 9, Club
  "127194", // 10, Club
  "127195", // J, Club
  "127197", // Q, Club
  "127198", // K, Club
];

let cardsInDeck = 52;
let cardCounter = 0;
// const canOpenProbability = Math.ran;

const pickCard = document.getElementById("cardPick");
const pickedCard = document.getElementById("pickedCard");

pickCard.addEventListener("click", async (e) => {
  e.preventDefault();
  let card = getRandomItem(cardCode);
  pickedCard.style.color = card >= 127153 && card <= 127182 ? "red" : "black";
  pickedCard.innerHTML = `&#${card}`;
});

function getRandomItem(arr) {
  // Generate a random index within the array's bounds
  const randomIndex = Math.floor(Math.random() * arr.length);
  // call canOpen()
  console.log(canOpen());
  if (canOpen() == 1) {
    console.log("CAN OPENED");
  } else {
    // Return the element at the random index
    return arr[randomIndex];
  }
}

function canOpen() {
  // Increase cardCounter by 1;
  cardCounter++;
  return cardCounter / cardsInDeck;
}
