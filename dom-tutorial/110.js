// innerHTML

const headline = document.querySelector(".headline");
console.log(headline.innerHTML);

// change innerHTML
headline.innerHTML = "<h1>Inner HTML changed</h1>";
console.log(headline.innerHTML);

// Add button
headline.innerHTML += "<button class=\"btn\">Learn More</button>"