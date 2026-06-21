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
// =========================
// SUPER FUN MODE
// =========================

const flyingStuff = [
    "❤️","💙","💚","💛","💜",
    "⭐","✨","🌟","🎉","🎊",
    "📈","📉","💰","💵","💸",
    "🏆","👑","🚀","😎","🔥"
];

function spawnFlyingEmoji(){

    const e = document.createElement("div");

    e.innerHTML =
        flyingStuff[
            Math.floor(Math.random()*flyingStuff.length)
        ];

    e.style.position = "fixed";

    e.style.left =
        Math.random()*window.innerWidth+"px";

    e.style.top =
        window.innerHeight+50+"px";

    e.style.fontSize =
        (20+Math.random()*50)+"px";

    e.style.pointerEvents = "auto";
    e.style.cursor = "pointer";
    e.style.zIndex = "1";

    document.body.appendChild(e);

    const drift =
        (Math.random()*200)-100;

    e.animate(
    [
        {
            transform:"translate(0,0) rotate(0deg)",
            opacity:1
        },
        {
            transform:
            `translate(${drift}px,-${window.innerHeight+300}px)
             rotate(${Math.random()*720}deg)`,
            opacity:0
        }
    ],
    {
        duration:7000+Math.random()*5000,
        easing:"linear"
    });

    e.onclick = ()=>{

        e.innerHTML = "💥";

        for(let i=0;i<10;i++){

            const mini=document.createElement("div");

            mini.innerHTML="✨";

            mini.style.position="fixed";
            mini.style.left=e.style.left;
            mini.style.top=e.style.top;
            mini.style.fontSize="18px";

            document.body.appendChild(mini);

            mini.animate(
            [
                {
                    transform:"translate(0,0)"
                },
                {
                    transform:
                    `translate(
                    ${(Math.random()*200)-100}px,
                    ${(Math.random()*200)-100}px
                    )`
                }
            ],
            {
                duration:1000
            });

            setTimeout(()=>mini.remove(),1000);
        }
    };

    setTimeout(()=>e.remove(),12000);
}

setInterval(spawnFlyingEmoji,250);

// =========================
// RANDOM DAD ACHIEVEMENTS
// =========================

const achievements = [

"🏆 Achievement Unlocked: World's Best Dad",

"📈 Achievement Unlocked: Stock Market Survivor",

"💰 Achievement Unlocked: Family CFO",

"👨 Achievement Unlocked: Dad Level 999",

"🚀 Achievement Unlocked: Raised Rudra Successfully",

"🔥 Achievement Unlocked: Infinite Patience",

"🛠 Achievement Unlocked: Can Fix Anything"
];

function showAchievement(){

    const a=document.createElement("div");

    a.innerText=
        achievements[
            Math.floor(Math.random()*achievements.length)
        ];

    a.style.position="fixed";
    a.style.right="20px";
    a.style.bottom="20px";
    a.style.padding="15px";
    a.style.background="#22c55e";
    a.style.color="white";
    a.style.borderRadius="10px";
    a.style.zIndex="9999";

    document.body.appendChild(a);

    a.animate(
    [
        {transform:"translateX(300px)"},
        {transform:"translateX(0px)"}
    ],
    {duration:500}
    );

    setTimeout(()=>{
        a.remove();
    },4000);
}

setInterval(showAchievement,15000);

// =========================
// CLICK ANYWHERE EXPLOSION
// =========================

document.addEventListener("click",(e)=>{

    for(let i=0;i<15;i++){

        const boom=document.createElement("div");

        boom.innerHTML=
            flyingStuff[
                Math.floor(Math.random()*flyingStuff.length)
            ];

        boom.style.position="fixed";
        boom.style.left=e.clientX+"px";
        boom.style.top=e.clientY+"px";
        boom.style.fontSize="20px";

        document.body.appendChild(boom);

        boom.animate(
        [
            {
                transform:"translate(0,0)",
                opacity:1
            },
            {
                transform:
                `translate(
                ${(Math.random()*300)-150}px,
                ${(Math.random()*300)-150}px
                )`,
                opacity:0
            }
        ],
        {
            duration:1000
        });

        setTimeout(()=>boom.remove(),1000);
    }
});

// =========================
// DOUBLE CLICK SECRET
// =========================

document.addEventListener("dblclick",()=>{

    const overlay=document.createElement("div");

    overlay.style.position="fixed";
    overlay.style.inset="0";
    overlay.style.background="rgba(0,0,0,0.9)";
    overlay.style.color="white";
    overlay.style.display="flex";
    overlay.style.alignItems="center";
    overlay.style.justifyContent="center";
    overlay.style.fontSize="40px";
    overlay.style.zIndex="99999";

    overlay.innerHTML=
    `
    👑 LEGENDARY DAD MODE ACTIVATED 👑
    `;

    document.body.appendChild(overlay);

    setTimeout(()=>{
        overlay.remove();
    },2500);

});

// =========================
// SECRET KEYBOARD EASTER EGG
// =========================

let code="";

document.addEventListener("keydown",(e)=>{

    code+=e.key.toLowerCase();

    if(code.length>20){
        code=code.slice(-20);
    }

    if(code.includes("dad")){

        code="";

        for(let i=0;i<200;i++){

            setTimeout(()=>{

                const heart=document.createElement("div");

                heart.innerHTML="❤️";

                heart.style.position="fixed";

                heart.style.left=
                Math.random()*window.innerWidth+"px";

                heart.style.top="-50px";

                heart.style.fontSize=
                (20+Math.random()*30)+"px";

                document.body.appendChild(heart);

                heart.animate(
                [
                    {transform:"translateY(0)"},
                    {transform:`translateY(${window.innerHeight+200}px)`}
                ],
                {
                    duration:5000
                });

                setTimeout(()=>{
                    heart.remove();
                },5000);

            },i*15);

        }

        alert(
        "❤️ SECRET DAD MODE ACTIVATED ❤️"
        );
    }
});

// =========================
// RANDOM JOKES
// =========================

const jokes = [

"Dad Fact: Can hear a light left on from 3 rooms away.",

"Dad Fact: Knows stock prices better than birthdays.",

"Dad Fact: Can negotiate prices down using pure willpower.",

"Dad Fact: Has unlocked Infinite Advice Mode.",

"Dad Fact: Can fix things by staring at them."
];

setInterval(()=>{

    const j=document.createElement("div");

    j.innerText=
        jokes[Math.floor(Math.random()*jokes.length)];

    j.style.position="fixed";
    j.style.left="20px";
    j.style.bottom="20px";
    j.style.padding="12px";
    j.style.background="#3b82f6";
    j.style.borderRadius="10px";
    j.style.zIndex="9999";

    document.body.appendChild(j);

    setTimeout(()=>{
        j.remove();
    },5000);

},25000);
