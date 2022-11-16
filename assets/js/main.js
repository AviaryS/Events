

let div = document.getElementsByTagName('DIV')[0];
let ball = div.querySelector('#ball');
let ballSize = getComputedStyle(ball);

div.onclick = function(event) {
    ballWidth = parseInt(ballSize.width) / 2;
    ballHeight = parseInt(ballSize.height) / 2;
    Xcorr = event.clientX - ballWidth - div.offsetLeft - div.clientLeft;
    Ycorr = event.clientY - ballHeight - div.offsetTop - div.clientTop;
    console.log(Xcorr)
    if (Xcorr > (div.clientWidth - ballWidth * 2) || Ycorr > (div.clientHeight - ballHeight * 2)) return;

    ballTransfer(Xcorr, Ycorr);
};

function ballTransfer(Xcorr, Ycorr) {
    ball.style = 'padding-left: ' + Xcorr + 'px;' + 'padding-top: ' + Ycorr + 'px;';
}

let pane = document.getElementsByClassName('pane')[0];




let container = document.querySelector("#container");
container.onclick = function(event) {
    target = event.target;

    if (target.tagName != 'BUTTON') return;
    
    target.closest('.pane').hidden = true;
};
