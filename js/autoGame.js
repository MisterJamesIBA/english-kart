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


let postList = [
    {
        "x": 0.06330275229357799,
        "y": 0.8694968553459119
    },
    {
        "x": 0.1596330275229358,
        "y": 0.889937106918239
    },
    {
        "x": 0.25963302752293577,
        "y": 0.8915094339622641
    },
    {
        "x": 0.3486238532110092,
        "y": 0.8883647798742138
    },
    {
        "x": 0.43302752293577984,
        "y": 0.8915094339622641
    },
    {
        "x": 0.5311926605504587,
        "y": 0.8867924528301887
    },
    {
        "x": 0.6165137614678899,
        "y": 0.8867924528301887
    },
    {
        "x": 0.7009174311926606,
        "y": 0.8773584905660378
    },
    {
        "x": 0.7963302752293578,
        "y": 0.8522012578616353
    },
    {
        "x": 0.8743119266055046,
        "y": 0.7861635220125787
    },
    {
        "x": 0.9128440366972477,
        "y": 0.6871069182389937
    },
    {
        "x": 0.8486238532110092,
        "y": 0.5911949685534591
    },
    {
        "x": 0.7642201834862385,
        "y": 0.5691823899371069
    },
    {
        "x": 0.6568807339449542,
        "y": 0.5691823899371069
    },
    {
        "x": 0.5577981651376147,
        "y": 0.6147798742138365
    },
    {
        "x": 0.47706422018348627,
        "y": 0.6556603773584906
    },
    {
        "x": 0.3871559633027523,
        "y": 0.699685534591195
    },
    {
        "x": 0.29174311926605506,
        "y": 0.7311320754716981
    },
    {
        "x": 0.1944954128440367,
        "y": 0.7389937106918238
    },
    {
        "x": 0.11009174311926606,
        "y": 0.7169811320754716
    },
    {
        "x": 0.062385321100917435,
        "y": 0.6053459119496856
    },
    {
        "x": 0.11467889908256881,
        "y": 0.49056603773584906
    },
    {
        "x": 0.20550458715596331,
        "y": 0.4449685534591195
    },
    {
        "x": 0.29908256880733947,
        "y": 0.4591194968553459
    },
    {
        "x": 0.38623853211009174,
        "y": 0.4811320754716981
    },
    {
        "x": 0.4743119266055046,
        "y": 0.4968553459119497
    },
    {
        "x": 0.5715596330275229,
        "y": 0.47327044025157233
    },
    {
        "x": 0.6045871559633027,
        "y": 0.3584905660377358
    },
    {
        "x": 0.5321100917431193,
        "y": 0.2861635220125786
    },
    {
        "x": 0.43394495412844036,
        "y": 0.2783018867924528
    },
    {
        "x": 0.3412844036697248,
        "y": 0.2830188679245283
    },
    {
        "x": 0.26238532110091745,
        "y": 0.29874213836477986
    },
    {
        "x": 0.17889908256880735,
        "y": 0.3081761006289308
    },
    {
        "x": 0.08440366972477065,
        "y": 0.2751572327044025
    },
    {
        "x": 0.0853211009174312,
        "y": 0.1509433962264151
    },
    {
        "x": 0.1706422018348624,
        "y": 0.08176100628930817
    },
    {
        "x": 0.25045871559633026,
        "y": 0.06918238993710692
    },
    {
        "x": 0.3330275229357798,
        "y": 0.05817610062893082
    },
    {
        "x": 0.42110091743119266,
        "y": 0.055031446540880505
    },
    {
        "x": 0.5128440366972477,
        "y": 0.04716981132075472
    },
    {
        "x": 0.6027522935779817,
        "y": 0.06132075471698113
    },
    {
        "x": 0.6889908256880733,
        "y": 0.059748427672955975
    },
    {
        "x": 0.789908256880734,
        "y": 0.09276729559748427
    },
    {
        "x": 0.8761467889908257,
        "y": 0.1619496855345912
    },
    {
        "x": 0.9146788990825688,
        "y": 0.27044025157232704
    },
    {
        "x": 0.9027522935779817,
        "y": 0.3836477987421384
    },
    {
        "x": 0.818348623853211,
        "y": 0.41509433962264153
    },
    {
        "x": 0.7412844036697248,
        "y": 0.33962264150943394
    },
    {
        "x": 0.6880733944954128,
        "y": 0.22169811320754718
    }
];


