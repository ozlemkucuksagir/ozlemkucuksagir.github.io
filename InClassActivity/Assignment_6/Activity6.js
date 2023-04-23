let currentLevel = 1;
let clickCount = 0;
let time = 500;

function game() {
    setTimeout(() => {
        newMarginTop = Math.random() * 311;
        newMarginLeft = Math.random() * 311;
        document.getElementById("pinkButton").style.marginTop = newMarginTop + 'px';
        document.getElementById("pinkButton").style.marginLeft = newMarginLeft + 'px';

        if (clickCount === 3) {
            alert(`You won ${currentLevel}. level! You can go to the ${currentLevel+1}. level.`);
            currentLevel++;
            clickCount = 0;
            if (time > 0) {
                time -= 100;
            } else {
                time = 0;
            }
        }
    }, time);
}

document.getElementById("pinkButton").addEventListener("click", () => {
    clickCount++;
});