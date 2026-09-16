/* =========================================
            FALLING FLOWERS
========================================= */

const petalContainer =
    document.getElementById("petals");

const flowers = [
    "✿",
    "❀",
    "✾",
    "♡"
];


function createPetal() {

    if (!petalContainer) return;

    const petal =
        document.createElement("span");

    petal.classList.add("petal");

    petal.innerText =
        flowers[
            Math.floor(
                Math.random() * flowers.length
            )
        ];


    const size =
        Math.random() * 10 + 10;

    const left =
        Math.random() * 100;

    const duration =
        Math.random() * 6 + 7;

    const delay =
        Math.random() * 2;


    petal.style.left =
        left + "%";

    petal.style.fontSize =
        size + "px";

    petal.style.animationDuration =
        duration + "s";

    petal.style.animationDelay =
        delay + "s";


    petalContainer.appendChild(
        petal
    );


    setTimeout(() => {

        petal.remove();

    }, (duration + delay) * 1000);

}


/* Buat bunga secara berkala */

setInterval(
    createPetal,
    900
);


/* Bunga awal */

for (
    let i = 0;
    i < 8;
    i++
) {

    setTimeout(
        createPetal,
        i * 400
    );

}