// base hide screen
const hideBase = document.querySelector('#hideBase');

// many hide screens
const start = document.querySelector('#start');
const pickNumber = document.querySelector('#pickNumber');
const pickChar = document.querySelector('#pickChar');
const dice = document.querySelector('#dice');
const item = document.querySelector('#item');
const question = document.querySelector('#question');


/*
functions
*/

function getTeamNumb() {
    const teamList = ["#teamNumb2", "#teamNumb3", "#teamNumb4", "#teamNumb5"];
    for (let i = 0; i < teamList.length; i++) {
        let numb = teamList[i];
        let radio = document.querySelector(numb);

        if (radio.checked) {
            return i + 2;
        }
    }
    return -1
}

const getChar = () => {
    for (let i = 0; i < CHAR_LIST.length; i++) {
        let char = CHAR_LIST[i];
        let check = document.querySelector(`#${char}`);

        if (check.checked) {
            check.disabled = true;
            check.checked = false;

            return char;
        }
    }
    return char;
}

const getPos = () => {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    list = [];

    canvas.addEventListener('click', (event) => {
        let x = event.offsetX / canvas.width;
        let y = event.offsetY / canvas.height
        console.log(`${x} ${y}`);
        list.push({ x, y });
        if (list.length > 48) {
            console.log(list);
        }
    });

}


/*
control screens
*/


//function show start screen
function showStart() {
    hideBase.classList.remove('hide');
    start.classList.remove('hide');
}

function hideStart() {
    hideBase.classList.add('hide');
    start.classList.add('hide');
}

// show pick number of players screen
function showNumber() {
    hideBase.classList.remove('hide');
    pickNumber.classList.remove('hide');
}

function hideNumber() {
    hideBase.classList.add('hide');
    pickNumber.classList.add('hide');
}

// show pick characacter screen
function showChar() {
    hideBase.classList.remove('hide');
    pickChar.classList.remove('hide');
}

function hideChar() {
    hideBase.classList.add('hide');
    pickChar.classList.add('hide');
}

// show dice roll screen
function showDice() {
    hideBase.classList.remove('hide');
    dice.classList.remove('hide');
}

function hideDice() {
    hideBase.classList.add('hide');
    dice.classList.add('hide');
}

//show / hide get item / power up screen
function showItem() {
    hideBase.classList.remove('hide');
    item.classList.remove('hide');
}

function hideItem() {
    hideBase.classList.add('hide');
    item.classList.add('hide');
}

// show / hide question screen
function showQuest() {
    hideBase.classList.remove('hide');
    question.classList.remove('hide');
}

function hideQuest() {
    hideBase.classList.add('hide');
    question.classList.add('hide');
}

// store the info for each character
let charList = [];
let charNumb = 0;


/*

button functions

*/

const startGame = () => {
    hideStart()
    showNumber();
}

/*
how many teams
*/
const enterNumber = () => {

    charNumb = getTeamNumb();

    if (charNumb == -1) {
        return;
    }

    hideNumber();
    showChar();
}


const enterChar = () => {
    let char = getChar();

    if (char == -1) {
        return;
    }

    console.log(char);

    let img = new Image();
    img.src = `./img/character/${char}.png`;

    let start = postList[0];

    charList.push({
        name: char,
        index: 0,
        x: start.x, y: start.y,
        img
    });

    if (charList.length >= charNumb) {
        hideChar();
    }

}

const main = () => {
    let canvas = document.querySelector('canvas');
    let ctx = canvas.getContext('2d');

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


    const anim = () => {



        window.requestAnimationFrame(anim);
    }

    window.requestAnimationFrame(anim);
}

/*
start of program
*/

window.onload = function () {
    showStart();
}