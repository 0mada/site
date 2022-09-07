const link9b9t = "https://9b9t.com/";
const linkHistory = "https://www.omada.pw/history";
const linkDiscord = "https://join.omada.pw/";
const linkGithub = "https://github.com/OmadaDevel";
const linkHome = "http://www.omada.pw/";
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
