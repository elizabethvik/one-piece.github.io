const heading = 'One Piece'

let luffyImage = document.querySelector('img');
luffyImage.onmouseover = function () {
    luffyImage.setAttribute('src', 'images/luffy-2.jpg');
}


luffyImage.onmouseleave = function () {
    luffyImage.setAttribute('src', 'images/luffy.webp');
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('请输入你的名字。');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = heading + ',' + myName;
    }
}
//
if (localStorage.getItem('name')) {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = heading + ',' + storedName;
}

myButton.onclick = function () {
    setUserName()
}