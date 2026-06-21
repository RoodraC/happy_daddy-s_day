function openGift() {

```
const gift = document.getElementById("gift");

gift.classList.remove("hidden");

gift.innerHTML = `
    <h2>🏆 World's Best Dad Award</h2>

    <p>Achievement Unlocked:</p>

    <h3>Being The Best Dad In The World To Rudraditya Chatterjee The Great!</h3>

    <h2>+100000 XP</h2>

    <p>Thank you for everything, Dad ❤️</p>
`;

for(let i=0;i<100;i++){

    setTimeout(()=>{

        const conf=document.createElement("div");

        conf.innerHTML=["🎉","🎊","⭐","✨","❤️","🏆"][Math.floor(Math.random()*6)];

        conf.style.position="fixed";
        conf.style.left=Math.random()*window.innerWidth+"px";
        conf.style.top="-50px";
        conf.style.fontSize=(20+Math.random()*40)+"px";
        conf.style.zIndex="999999";

        document.body.appendChild(conf);

        conf.animate(
        [
            {transform:"translateY(0px) rotate(0deg)"},
            {transform:`translateY(${window.innerHeight+200}px) rotate(720deg)`}
        ],
        {
            duration:4000
        });

        setTimeout(()=>conf.remove(),4000);

    },i*20);

}
```

}

function secretButton() {

```
const secret = document.getElementById("secret");

secret.classList.remove("hidden");

secret.innerHTML = `
    <h2>🕵️ Classified Dad Facts</h2>

    <p>✅ Can fix almost anything</p>

    <p>✅ Always has his baby's support</p>

    <p>✅ Stronger than he thinks</p>

    <p>✅ Gives legendary advice</p>

    <p>❤️ Loved much more than he knows</p>
`;
```

}

// FLOATING HEARTS

setInterval(() => {

```
const emoji = document.createElement("div");

emoji.innerHTML =
    ["❤️","⭐","✨","🌟","🎉","🎊","🏆","👑","🚀","🔥","🥳"][Math.floor(Math.random()*11)];

emoji.style.position = "fixed";
emoji.style.left = Math.random() * window.innerWidth + "px";
emoji.style.top = window.innerHeight + "px";
emoji.style.fontSize = (20 + Math.random()*40) + "px";
emoji.style.zIndex = "999999";
emoji.style.pointerEvents = "none";

document.body.appendChild(emoji);

emoji.animate(
    [
        { transform: "translateY(0px) rotate(0deg)" },
        {
            transform:
            `translate(
            ${(Math.random()*300)-150}px,
            -${window.innerHeight+300}px
            )
            rotate(${Math.random()*720}deg)`
        }
    ],
    {
        duration: 5000 + Math.random()*3000
    }
);

setTimeout(() => emoji.remove(), 8000);
```

}, 250);

// MOUSE SPARKLES

document.addEventListener("mousemove", e => {

```
const spark=document.createElement("div");

spark.innerHTML="✨";

spark.style.position="fixed";
spark.style.left=e.clientX+"px";
spark.style.top=e.clientY+"px";
spark.style.zIndex="999999";
spark.style.pointerEvents="none";

document.body.appendChild(spark);

spark.animate(
[
    {opacity:1,transform:"scale(1)"},
    {opacity:0,transform:"scale(3)"}
],
{
    duration:700
});

setTimeout(()=>spark.remove(),700);
```

});

// CLICK EXPLOSIONS

document.addEventListener("click", e => {

```
for(let i=0;i<15;i++){

    const boom=document.createElement("div");

    boom.innerHTML=
    ["❤️","⭐","✨","🎉","🏆","👑"][Math.floor(Math.random()*6)];

    boom.style.position="fixed";
    boom.style.left=e.clientX+"px";
    boom.style.top=e.clientY+"px";
    boom.style.zIndex="999999";

    document.body.appendChild(boom);

    boom.animate(
    [
        {transform:"translate(0,0)",opacity:1},
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
```

});

// DISCO COLOR FLASHES

const colors=[
"#ff0080",
"#00ff80",
"#00d4ff",
"#ffff00",
"#ff6600",
"#9d4edd"
];

setInterval(()=>{

```
const flash=document.createElement("div");

flash.style.position="fixed";
flash.style.inset="0";
flash.style.background=
colors[Math.floor(Math.random()*colors.length)];

flash.style.opacity="0.05";
flash.style.pointerEvents="none";
flash.style.zIndex="99998";

document.body.appendChild(flash);

setTimeout(()=>flash.remove(),120);
```

},600);

// DISCO BALLS

setInterval(()=>{

```
const ball=document.createElement("div");

ball.innerHTML="🪩";

ball.style.position="fixed";
ball.style.left=Math.random()*window.innerWidth+"px";
ball.style.top="-100px";
ball.style.fontSize="50px";
ball.style.zIndex="999999";

document.body.appendChild(ball);

ball.animate(
[
    {transform:"translateY(0px) rotate(0deg)"},
    {transform:`translateY(${window.innerHeight+300}px) rotate(1080deg)`}
],
{
    duration:6000
});

setTimeout(()=>ball.remove(),6000);
```

},1200);

// RANDOM ACHIEVEMENTS

const achievements=[

"🏆 World's Best Dad",

"👑 Legendary Dad",

"❤️ Family Hero",

"🚀 Raised Rudra Successfully",

"🔥 Infinite Patience",

"⭐ Dad Level 999",

"🛠 Can Fix Anything"
];

setInterval(()=>{

```
const box=document.createElement("div");

box.innerText=
achievements[Math.floor(Math.random()*achievements.length)];

box.style.position="fixed";
box.style.right="20px";
box.style.bottom="20px";
box.style.padding="15px";
box.style.background="#22c55e";
box.style.color="white";
box.style.borderRadius="12px";
box.style.zIndex="999999";
box.style.fontWeight="bold";

document.body.appendChild(box);

setTimeout(()=>box.remove(),4000);
```

},15000);

// SECRET DAD MODE

let code="";

document.addEventListener("keydown",e=>{

```
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
            heart.style.left=Math.random()*window.innerWidth+"px";
            heart.style.top="-50px";
            heart.style.fontSize=(20+Math.random()*30)+"px";
            heart.style.zIndex="999999";

            document.body.appendChild(heart);

            heart.animate(
            [
                {transform:"translateY(0px)"},
                {transform:`translateY(${window.innerHeight+300}px)`}
            ],
            {
                duration:5000
            });

            setTimeout(()=>heart.remove(),5000);

        },i*15);

    }

    alert("❤️ SECRET DAD MODE ACTIVATED ❤️");
}
```

});

// DOUBLE CLICK LEGENDARY MODE

document.addEventListener("dblclick",()=>{

```
const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.inset="0";
overlay.style.background="rgba(0,0,0,0.9)";
overlay.style.display="flex";
overlay.style.alignItems="center";
overlay.style.justifyContent="center";
overlay.style.color="white";
overlay.style.fontSize="40px";
overlay.style.fontWeight="bold";
overlay.style.zIndex="9999999";

overlay.innerHTML=
"👑 LEGENDARY DAD MODE ACTIVATED 👑";

document.body.appendChild(overlay);

setTimeout(()=>overlay.remove(),2500);
```

});
