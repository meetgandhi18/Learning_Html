function flipCoin() {
    const coin = document.getElementById("coin");
    const resultText = document.getElementById("result");

    coin.classList.remove("flip");
    void coin.offsetWidth; // restart animation
    coin.classList.add("flip");

    setTimeout(() => {
        const toss = Math.random() < 0.5 ? "Heads" : "Tails";
        coin.textContent = toss;
        resultText.textContent = "Result: " + toss;
    }, 500);
}
