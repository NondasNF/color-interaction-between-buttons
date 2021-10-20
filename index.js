var currentButtonActive;
var allButtons;
var colors;
var currentButtonSizeActiveIndex = 2;
var currentButtonSizeActive;


document.addEventListener('DOMContentLoaded', function () {
    currentButtonActive = document.querySelector("#color__button1");
    allButtons = document.querySelectorAll(".color__buttons");
    colors = ["#0000FF", "#008000", "#D2691E", "#FF0000"];
    currentButtonActive.style.backgroundColor = colors[0];
    currentButtonActive.style.color = "#ffffff";

    currentButtonSizeActive = document.querySelector("#size__button3")
    currentButtonSizeActive.style.color = "#ffffff";
    currentButtonSizeActive.style.backgroundColor = colors[0];

}, false);

function getOthersButtons(buttonClicked, allColorButtons) {
    var newButtonObject = {
        otherButtons:[],
        buttonClickedIndex:null
    };
    allColorButtons.forEach(function (button, indexButton, arrayButtons) {
        if (buttonClicked.id != button.id) {
            newButtonObject.otherButtons.push(button);
        }else{
            newButtonObject.buttonClickedIndex = indexButton;
        }
    })
    return newButtonObject;
}
function changeSizeButtonColor(color){
    let allSizeButtons = document.querySelectorAll(".size__buttons");
    let currentSizeButton = allSizeButtons[currentButtonSizeActiveIndex];
    currentSizeButton.style.backgroundColor = color;
}
function changeColor(buttonClicked) {
    let allColorButtons = document.querySelectorAll(".color__buttons");
    let buttonsObject = getOthersButtons(buttonClicked, allColorButtons);
    buttonsObject.otherButtons.forEach(function(otherButton){
        otherButton.style.backgroundColor = "";
        otherButton.style.color = "#000000";
    });
    buttonClicked.style.backgroundColor = colors[buttonsObject.buttonClickedIndex];
    buttonClicked.style.color = "#ffffff";
    changeSizeButtonColor(colors[buttonsObject.buttonClickedIndex]);
}

function changeSize(buttonClicked){
    let allSizeButtons = document.querySelectorAll(".size__buttons");
    let sizeButtonsObject = getOthersButtons(buttonClicked, allSizeButtons);

    let currentColor = allSizeButtons[currentButtonSizeActiveIndex];
    let currentBackgroundColor = allSizeButtons[currentButtonSizeActiveIndex];

    buttonClicked.style.color = currentColor.style.color;
    buttonClicked.style.backgroundColor = currentBackgroundColor.style.backgroundColor;
    buttonClicked.style.color = "#ffffff";

    sizeButtonsObject.otherButtons.forEach(function(otherButton){
        otherButton.style.backgroundColor = "";
        otherButton.style.color = "#000000";
    });
    currentButtonSizeActiveIndex = sizeButtonsObject.buttonClickedIndex;
}
