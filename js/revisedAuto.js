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
];

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
];


let posList = [
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


const QUIZ = [
    {
        text: "Could you please bring me ( ) eggs. I want to make an omelet.",
        answer: "a couple of ~",
        options: [
            "weather", "priest", "a couple of ~", "meaning"
        ]
    },
    {
        text: "Every morning, Peter ( )s some bread in the oven. They smell amazing.",
        answer: "bake",
        options: [
            "bake", "gym", "personality", "traditional"
        ]
    },
    {
        text: "Could you please help me () this table? We need to bring it to the kitchen.",
        answer: "carry",
        options: [
            "carry", "plant", "beside", "also"
        ]
    }
]

const STEP = 30;

window.onload = function () {

    // set the size of characters
    let dim;

    // canvas 
    let canvas = document.querySelector("#canvas");
    let ctx = canvas.getContext('2d');

    // show and hide boxes
    let startBox = document.querySelector("#startBox");
    let numberBox = document.querySelector("#numberBox");
    let charBox = document.querySelector("#charBox");
    let diceBox = document.querySelector("#diceBox");
    let questBox = document.querySelector("#questBox");
    let itemBox = document.querySelector("#itemBox");
    let endBox = document.querySelector("#endBox");

    // buttons
    let startGameBtn = document.querySelector("#startGameBtn");
    let nmbrEntrBtn = document.querySelector("#nmbrEntrBtn");
    let charEntrBtn = document.querySelector("#charEntrBtn");

    // dice and roll buttons 
    let resultImg = document.querySelector("#resultImg");
    let rollBtn = document.querySelector("#rollBtn");
    let rollNextBtn = document.querySelector("#rollNextBtn");

    //quest
    let checkQuestBtn = document.querySelector("#checkQuestBtn");
    let nextQuestBtn = document.querySelector("#nextQuestBtn");

    // item
    let getItemBtn = document.querySelector("#getItemBtn");
    let nextItemBtn = document.querySelector("#nextItemBtn");

    /*
    var to store user input
    */
    // number of characters
    let charNumb = -1;
    // selected chars
    let charList = [];
    // backgrund img
    let backImg = document.querySelector('#backImg');
    // move moveDistnce
    let moveDist;

    /*
    functions
    */

    const makeQuest = () => {
        //questText
        let questText = this.document.querySelector("#questText");
        let selectQuest = QUIZ[Math.floor(Math.random() * QUIZ.length)];

        questText.innerHTML = selectQuest.text;
        selectQuest.options.forEach((value, i)=>{
            let btn = this.document.querySelector(`#select${i}`);
            btn.innerHTML = value;
        });

        questBox.classList.remove('hide');

    }

    const anim = () => {
        ctx.fillStyle = 'rgb(255, 255, 255, 0.1)';
        ctx.fillRect(0, 0, innerWidth, innerHeight);

        ctx.drawImage(backImg, 0, 0, this.innerWidth, this.innerHeight);

        charList.forEach((char) => {
            let x = char.x * canvas.width - dim / 2;
            let y = char.y * canvas.height - dim / 2;
            ctx.drawImage(char.img, x, y, dim, dim);
        });
        window.requestAnimationFrame(anim);
    }

    const setVariables = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        dim = (window.innerWidth > window.innerHeight ? window.innerWidth : window.innerHeight) * 0.08;
    }


    const moveChar = (numb, pickIndex) => {
        if (numb == 0) {
            showDice();
            return alert('move zero no ok');
        }
        let char = charList[pickIndex];

        let moveList = [];

        // the next index after move
        let nextIndex = char.index + numb;

        // next position
        if (nextIndex < 0) {
            nextIndex = 0;
        }

        if (nextIndex == char.index) {
            showDice();
            return alert('no move');
        }

        while (char.index != nextIndex) {

            // get the direction either 
            let dir = (nextIndex > char.index) ? 1 : -1;

            let sIndex = char.index;
            let eIndex = char.index + dir;
            let sPos = posList[sIndex];
            let ePos = posList[eIndex];
            moveList.push(sPos);

            let deltaX = (ePos.x - sPos.x) / STEP;
            let deltaY = (ePos.y - sPos.y) / STEP;

            for (let i = 0; i < STEP; i++) {
                let x = sPos.x + deltaX * i;
                let y = sPos.y + deltaY * i;
                moveList.push({
                    x, y
                });
            }

            // move towards the intended index
            char.index += dir;
        }

        let index = 0;

        let handle = setInterval(() => {
            let pos = moveList[index];
            char.x = pos.x;
            char.y = pos.y;
            index++;
            if (index >= moveList.length) {
                clearInterval(handle);

                // if dice show question
                makeQuest();

                // if item go to next turn
            }
        }, 50);

    }

    // on window resize set the new dimeions of objects
    window.addEventListener('resize', setVariables);

    // start button
    startGameBtn.addEventListener("click", () => {
        startBox.classList.add('hide');
        numberBox.classList.remove('hide');
    });

    // enter number button
    nmbrEntrBtn.addEventListener("click", () => {
        const checkSlct = () => {
            for (let i = 0; i < 4; i++) {
                let numb = i + 2;
                let input = document.querySelector(`#teamNumb${numb}`);
                if (input.checked) {
                    return numb;
                }
            }
            return -1;
        }

        // char number
        charNumb = checkSlct();

        // no answer selected
        if (charNumb == -1) {
            return alert('please chose an option');
        }

        // change screen
        numberBox.classList.add('hide');
        charBox.classList.remove('hide');

    });

    // pick charcater button
    charEntrBtn.addEventListener("click", () => {
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
            return -1;
        }

        let select = getChar();

        if (select == -1) {
            return this.alert('please select a character');
        }

        let img = new Image();
        img.src = `./img/character/${select}.png`;

        let start = posList[0];

        charList.push({
            name: select,
            index: 0,
            x: start.x, y: start.y,
            img
        });

        if (charList.length >= charNumb) {
            console.log('char entered');
            charBox.classList.add('hide');
            diceBox.classList.remove('hide');
        }
    });

    // roll dice button
    rollBtn.addEventListener("click", () => {
        let rnd = Math.floor(Math.random() * NUMBERS.length);
        resultImg.src = NUMBERS[rnd];
        // set the move moveDistance
        moveDist = rnd + 1;
        rollBtn.classList.add('hide');
        rollNextBtn.classList.remove('hide');
    });

    // dive next button
    rollNextBtn.addEventListener("click", () => {
        diceBox.classList.add('hide');
        moveChar(moveDist, 0);
    });

    // check answer for queston
    checkQuestBtn.addEventListener("click", () => {

    });
    nextQuestBtn.addEventListener("click", () => {

    });

    // item btns
    getItemBtn.addEventListener("click", () => {

    });
    nextItemBtn.addEventListener("click", () => {

    });

    // start game
    setVariables();

    window.requestAnimationFrame(anim);

}