/* =========================================
   FALLING FLOWERS
========================================= */

const petalContainer =
    document.getElementById("petals");


const flowers = [
    "✿",
    "❀",
    "✧",
    "♡",
    "❁"
];


function createPetal() {

    const petal =
        document.createElement("span");

    petal.classList.add("petal");


    petal.innerText =
        flowers[
            Math.floor(
                Math.random() * flowers.length
            )
        ];


    petal.style.left =
        Math.random() * 100 + "%";


    const size =
        Math.random() * 10 + 10;

    petal.style.fontSize =
        size + "px";


    const duration =
        Math.random() * 7 + 7;

    petal.style.animationDuration =
        duration + "s";


    petal.style.animationDelay =
        Math.random() * 2 + "s";


    petalContainer.appendChild(petal);


    setTimeout(() => {

        petal.remove();

    }, (duration + 3) * 1000);

}



/* Membuat bunga secara berkala */

setInterval(
    createPetal,
    850
);


/* Bunga awal */

for (let i = 0; i < 8; i++) {

    setTimeout(
        createPetal,
        i * 350
    );

}



/* =========================================
   CARD ANIMATION
========================================= */

const cards =
    document.querySelectorAll(
        ".skill-card, .hard-card"
    );


const observer =
    new IntersectionObserver(

        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "show"
                        );

                    }

                }
            );

        },

        {
            threshold: 0.15
        }

    );


cards.forEach(
    (card) => {

        observer.observe(card);

    }
);