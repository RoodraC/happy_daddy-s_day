function openGift() {

    const gift = document.getElementById("gift");

    gift.classList.remove("hidden");

    gift.innerHTML = `
        <h2>🏆 World's Best Dad Award</h2>

        <p>
        Achievement Unlocked:
        </p>

        <h3>Being The Best Dad In the World To Rudraditya Chatterjee The Great!</h3>

        <h2>+100000 XP</h2>

        <p>
        Thank you for everything, Dad ❤️
        </p>
    `;
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
