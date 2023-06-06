const alph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

function run() {
    if (document.getElementById("txt").value.length >= (document.getElementById("txt").rows * document.getElementById("txt").cols)) {
        return;
    }
    var rad = Math.round(Math.random()*(alph.length-1));
    var char = alph[rad];
    if (Math.round(Math.random()*1) == 0) {
        char = char.toUpperCase();
    }
    if (Math.round(Math.random()*10) <= 3) {
        char = Math.round(Math.random()*(10-1)).toString();
    }
    if (Math.round(Math.random()*10) <= 5) {
        char = " ";
    }
    document.getElementById("txt").value += char;
    window.requestAnimationFrame(run);
}

run();