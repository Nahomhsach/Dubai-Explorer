function welcomeMessage(){

    alert("Welcome To Dubai!");

}


function showFood(food){

    let title = document.getElementById("foodTitle");
    let text = document.getElementById("foodText");
    let pic = document.getElementById("foodPic");

    pic.style.display = "block";

    if(food === "shawarma"){

        title.innerHTML = "Shawarma";

        text.innerHTML =
        "A famous Middle Eastern wrap filled with meat, vegetables, and sauce.";

        pic.src = "https://foodieholly.com/wp-content/uploads/2026/01/Halloumi-shawarma-sqaure-500x375.jpg?crop=1";

    }

    else if(food === "machboos"){

        title.innerHTML = "Machboos";

        text.innerHTML =
        "A flavorful rice dish with spices, meat, and vegetables.";

        pic.src = "https://www.thefooddictator.com/wp-content/uploads/2016/04/Machboos-3-sm.jpg";

    }

    else if(food === "luqaimat"){

        title.innerHTML = "Luqaimat";

        text.innerHTML =
        "Sweet fried dumplings covered in syrup or honey.";

        pic.src = "https://i.ytimg.com/vi/OfJskHbsjpg/maxresdefault.jpg";

    }

}


function convertCurrency(){

    let usd = document.getElementById("usdInput").value;

    let aed = usd * 3.67;

    document.getElementById("currencyResult").innerHTML =
    "$" + usd + " USD = " + aed.toFixed(2) + " AED";

}


const darkBtn = document.getElementById("darkModeBtn");

darkBtn.addEventListener("click", function(){

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){

        darkBtn.innerHTML = "Dark Mode";

    }

    else{

        darkBtn.innerHTML = "Light Mode";

    }

});


let text = "Discover Dubai";

let index = 0;

function typeEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typeEffect, 120);

    }

}

typeEffect();
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".about, .card, .activity, .food-display, .tips-box");

hiddenElements.forEach(el => observer.observe(el));
const links = document.querySelectorAll(".navbar ul li a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add("active");
    }
});
window.addEventListener("load", function () {
    document.getElementById("loader").style.display = "none";
    document.body.classList.add("loaded");
});
const particleContainer = document.getElementById("particles");

for (let i = 0; i < 40; i++) {
    let p = document.createElement("div");
    p.classList.add("particle");

    p.style.left = Math.random() * 100 + "vw";
    p.style.animationDuration = (5 + Math.random() * 5) + "s";
    p.style.opacity = Math.random();

    particleContainer.appendChild(p);
}
window.onscroll = function () {
    let winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;

    document.getElementById("progressBar").style.width = scrolled + "%";
};