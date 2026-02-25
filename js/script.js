/*
const variables
*/
const NUMBERS = [
    "./img/number/one.png",
    "./img/number/two.png",
    "./img/number/three.png",
    "./img/number/four.png",
    "./img/number/five.png",
    "./img/number/six.png",
    "./img/number/seven.png",
    "./img/number/eight.png",
    "./img/number/nine.png",
]


const ITEMS = [
    "./img/item/blue shell.png",
    "./img/item/bullet bill.png",
    "./img/item/gold mushroom.png",
    "./img/item/lightning.png",
    "./img/item/mushroom.png",
    "./img/item/tripple mushroom.png",
]

const ITEM_EFFECT = [
    "First place -3",
    "Go to first place",
    "Go ahead +5",
    "Everyone else minus -1",
    "Go ahead +1",
    "go ahead +3"
];

/*

variables

*/


var teamNumb;

var selectChar = [];

const DIM = (window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight) * 0.08;


function getTeamNumb() {
    const teamNumb2 = document.querySelector("#teamNumb2");
    const teamNumb3 = document.querySelector("#teamNumb3");
    const teamNumb4 = document.querySelector("#teamNumb4");
    const teamNumb5 = document.querySelector("#teamNumb5");

    if (teamNumb2.checked) {
        return 2;
    }

    if (teamNumb3.checked) {
        return 3;
    }

    if (teamNumb4.checked) {
        return 4;
    }

    if (teamNumb5.checked) {
        return 5;
    }

    return -1;
}


function selectTeamNumb() {
    console.log();

    let numb = getTeamNumb();

    if (numb == -1) {
        alert('please select how many teams will play');
        return;
    }

    teamNumb = numb;

    const teamSelectDiv = document.querySelector("#teamSelectDiv");
    const charSelectDiv = document.querySelector("#charSelectDiv");

    teamSelectDiv.classList.add("hide");
    charSelectDiv.classList.remove("hide");
}


const CHAR_LIST = [
    "boo",
    "bowser",
    "coupa",
    "curby",
    "donkey-kong",
    "goomba",
    "inkling",
    "link",
    "luigi",
    "mario",
    "peach",
    "rosalina",
    "toad",
    "walauigi",
    "wario",
    "yoshi",
]

function getCheckedChar() {
    for (let i = 0; i < CHAR_LIST.length; i++) {
        let char = CHAR_LIST[i];
        let handle = document.querySelector(`#${char}`);
        if (handle.checked == true) {
            return {
                char,
                handle
            }
        }
    }
    return -1;
}

function pickChar() {
    // get checked box
    let select = getCheckedChar();
    //console.log(select);

    if (select == -1) {
        return alert('please select a character');
    }

    // add to list
    selectChar.push(select.char);

    // make not clickable
    select.handle.checked = false;
    select.handle.disabled = true;
    select.handle.classList.add('picked');


    // return if not enough characters selected

    if (selectChar.length < teamNumb) {
        return;
    }

    const charSelectDiv = document.querySelector("#charSelectDiv");
    const gameDiv = document.querySelector("#gameDiv");


    const gameBx = document.querySelector(".board");
    charSelectDiv.classList.add("hide");
    gameDiv.classList.remove("hide");

    let mouse = {
        x: 0, y: 0
    };

    let drag = null;

    const canvas = document.querySelector("#canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = gameBx.clientWidth;
    canvas.height = gameBx.clientHeight;

    let dragChar = [];

    selectChar.forEach((char, index) => {
        let img = document.createElement('img');
        img.src = `./img/character/${char}.png`;
        dragChar.push({
            x: DIM * index,
            y: 50,
            img
        });
    });

    const drawChar = () => {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        dragChar.forEach((char) => {
            ctx.drawImage(char.img, char.x, char.y, DIM, DIM);
        });
    }

    drawChar();

    canvas.addEventListener("touchmove", (event) => {

        if (drag == null) {
            return;
        }

        drag.x = event.targetTouches[0].clientX - DIM / 2;
        drag.y = event.targetTouches[0].clientY - DIM / 2;


        drawChar();

    });

    canvas.addEventListener("touchstart", (event) => {
        let x = event.targetTouches[0].clientX;
        let y = event.targetTouches[0].clientY;

        const getClicked = (x, y) => {
            const inside = (box, x, y) => {
                if (x < box.x || x > box.x + DIM) {
                    return false;
                }
                if (y < box.y || y > box.y + DIM) {
                    return false;
                }
                return true;
            }
            for (let i = 0; i < dragChar.length; i++) {
                let box = dragChar[i];
                if (inside(box, x, y)) {
                    return box;
                }
            }
            return -1;
        }

        let result = getClicked(x, y);

        if (result == null) {
            return;
        }

        drag = result;
    });

    canvas.addEventListener("touchend", (event) => {
        console.log('up');
        drag == null;
    });


    /* 
    board game controls
    */

    const boardControlBox = document.querySelector("#boardControlBox");

    const questBtn = document.querySelector("#questionBtn");
    const itemBtn = document.querySelector("#itemBtn");
    const diceBtn = document.querySelector("#diceBtn");

    const questBox = document.querySelector("#question-box");
    const itemBox = document.querySelector("#item-box");
    const diceBox = document.querySelector("#dice-box");

    const closeBtn = document.querySelector("#closeBtn");

    questBtn.addEventListener("click", ()=>{
        boardControlBox.classList.remove('hide');
        questBox.classList.remove('hide');
    });

    itemBtn.addEventListener("click", ()=>{
        boardControlBox.classList.remove('hide');
        itemBox.classList.remove('hide');
    });

    diceBtn.addEventListener("click", ()=>{
        boardControlBox.classList.remove('hide');
        diceBox.classList.remove('hide');
    });

    closeBtn.addEventListener("click", ()=>{
        boardControlBox.classList.add('hide');
        diceBox.classList.add('hide');
         itemBox.classList.add('hide');
         questBox.classList.add('hide');
    });

}


function rollDice(){

    let diceImg = document.querySelector("#diceImg");
    let rand = Math.floor(Math.random() * NUMBERS.length);

    diceImg.src = NUMBERS[rand];   
}

function getItem(){
    let diceImg = document.querySelector("#itemImg");
    let rand = Math.floor(Math.random() * ITEMS.length);

    diceImg.src = ITEMS[rand];   
}