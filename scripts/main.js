var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';
var myImage = document.querySelector('img');
var secondImage = document.getElementById('zee2');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/zahra.jpg') {
      myImage.setAttribute ('src','images/java.jpeg');
    } else {
      myImage.setAttribute ('src','images/zahra.jpg');
    }
}
var myButton = document.querySelector('#thebutton');
var myHeading = document.querySelector('#zee');
function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Developer of the year is, ' + myName;
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Guess who the developer of the year is, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

function changeImage (img) {
  img.src = "images/fiji.jpg";
}
function returnImage(img){
  img.src = "images/zee1.jpg"
}

