/*
const varables
*/
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

// items
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
    "Go ahead +3"
];

// questions
const QUEST = [
    "What kind of music do you like?",
    "Where would you like to travel?",
    "What kind of music do you like?",
    "What book do you like?",
    "What sport do you like?",
    "Do you like dancing or singing?",
    "My name is ___ and I like ____.",
    "What sport or activity do you like and why?",
    "What would you rather have, a boat or a plane?",
    "What season do you like best? winter, spring, fall, or summer? Why?",
    "What super power would you like to have?",
    "Name a movie you like.",
    "Name a TV show you like.",
    "If you were going to the moon what would you take?",
    "What foods do you like?",
    "What place would you visit? Why?",
    "What food do you like best and why?",
    "What school subject do you like best?",
    "What holiday do you like best and why?",
    "What holiday do you enjoy most?",
    "What do you like to do in warm weather?",
    "What do you like to do in cold weather?",
    "What do you want to be when you are older?",
    "Do you have a pet?",
    "What makes you happy?",
    "What makes you sad?",
    "Who is the athlete you like best?",
    "What kind of ice cream do you like?",
    "What subject do you like?",
    "What game do you like to play?",
    "Name something you want to buy?",
    "What is your favotite English word?",
    "What is your favorite day of the week?",
    "What dessert do you like?",
    "What vegetable do you like?",
    "What time do you go to sleep?",
    "What time do you wake up?",
    "What is your favorite animal?",
    "What is your favorite holliday?",
    "What's your name? Why did you chose it?",
    "What is your favorite fruit?"
]


// numbers
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



const DIM = Math.floor((window.innerWidth > window.innerHeight ? window.innerHeight : window.innerWidth) * 0.08);
console.log(DIM);

/*
functions
*/
const createPlayerInput = () => {
    const charBox = document.querySelector(".char-box");

    CHAR_LIST.forEach((char) => {
        let input = document.createElement('input');
        input.type = 'checkbox';
        input.id = char;
        input.className = "char-check";
        let label = document.createElement('label');
        label.className = "char-check-label";
        label.htmlFor = char;
        let img = document.createElement('img');
        img.src = `./img/character/${char}.png`;

        // add elements
        label.appendChild(img);
        charBox.appendChild(input);
        charBox.appendChild(label);
    });
}

const checkChecked = () => {
    let charList = [];

    CHAR_LIST.forEach((char, i) => {
        let check = document.querySelector(`#${char}`);
        let img = document.createElement('img');
        img.src = src = `./img/character/${char}.png`;
        if (check.checked) {
            console.log(`${char} checked`);
            charList.push({
                img, x: 20 * i, y: 50
            });
        }
    });

    return charList;
}


// set background img
const setBackground = (src) => {
    let backImg = document.querySelector("#backImg");
    backImg.src = `./img/board/${src}.png`;
    //"./img/board/board.jpg"
}


window.onload = function () {

    /*

    buttons

    */

    // character select options
    const charBtn = this.document.querySelector("#charBtn");
    const charEnterBtn = this.document.querySelector("#charEnterBtn");

    // board select screen
    const boardBtn = this.document.querySelector("#boardBtn");
    const boardSelect = this.document.querySelector("#boardSelect");
    const closeBoard = this.document.querySelector("#closeBoard");

    // question screen stuff
    const questBtn = this.document.querySelector("#questBtn");
    const questSelect = this.document.querySelector("#questSelect");
    const questText = this.document.querySelector("#questText");
    const closeQuest = this.document.querySelector("#closeQuest");

    // item box
    const itemBtn = this.document.querySelector("#itemBtn");
    const itemSelect = this.document.querySelector("#itemSelect");
    const itemImg = this.document.querySelector("#itemImg");
    const closeItem = this.document.querySelector("#closeItem");
    const itemText = this.document.querySelector("#itemText");

    // dice box
    const diceBtn = this.document.querySelector("#diceBtn");
    const diceSelect = this.document.querySelector("#diceSelect");
    const closeDice = this.document.querySelector("#closeDice");
    const diceImg = this.document.querySelector("#diceImg");


    /*
     
    board

    */

    const canvas = this.document.querySelector("#canvas");
    const ctx = canvas.getContext('2d');

    const boardRoot = this.document.querySelector(".board-root");

    canvas.width = boardRoot.clientWidth;
    canvas.height = boardRoot.clientHeight;


    /*

    screens

    */

    const charSelect = this.document.querySelector("#charSelect");

    const DIM = (window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight) * 0.1;

    /*
    variables
    */
    let charList = [];
    let drag = null;

    /*

    functions
    */

    const drawChar = () => {
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        charList.forEach((char) => {
            ctx.drawImage(char.img, char.x, char.y, DIM, DIM);
        });
    }

    /*

    event listener

    */

    window.addEventListener('resize', ()=>{
        canvas.width = boardRoot.clientWidth;
        canvas.height = boardRoot.clientHeight;
        drawChar();
    });

    charBtn.addEventListener("click", () => {
        charSelect.classList.remove('hide');
    });

    charEnterBtn.addEventListener("click", () => {
        charList = checkChecked();
        console.log(charList);
        charSelect.classList.add('hide');
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
            for (let i = 0; i < charList.length; i++) {
                let box = charList[i];
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

        const index = charList.indexOf(drag);
        if (index >= 0) {
            charList.splice(index, 1);
            charList.push(drag);
            drawChar();
        }
    });
    canvas.addEventListener("touchmove", (event) => {
        if (drag == null) {
            return;
        }

        drag.x = event.targetTouches[0].clientX - DIM / 2;
        drag.y = event.targetTouches[0].clientY - DIM / 2;


        drawChar();
    });
    canvas.addEventListener("touchend", (event) => {
        drag == null;
    });

    // board select
    boardBtn.addEventListener("click", () => {
        boardSelect.classList.remove('hide');
    });

    closeBoard.addEventListener("click", () => {
        boardSelect.classList.add('hide');
    });

    // question screen
    questBtn.addEventListener("click", () => {
        questSelect.classList.remove('hide');
        questText.innerHTML = QUEST[Math.floor(Math.random() * QUEST.length)];
    });

    closeQuest.addEventListener("click", () => {
        questSelect.classList.add('hide');
    });

    // item
    itemBtn.addEventListener("click", () => {
        itemSelect.classList.remove('hide');
        let index = Math.floor(Math.random() * ITEMS.length);
        itemImg.src = ITEMS[index];
        itemText.innerHTML = ITEM_EFFECT[index];
    });

    closeItem.addEventListener("click", () => {
        itemSelect.classList.add('hide');
    });

    // quest
    diceBtn.addEventListener("click", () => {
        diceSelect.classList.remove('hide');
    });

    // dice img change when clicked
    diceImg.addEventListener('click', ()=>{
        diceImg.src = NUMBERS[Math.floor(Math.random() * 5)];
    });

    closeDice.addEventListener("click", () => {
        diceSelect.classList.add('hide');
        diceImg.src="./img/dice.png"
    });


    createPlayerInput();

}