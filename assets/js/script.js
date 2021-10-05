// Wait for the DOM to finish loading before running the code
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function() {

    //Add event listener to game buttons
    let buttons = document.getElementsByClassName("game-btn");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            let userChoice = this.getAttribute("data-type");
            let userIcon = document.getElementById("user-icon");

            displayWeapon(userChoice, userIcon);
        })
    }

    //Add event listener to buttons opening the popups
    let openPopupButtons = document.getElementsByClassName("open-popup-btn");

    for (let button of openPopupButtons) {
        button.addEventListener("click", function() {
            let buttonSelected = this.getAttribute("id");
            
            openPopup(buttonSelected);
        })
    }

    //Add event listener to close buttons on the popups
    let closePopupButtons = document.getElementsByClassName("close-popup-btn");

    for (let button of closePopupButtons) {
        button.addEventListener("click", function() {
            let buttonSelected = this.getAttribute("id");
            
            closePopup(buttonSelected);
        })
    }

    //Add event listener to the start game button
    document.getElementById("start-game-btn").addEventListener("click", function() {
        window.location.href="#game-section";
    })
})

//Game functions

/**
 * Displays the icon being chosen by the user and the computer 
 */
 function displayWeapon(weapon, icon) {
    if (weapon === "rock") {
        icon.setAttribute("class", "fas fa-hand-rock");
        icon.style.color = "#bf834a";
    } else if (weapon === "paper") {
        icon.setAttribute("class", "far fa-hand-paper");
        icon.style.color = "#151311";
    } else if (weapon === "scissors") {
        icon.setAttribute("class", "fas fa-hand-scissors");
        icon.style.color = "#151311";
    } else if (weapon === "lizard") {
        icon.setAttribute("class", "fas fa-hand-lizard");
        icon.style.color = "#789053";
    } else if (weapon === "spock") {
        icon.setAttribute("class", "fas fa-hand-spock");
        icon.style.color = "#344b99";
    } else {
        alert(`Unknown weapon type: ${weapon}`);
        throw `Unknown weapon type: ${weapon}. Aborting!`
    }
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

//Popups functions

/**
 * Open the pop up when pressing the respective button
 */
function openPopup(button) {
    if (button === "open-feedback-btn") {
        document.getElementById("feedback-form").style.display = "block";
    } else if (button === "open-rules-btn") {
        document.getElementById("rules").style.display = "block";
    } else {
        alert(`Unknown button: ${button}`);
        throw `Unknown butoon: ${button}. Aborting!`
    }
}

/**
 * Close the pop up if close button is pressed
 */
function closePopup(button) {
    if (button === "close-feedback-btn") {
        document.getElementById("feedback-form").style.display = "none";
    } else if (button === "close-rules-btn") {
        document.getElementById("rules").style.display = "none";
    } else {
        alert(`Unknown button: ${button}`);
        throw `Unknown button: ${button}. Aborting!`
    }
}



