//mush better syntax 

//variables

//reactions
const reaction = document.querySelector(`#Reaction`);
const reaction_src = document.querySelector(`#Reaction-src`);
const score_reaction = document.querySelector(`#score-reaction`);

//Memory
const memory = document.querySelector(`#Memory`);
const memory_src = document.querySelector(`#Memory-src`);
const scoreMemory = document.querySelector(`#score-Memory`);

//Verbal
const verbal = document.querySelector(`#Verbal`);
const verbal_src = document.querySelector(`#Verbal-src`);
const scoreVerbal = document.querySelector(`#score-Verbal`);

//Visual
const visual = document.querySelector(`#Visual`);
const visual_src = document.querySelector(`#Visual-src`);
const scoreVisual = document.querySelector(`#score-Visual`);

// element object
const elements = [
    {
        tect : reaction,
        score : score_reaction,
        src : reaction_src,
    },
    
    {
        tect : memory,
        score : scoreMemory,
        src : memory_src,
    },
    
    {
        tect : verbal,
        score : scoreVerbal,
        src : verbal_src,
    },
    
    {
        tect : visual,
        score : scoreVisual,
        src : visual_src,
    },

];


//fetching data

fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((item, i) => {
            elements[i].tect.textContent = item.category;
            elements[i].src.src = item.icon;
            elements[i].score.textContent = item.score;
        });
    })
    .catch(error => console.log('errpr in loading data'))


/* variables 

//reactions
const reaction = document.querySelector(`#Reaction`);
const reaction_src = document.querySelector(`#Reaction-src`);
const score_reaction = document.querySelector(`#score-reaction`);

//Memory
const memory = document.querySelector(`#Memory`);
const memory_src = document.querySelector(`#Memory-src`);
const scoreMemory = document.querySelector(`#score-Memory`);

//Verbal
const verbal = document.querySelector(`#Verbal`);
const verbal_src = document.querySelector(`#Verbal-src`);
const scoreVerbal = document.querySelector(`#score-Verbal`);

//Visual
const visual = document.querySelector(`#Visual`);
const visual_src = document.querySelector(`#Visual-src`);
const scoreVisual = document.querySelector(`#score-Visual`);



/* getting datas 


fetch('./data.json') // locate the json datas
    .then(response => response.json()) // coverting to jsom
    .then(data => {

        /* getting each data 

        //category
        let category1 =  data[0].category;
        let category2 = data[1].category;
        let category3 = data[2].category;
        let category4 = data[3].category;

        //score
        let score1 =  data[0].score;
        let score2 = data[1].score;
        let score3 = data[2].score;
        let score4 = data[3].score;

        //icon
        let icon1 =  data[0].icon;
        let icon2 = data[1].icon;
        let icon3 = data[2].icon;
        let icon4 = data[3].icon;
        
        //display data

        //reaction
        reaction.textContent = category1;
        score_reaction.textContent = score1;
        reaction_src.setAttribute('src', `${icon1}`);

        //Memory
        memory.textContent = category2;
        scoreMemory.textContent = score2;
        memory_src.setAttribute('src', `${icon2}`);

        //verbal
        verbal.textContent = category3;
        scoreVerbal.textContent = score3;
        verbal_src.setAttribute('src', `${icon3}`);

        //Visual
        visual.textContent = category4;
        scoreVisual.textContent = score4;
        visual_src.setAttribute('src', `${icon4}`);

    })
    .catch(error => console.log('Error loading the data', error));

/*

    // 


    /* 
    
        

    To simplify this code, you can loop through the data array to reduce redundancy. Here’s a more concise version:

```javascript
/* Variables 
const elements = [
    { text: document.querySelector(`#Reaction`), src: document.querySelector(`#Reaction-src`), score: document.querySelector(`#score-reaction`) },
    { text: document.querySelector(`#Memory`), src: document.querySelector(`#Memory-src`), score: document.querySelector(`#score-Memory`) },
    { text: document.querySelector(`#Verbal`), src: document.querySelector(`#Verbal-src`), score: document.querySelector(`#score-Verbal`) },
    { text: document.querySelector(`#Visual`), src: document.querySelector(`#Visual-src`), score: document.querySelector(`#score-Visual`) }
];

/* Fetching data 
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((item, index) => {
            elements[index].text.textContent = item.category;
            elements[index].score.textContent = item.score;
            elements[index].src.setAttribute('src', item.icon);
        });
    })
    .catch(error => console.log('Error loading the data', error));



    /* 
    
        /* Variables 
const elements = [
    { text: document.querySelector(`#Reaction`), src: document.querySelector(`#Reaction-src`), score: document.querySelector(`#score-reaction`) },
    { text: document.querySelector(`#Memory`), src: document.querySelector(`#Memory-src`), score: document.querySelector(`#score-Memory`) },
    { text: document.querySelector(`#Verbal`), src: document.querySelector(`#Verbal-src`), score: document.querySelector(`#score-Verbal`) },
    { text: document.querySelector(`#Visual`), src: document.querySelector(`#Visual-src`), score: document.querySelector(`#score-Visual`) }
];

/* Fetching data 
fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        data.forEach((item, index) => {
            elements[index].text.textContent = item.category;
            elements[index].score.textContent = item.score;
            elements[index].src.setAttribute('src', item.icon);
        });
    })
    .catch(error => console.log('Error loading the data', error));
    
    */