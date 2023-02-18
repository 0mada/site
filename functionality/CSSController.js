const linkDiscord = "https://discord.gg/VNQ6QkZG";
const linkGithub = "https://github.com/OmadaDevel";
const linkHome = "https://www.omada.pw/";
const linkMatrix = "https://omada.pw/nocord.html";
const linkSnake = "https://omada.pw/snake.html";
//click for free robux and unpaid pizza at your door

const elementsByName = document.getElementsByName("affectedButton");

console.log(elementsByName);

elementsByName.forEach(function(item, ind) {
    item.addEventListener("mouseenter", function() {
        item.className = "buttonHoverAnim";
    });
});
elementsByName.forEach(function(item, ind) {
    item.addEventListener("mouseleave", function() {
        item.className = "buttonUntouchedAnim";
    });
});
elementsByName.forEach(function(item, ind) {
    item.addEventListener("click", function() {
        item.className = "buttonClickAnim";
        if (item.id == "toHome") {
            window.location.href = linkHome;
        }
        if (item.id == "toMatrix") {
            window.location.href = linkMatrix;
        }
        if (item.id == "toDiscord") {
            window.location.href = linkDiscord;
            //aka racist nether portal
        }
        if (item.id == "toGithub") {
            window.location.href = linkGithub;
        }
    }};
});
/*
for (const i in elementsByName) {
    const item = elementsByName[i];
    item.addEventListener("mouseenter", function() {
        item.className = "buttonHoverAnim";
    });
}
for (const i in elementsByName) {
    const item = elementsByName[i];
    item.addEventListener("mouseenter", function() {
        item.className = "buttonUntouchedAnim";
    });
}

for (const i in elementsByName) {
    const item = elementsByName[i];
    item.addEventListener("click", function() {
        item.className = "buttonClickAnim";
        if (item.id == "toHome") {
            window.location.href = linkHome;
        }
        if (item.id == "toHistory") {
            window.location.href = linkHistory;
        }
        if (item.id == "toDiscord") {
            window.location.href = linkDiscord;
            //aka racist nether portal
        }
        if (item.id == "toGithub") {
            window.location.href = linkGithub;
        }
        if (item.id == "to9b9t") {
            window.location.href = link9b9t;
        }
    });
}
*/

//document.getElementById("affectedButton").addEventListener("mouseleave", function() {
//    document.getElementById("affectedButton").className = "buttonUntouchedAnim";
//})

//document.getElementById("affectedButton").addEventListener("click", function() {
//    document.getElementById("affectedButton").className = "buttonClickAnim";
//})
