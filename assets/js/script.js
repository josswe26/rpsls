// Wait for the DOM to finish loading before running the code
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {

    //Add event listener to game buttons
    let buttons = document.getElementsByClassName("game-btn");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let userChoice = this.getAttribute("data-type");
            let userIcon = document.getElementById("user-icon");

            console.log(userChoice, userIcon);
        })
    }

    //Add event listener to buttons opening the popups
    let openPopupButtons = document.getElementsByClassName("open-popup-btn");

    for (let button of openPopupButtons) {
        button.addEventListener("click", function() {
            let buttonSelected = this.getAttribute("id");
            
            console.log(buttonSelected);
        })
    }

    //Add event listener to close buttons on the popups
    let closePopupButtons = document.getElementsByClassName("close-popup-btn");

    for (let button of closePopupButtons) {
        button.addEventListener("click", function() {
            let buttonSelected = this.getAttribute("id");
            
            console.log(buttonSelected);
        })
    }

    //Add event listener to the start game button
    document.getElementById("start-game-btn").addEventListener("click", function() {
        
        console.log("Start button pressed")
    })
})

//Game code

function displayWeapon() {

}

function computerWeapon() {

}

function compareWeapons() {

}

function increaseUserScore() {

}

function increaseComputerScore() {

}

function countRounds() {

}

//Popups code

function openPopup() {
    
}

function closePopup() {

}



