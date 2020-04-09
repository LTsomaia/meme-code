let myImage = document.querySelector('img');

myImage.onclick = function() { // change picture by clicking on it
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/image.jpg') {
      myImage.setAttribute ('src','images/image2.jpg');
    } else {
      myImage.setAttribute ('src','images/image.jpg');
    }
}

// personalize name
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}