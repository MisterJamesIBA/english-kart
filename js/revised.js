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
    "./img/item/green shell.png",
]

const ITEM_EFFECT = [
    "First place -3",
    "Go to first place",
    "Go ahead +5",
    "Everyone else minus -1",
    "Go ahead +1",
    "Go ahead +3",
    "Go back -1"
];

// questions
const QUEST = {
    "EIEKEN3":[
        "How many hours do you usually study every day?",
        "How many people do you have in your family?",
        "What are you going to do after this (interview)?",
        "What are you planning to do this spring(winter, summer)?",
        "What city would you like to visit in the future?",
        "What country do you want to go to?",
        "What did you do last night?",
        "What did you do yesterday?",
        "What did you eat this morning?",
        "What do you enjoy on your holidays?",
        "What do you like to do on your vacation?",
        "What do you like to do when the weather is hot?",
        "What do you often talk about with your family?",
        "What do you usually do on Sunday?",
        "What do you want to do next year?",
        "What fruit do you love to eat?",
        "What kind of animals do you like?",
        "What kind of dreams do you have?",
        "What kind of movies do you love to watch?",
        "What kind of restaurants do you want to go to?",
        "What kind of sports do you like to play?",
        "What month of the year do you like the best?",
        "What place would you like to visit in Japan?",
        "What season do you like the best?",
        "What time do you usually get up every morning?",
        "What time will you go to bed tonight?",
        "What time do you usually eat dinner?",
        "Where do you often go in your free time?",
        "Where do you often go on Sundays?",
        "Where do you like to go with your family?",
        "Where do you like to visit in Japan?",
        "Where would you like to go on weekends?",
        "Which do you like better, summer or winter?",
        "Which do you like better, TV or the Internet?"
    ],
    "EIKENPRE2":[
        "How do you usually go to the convenience store near your house?",
        "How many hours do you study every day?",
        "How many people do you have in your family?",
        "How many times have you been on a plane?",
        "What are you going to do after this test?",
        "What are you planning to do this spring (winter, summer)?",
        "What city would you like to visit in the future?",
        "What country do you want to go to?",
        "What did you do during your summer vacation?",
        "What did you do last night?",
        "What did you do yesterday?",
        "What did you eat this morning?",
        "What do you do to help your family?",
        "What do you enjoy on your holidays?",
        "What do you like to do on your vacation?",
        "What time do you usually eat dinner?",
        "Where are you going to go after this interview?",
        "Where do you often go in your free time?",
        "Where do you often go on Sundays?",
        "Where do you like to go with your family?",
        "Where do you want to visit in the future?",
        "Where would you like to go on weekends?",
        "Which do you like better, summer or winter?",
        "Which do you like better, TV or the Internet?",
        "Which do you like to go to, the mountains or the beaches?",
        "Are you a student from any school?",
        "Are you good at playing music?",
        "Do you enjoy going shopping?",
        "Do you enjoy reading books?",
        "Do you enjoy studying English?",
        "Do you have a mobile phone (smartphone)?",
        "Do you have pets in your home?",
        "Do you like studying in your free time?",
        "Do you like to eat at home?",
        "Do you like to swim?",
        "Do you like to watch TV?"
    ]

};


// selecection questions

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

const loadJson = async () => {
    try {
        const response = await fetch('../json/interview.json', { cache: 'no-cache' }); // Prevent caching during dev
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);

    } catch (error) {
        console.error(error);
    }
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
    const levelSelect = this.document.querySelector("#levelSelect");

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

    const selectQuest = () => {
        let select;
        switch(levelSelect.value){
            case "3":
                select = QUEST.EIEKEN3;
                break;
            case "p2":
                select = QUEST.EIKENPRE2;
                break;
            default:
                select = QUEST.EIEKEN3;
                break;
        }
        copyQuest = JSON.parse(JSON.stringify(select));
        genQuestion();
    }

    selectQuest();

    /*

    event listener

    */

    window.addEventListener('resize', () => {
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



    levelSelect.addEventListener("change", ()=>{
        selectQuest();
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
        genQuestion();
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
    diceImg.addEventListener('click', () => {
        diceImg.src = NUMBERS[Math.floor(Math.random() * 5)];
    });

    closeDice.addEventListener("click", () => {
        diceSelect.classList.add('hide');
        diceImg.src = "./img/dice.png"
    });


    createPlayerInput();


    function genQuestion() {
        let randQuest = copyQuest.splice(Math.floor(Math.random() * copyQuest.length), 1);
        questText.innerHTML = randQuest;
        if (copyQuest.length == 0) {
            selectQuest();
        }
    }
}