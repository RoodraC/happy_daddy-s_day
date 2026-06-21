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
setInterval(() => {

    const emoji = document.createElement("div");

    emoji.innerHTML = "❤️";

    emoji.style.position = "fixed";
    emoji.style.left = Math.random() * window.innerWidth + "px";
    emoji.style.top = window.innerHeight + "px";
    emoji.style.fontSize = "40px";
    emoji.style.zIndex = "99999";

    document.body.appendChild(emoji);

    emoji.animate(
        [
            { transform: "translateY(0)" },
            { transform: `translateY(-${window.innerHeight+200}px)` }
        ],
        {
            duration: 5000
        }
    );

    setTimeout(() => emoji.remove(), 5000);

}, 300);
// =====================================
// DISCO PARTY MODE
// =====================================

const discoColors = [
    "#ff0000",
    "#ff8800",
    "#ffff00",
    "#00ff00",
    "#00ffff",
    "#0088ff",
    "#0000ff",
    "#ff00ff"
];

setInterval(() => {

    document.body.style.boxShadow =
        `inset 0 0 300px ${
            discoColors[
                Math.floor(Math.random() * discoColors.length)
            ]
        }`;

}, 150);


// =====================================
// FLOATING DISCO BALLS
// =====================================

setInterval(() => {

    const ball = document.createElement("div");

    ball.innerHTML = "🪩";

    ball.style.position = "fixed";
    ball.style.left =
        Math.random() * window.innerWidth + "px";
    ball.style.top = "-50px";

    ball.style.fontSize =
        (30 + Math.random() * 40) + "px";

    ball.style.zIndex = "99999";
    ball.style.pointerEvents = "none";

    document.body.appendChild(ball);

    ball.animate(
    [
        {
            transform:"translateY(0px) rotate(0deg)"
        },
        {
            transform:
            `translateY(${window.innerHeight+200}px)
             rotate(1080deg)`
        }
    ],
    {
        duration:6000
    });

    setTimeout(() => {
        ball.remove();
    }, 6000);

}, 600);


// =====================================
// RANDOM PARTY EMOJIS
// =====================================

const party = [
    "🎉","🎊","✨","⭐",
    "🎈","🥳","🎂","🎁",
    "❤️","👑","🏆"
];

setInterval(() => {

    const p = document.createElement("div");

    p.innerHTML =
        party[
            Math.floor(Math.random()*party.length)
        ];

    p.style.position = "fixed";

    p.style.left =
        Math.random()*window.innerWidth+"px";

    p.style.top =
        Math.random()*window.innerHeight+"px";

    p.style.fontSize =
        (20+Math.random()*50)+"px";

    p.style.zIndex = "99999";

    document.body.appendChild(p);

    p.animate(
    [
        {
            opacity:0,
            transform:"scale(0)"
        },
        {
            opacity:1,
            transform:"scale(1.5)"
        },
        {
            opacity:0,
            transform:"scale(0)"
        }
    ],
    {
        duration:2000
    });

    setTimeout(() => {
        p.remove();
    }, 2000);

}, 200);


// =====================================
// GLITCH / DITHER EFFECT
// =====================================

setInterval(() => {

    document.body.style.transform =
        `translate(
        ${(Math.random()*8)-4}px,
        ${(Math.random()*8)-4}px
        )`;

    setTimeout(() => {
        document.body.style.transform =
            "translate(0px,0px)";
    }, 50);

}, 1200);


// =====================================
// SCREEN FLASHES
// =====================================

setInterval(() => {

    const flash =
        document.createElement("div");

    flash.style.position = "fixed";
    flash.style.inset = "0";

    flash.style.background =
        discoColors[
            Math.floor(Math.random()*discoColors.length)
        ];

    flash.style.opacity = "0.08";

    flash.style.zIndex = "99998";

    flash.style.pointerEvents = "none";

    document.body.appendChild(flash);

    setTimeout(() => {
        flash.remove();
    }, 100);

}, 500);


// =====================================
// LASER BEAMS
// =====================================

setInterval(() => {

    const laser =
        document.createElement("div");

    laser.style.position = "fixed";

    laser.style.left =
        Math.random()*window.innerWidth+"px";

    laser.style.top = "0";

    laser.style.width = "4px";

    laser.style.height = "100vh";

    laser.style.background =
        discoColors[
            Math.floor(Math.random()*discoColors.length)
        ];

    laser.style.zIndex = "99997";

    document.body.appendChild(laser);

    laser.animate(
    [
        {opacity:0},
        {opacity:1},
        {opacity:0}
    ],
    {
        duration:700
    });

    setTimeout(() => {
        laser.remove();
    }, 700);

}, 300);


// =====================================
// AUTO PARTY MESSAGE
// =====================================

setTimeout(() => {

    const msg =
        document.createElement("div");

    msg.innerHTML =
        "🥳 FATHER'S DAY PARTY MODE ACTIVATED 🥳";

    msg.style.position = "fixed";
    msg.style.top = "30px";
    msg.style.left = "50%";

    msg.style.transform =
        "translateX(-50%)";

    msg.style.background = "#000";

    msg.style.color = "#fff";

    msg.style.padding =
        "20px 30px";

    msg.style.borderRadius = "20px";

    msg.style.zIndex = "100000";

    msg.style.fontWeight = "bold";

    document.body.appendChild(msg);

    setTimeout(() => {
        msg.remove();
    }, 5000);

}, 1000);
