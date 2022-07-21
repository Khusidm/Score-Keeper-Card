const reset = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playto");

const p1 = {
    score: 0,
    button: document.querySelector("#p1button"),
    display: document.querySelector("#p1display")
}
const p2 = {
    score: 0,
    button: document.querySelector("#p2button"),
    display: document.querySelector("#p2display")
}

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
    if(!isGameOver) {
        player.score += 1;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add("has-text-success");
            opponent.display.classList.add("has-text-danger");
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }   
}

p1.button.addEventListener("click", function() {
    updateScore(p1, p2); 
})

p2.button.addEventListener("click", function() {
    updateScore(p2, p1); 
})

function resetValue() {
    isGameOver = false;
    for(let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove("has-text-success", "has-text-danger");
        p.button.disabled = false;
    }
    // p1.display.textContent = 0;
    // p2.display.textContent = 0;
    // p1.score = 0;
    // p2.score = 0;
    // p2.display.classList.remove("has-text-success", "has-text-danger");
    // p1.display.classList.remove("has-text-danger", "has-text-success");
    // p1.button.disabled = false;
    // p2.button.disabled = false;
}

reset.addEventListener("click", resetValue)

winningScoreSelect.addEventListener("change", function() {
    winningScore = parseInt(this.value);
    resetValue();
})