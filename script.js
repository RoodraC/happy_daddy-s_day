function openGift() {

    const gift = document.getElementById("gift");

    gift.classList.remove("hidden");

    gift.innerHTML = `
        <h2>🏆 World's Best Dad Award</h2>

        <p>
        Achievement Unlocked:
        </p>

        <h3>Raised Rudra Successfully</h3>

        <h2>+100000 XP</h2>

        <p>
        Thank you for everything, Dad ❤️
        </p>
    `;
}

function portfolioAlert() {

    const box = document.getElementById("portfolio");

    box.classList.remove("hidden");

    box.classList.remove("green");
    box.classList.add("red");

    box.innerHTML = `
        <h2>🚨 MARKET ALERT 🚨</h2>

        <p>Portfolio Value:</p>

        <h3>₹12,47,000 → ₹1,56,000</h3>

        <h2>-87.4%</h2>

        <p>Severe Market Crash Detected</p>
    `;

    setTimeout(() => {

        box.classList.remove("red");
        box.classList.add("green");

        box.innerHTML = `
            <h2>😆 GOTCHA!</h2>

            <p>
            Your portfolio is perfectly fine.
            </p>

            <p>
            Happy Father's Day, Dad ❤️
            </p>

            <p>
            Thanks for teaching me not to panic during market swings.
            </p>
        `;

    }, 2500);
}

function secretButton() {

    const secret = document.getElementById("secret");

    secret.classList.remove("hidden");

    secret.innerHTML = `
        <h2>🕵️ Classified Dad Facts</h2>

        <p>✅ Can fix almost anything</p>

        <p>✅ Always has his baby's support</p>

        <p>✅ Stronger than he thinks</p>

        <p>❤️ Loved more than he knows</p>
    `;
}