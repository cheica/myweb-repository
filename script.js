const h2 = document.createElement('h2');
h2.textContent = "Brief Description:";

document.querySelector('body').appendChild(h2); 

let p = document.createElement("p");
document.querySelector('h2').appendChild(p);

p.innerHTML = "Welcome to my website! This page includes some basic information about me. Hope you enjoy!";

