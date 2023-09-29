'use strict';


//document.querySelector the method querySelector() return the first element
//within the document that matches the specified seletor or group of seletors.
//If no matches are group of selectors .If no matches are found null is returned

// console.log(document.querySelector('.message').textContent);
// //dom Manipulation
// document.querySelector(".message").textContent = 'Correct Number'
// console.log(document.querySelector('.message').textContent);
// document.querySelector(".number").textContent = 13
// document.querySelector(".score").textContent = 40

// document.querySelector(".guess").value = 21
// console.log(document.querySelector(".guess").value)

// let secretNumber = Math.trunc(Math.random()*20) + 1
// let score = 20
// let highScore = 0

// const displayMessage = function(message) {
//     document.querySelector(".message").textContent = message
// }



// document.querySelector(".check").addEventListener("click" , function() {
//     // const guess = (document.querySelector('.guess').value)
//     // console.log(guess ,typeof guess)

//     //when there is no input
//     if(!guess) {
//         displayMessage("No Number is Selected")
//         // document.querySelector(".message").textContent = ""
//     }
    
//     //when guess is correct
//     else if(guess == secretNumber) {
//         document.querySelector(".number").textContent = secretNumber
//         displayMessage("🎉 Currect Number ")
//         // document.querySelector(".message").textContent = 
//         document.querySelector('body').style.backgroundColor= "#60b347";
//         document.querySelector(".number").style.width = " 30rem"

//         if(score > highScore){
//             highScore = score
//             document.querySelector(".highscore").textContent = highScore
//         }
//     } 
    
//     else if(guess != secretNumber) {
//         if( score > 1) {
//             // document.querySelector(".message").textContent = guess > secretNumber ? "To high! 📈" : "To Low! 📉 "
//             displayMessage(guess > secretNumber ? "To high! 📈" : "To Low! 📉 ")
//             score--
//             document.querySelector(".score").textContent = score;
//         } else {
//             displayMessage("YOU Lost the game")
//             // document.querySelector(".message").textContent = ""
//             document.querySelector(".score").textContent = 0;

//         }
//     }

    
//     //when guess is too high!
//     // else if(guess > secretNumber) {
//     // } 
//     // //when guess is to low!
//     // else if (guess < secretNumber) {
//     //     if( score > 1) {
//     //         document.querySelector(".message").textContent = 
//     //         score--
//     //         document.querySelector(".score").textContent = score;
//     //     } else {
//     //         document.querySelector(".message").textContent = "YOU Lost the game"
//     //         document.querySelector(".score").textContent = 0;
//     //     }
//     // }
// })


// document.querySelector(".again").addEventListener("click" , function() {
//     score = 20
//     secretNumber = Math.trunc(Math.random()*20) + 1
//     displayMessage("Start guessing...")
//     // document.querySelector(".message").textContent = 
//     document.querySelector(".score").textContent = score
//     document.querySelector(".number").textContent = "?"
//     document.querySelector(".guess").value = ''
//     document.querySelector("body").style.backgroundColor= "#222"
//     document.querySelector(".number").style.width = "15rem"
// })


// *** Practice Mode ** 

let secreatNumber = Math.trunc(Math.random() * 20) + 1
let score = 20
let  highScore = 0
const displayMessage = function(message) {
    document.querySelector(".message").textContent =  message
}
document.querySelector(".number").textContent = "?"

document.querySelector(".check").addEventListener("click" , function() {
    const guess = (document.querySelector(".guess").value)
    
    if (guess == "") {
        displayMessage("Enter Number")
    } else if(secreatNumber == guess){
            displayMessage("🎉 Currect Guess!")
            document.querySelector("body").style.backgroundColor = "#60b347"
            document.querySelector(".number").style.width = "30rem"
            
            if (score > highScore) {
            highScore = score
            document.querySelector(".highscore").textContent = highScore

            }
        } else if( secreatNumber != guess) {
            if (score > 1) {
                score --
                displayMessage(secreatNumber < guess ? "TOO high! .📈" : "TOO Low! .📉")
                document.querySelector(".score").textContent = score
                     
            } else {
                displayMessage("You Lost Game!")
                document.querySelector(".score").textContent = 0
            }
           
        }
       
})


// Again Btn

document.querySelector(".again").addEventListener("click" , function(){
    secreatNumber = Math.trunc(Math.random() * 6) + 1
    score = 20
    // guess = 0
    // displayMessage("")
    document.querySelector(".number").textContent = "?"
    document.querySelector(".score").textContent = score
    // console.log(secreatNumber)
    displayMessage("Start guessing...")
    document.querySelector(".guess").value = ''
    document.querySelector("body").style.backgroundColor = "#222"
    document.querySelector(".number").style.width = "15rem"
})
















































































// let secretNumber = Math.trunc(Math.random()*20) + 1
// let score = 20
// let highScore = 0

// const displayMessage = function(message) {
//     document.querySelector(".message").textContent = message
// }



// document.querySelector(".check").addEventListener("click" , function() {
//     // const guess = (document.querySelector('.guess').value)
//     // console.log(guess ,typeof guess)

//     //when there is no input
//     if(!guess) {
//         displayMessage("No Number is Selected")
//         // document.querySelector(".message").textContent = ""
//     }
    
//     //when guess is correct
//     else if(guess == secretNumber) {
//         document.querySelector(".number").textContent = secretNumber
//         displayMessage("🎉 Currect Number ")
//         // document.querySelector(".message").textContent = 
//         document.querySelector('body').style.backgroundColor= "#60b347";
//         document.querySelector(".number").style.width = " 30rem"

//         if(score > highScore){
//             highScore = score
//             document.querySelector(".highscore").textContent = highScore
//         }
//     } 
    
//     else if(guess != secretNumber) {
//         if( score > 1) {
//             // document.querySelector(".message").textContent = guess > secretNumber ? "To high! 📈" : "To Low! 📉 "
//             displayMessage(guess > secretNumber ? "To high! 📈" : "To Low! 📉 ")
//             score--
//             document.querySelector(".score").textContent = score;
//         } else {
//             displayMessage("YOU Lost the game")
//             // document.querySelector(".message").textContent = ""
//             document.querySelector(".score").textContent = 0;

//         }
//     }

    
//     //when guess is too high!
//     // else if(guess > secretNumber) {
//     // } 
//     // //when guess is to low!
//     // else if (guess < secretNumber) {
//     //     if( score > 1) {
//     //         document.querySelector(".message").textContent = 
//     //         score--
//     //         document.querySelector(".score").textContent = score;
//     //     } else {
//     //         document.querySelector(".message").textContent = "YOU Lost the game"
//     //         document.querySelector(".score").textContent = 0;
//     //     }
//     // }
// })


// document.querySelector(".again").addEventListener("click" , function() {
//     score = 20
//     secretNumber = Math.trunc(Math.random()*20) + 1
//     displayMessage("Start guessing...")
//     // document.querySelector(".message").textContent = 
//     document.querySelector(".score").textContent = score
//     document.querySelector(".number").textContent = "?"
//     document.querySelector(".guess").value = ''
//     document.querySelector("body").style.backgroundColor= "#222"
//     document.querySelector(".number").style.width = "15rem"
// })