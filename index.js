const swimButton = document.querySelector("#swimButton");
const display = document.querySelector("#display");
const frames = document.querySelector("#frames")

swimButton.addEventListener("click", buttonPressed);

document.body.classList.toggle("dark-mode");

let startTime;
let count = 0;

function buttonPressed() {

    if (startTime == null) {
        startTime = Date.now();
        display.textContent = count

    } else {
        let frameTime = ((Date.now() - startTime) / (1000 / 30));
        let frameRemainder = frameTime % 20;
        let expectedCount = frameTime / 20;
        console.log(expectedCount);

        if (expectedCount < (count + 1) && frameRemainder > 13) {
            count += 1;
            display.textContent = count
            displayFrameData(frameRemainder)
        } else if (expectedCount > (count + 1) || frameRemainder < 13) {
            display.textContent = "Fails " + count
            displayFrameData(frameRemainder)
            resetGame()
        }
    }
}

function resetGame() {
    count = 0;
    startTime = null;
}

function displayFrameData(frame) {
    frames.textContent = "Frame: " + Math.floor(frame)
}
