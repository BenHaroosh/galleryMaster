'use strict'



var gDate = new Date()


var gProjs = [
    {
        id: "mineSweeper",
        name: "mineSweeper",
        title: "Watch Out From Bombs",
        desc: makeLorem(),
        img: "portfolio/mineSweeper.png",
        url:"https://benharoosh.github.io/BHMineSweeper/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: "bookStore",
        name: "bookStore",
        title: "So... Wanna Buy a Book?",
        desc: makeLorem(),
        img: "portfolio/bookStore.png",
        url:"https://benharoosh.github.io/bookStore/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: "todos",
        name: "todos",
        title: "So... What do I need to do?",
        desc: makeLorem(),
        img: "portfolio/todos.png",
        url:"https://benharoosh.github.io/todos/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: "safeContent",
        name: "safeContent",
        title: "Shhhhh Safe!",
        desc: makeLorem(),
        img: "portfolio/safeContent.png",
        url:"https://benharoosh.github.io/safeContentBH/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: "inPic",
        name: "inPic",
        title: "What Is This Thing?",
        desc: makeLorem(),
        img: "portfolio/inPic.png",
        url:"https://benharoosh.github.io/inPic/",
        publishedAt: gDate.setDate(gDate.getDate()-1),
        labels: ["Matrixes", "keyboard events"]
    },
    {
        id: "guessMe",
        name: "guessMe",
        title: "guess Who?",
        desc: makeLorem(),
        img: "portfolio/guessMe.png",
        url:"https://benharoosh.github.io/guessMe/",
        publishedAt: 1448693940000,
        labels: ["Matrixes", "keyboard events"]
    }
]


function getProjs() {
    return gProjs
}

function findProj(projId) {
    const proj = gProjs.find(function (proj) {
        return proj.id === projId
    })

    return proj
}


function makeLorem(wordCount = 100) {
    const words = ['The sky', 'above', 'the port', 'was', 'the color of television', 'tuned', 'to', 'a dead channel', '.', 'All', 'this happened', 'more or less', '.', 'I', 'had', 'the story', 'bit by bit', 'from various people', 'and', 'as generally', 'happens', 'in such cases', 'each time', 'it', 'was', 'a different story', '.', 'It', 'was', 'a pleasure', 'to', 'burn'];
    var txt = '';
    while (wordCount > 0) {
        wordCount--;
        txt += words[Math.floor(Math.random() * words.length)] + ' ';
    }
    return txt;
}