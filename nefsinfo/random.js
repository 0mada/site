document.addEventListener('click', musicPlay);
window.onload = function() {
    blink();
    var promise = document.getElementById('arabic').play();
    if (promise !== undefined) {
        promise.then(_ => {
          
        }).catch(error => {
            document.getElementById('playthatshit').style.display = 'inline'
        });
      }
}
function musicPlay() {
    document.getElementById('arabic').play();
    document.getElementById('playthatshit').style.opacity = 0;
    document.removeEventListener('click', musicPlay);
}

function blink() {
    var f = document.getElementById('flashing');
    var isVisible = false;
    setInterval(function() {
        f.style.opacity = (isVisible ? 100 : 0);
       isVisible = !isVisible;
    }, 80);
 }
