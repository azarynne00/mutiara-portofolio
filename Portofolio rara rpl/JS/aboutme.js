/* =========================================================
   MUTIARA'S JOURNEY
   ABOUT ME — SCRAPBOOK JAVASCRIPT
   ========================================================= */


document.addEventListener("DOMContentLoaded", () => {


    /* =====================================================
       FALLING FLOWERS
       ===================================================== */

    const petalContainer =
        document.getElementById("petals");


    if (petalContainer) {

        const flowers = [
            "✿",
            "❀",
            "✦",
            "♡",
            "·"
        ];


        function createPetal() {

            const petal =
                document.createElement("span");

            petal.classList.add("petal");


            petal.textContent =
                flowers[
                    Math.floor(
                        Math.random() *
                        flowers.length
                    )
                ];


            petal.style.left =
                Math.random() * 100 + "vw";


            const size =
                Math.random() * 13 + 8;

            petal.style.fontSize =
                size + "px";


            const duration =
                Math.random() * 7 + 7;

            petal.style.animationDuration =
                duration + "s";


            petal.style.animationDelay =
                Math.random() * 4 + "s";


            petal.style.opacity =
                Math.random() * 0.35 + 0.15;


            petalContainer.appendChild(
                petal
            );


            setTimeout(() => {

                petal.remove();

            }, (duration + 5) * 1000);

        }


        for (
            let i = 0;
            i < 12;
            i++
        ) {

            setTimeout(
                createPetal,
                i * 450
            );

        }


        setInterval(
            createPetal,
            1100
        );

    }



    /* =====================================================
       SCROLL REVEAL
       ===================================================== */

    const loveItems =
        document.querySelectorAll(
            ".love-item"
        );


    if (
        "IntersectionObserver"
        in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                (entries, observer) => {

                    entries.forEach(
                        (entry) => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "visible"
                                );

                                observer.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        loveItems.forEach(
            (item) => {

                revealObserver.observe(
                    item
                );

            }
        );

    } else {

        loveItems.forEach(
            item => {
                item.classList.add(
                    "visible"
                );
            }
        );

    }



    /* =====================================================
       FILM CAROUSEL
       ===================================================== */

    const filmTrack =
        document.getElementById(
            "filmTrack"
        );

    const filmNext =
        document.getElementById(
            "filmNext"
        );

    const filmPrev =
        document.getElementById(
            "filmPrev"
        );

    const filmCounter =
        document.getElementById(
            "filmCounter"
        );


    let filmIndex = 0;


    function updateFilm() {

        if (!filmTrack) {
            return;
        }


        const posters =
            filmTrack.querySelectorAll(
                ".film-poster"
            );


        if (!posters.length) {
            return;
        }


        let visibleItems = 4;


        if (
            window.innerWidth <= 900
        ) {

            visibleItems = 3;

        }


        if (
            window.innerWidth <= 600
        ) {

            visibleItems = 2;

        }


        const maxIndex =
            Math.max(
                0,
                posters.length -
                visibleItems
            );


        if (
            filmIndex > maxIndex
        ) {

            filmIndex = maxIndex;

        }


        if (
            filmIndex < 0
        ) {

            filmIndex = 0;

        }


        const posterWidth =
            posters[0]
                .getBoundingClientRect()
                .width;


        const gap = 18;


        filmTrack.style.transform =
            `translateX(-${
                filmIndex *
                (posterWidth + gap)
            }px)`;


        if (filmCounter) {

            filmCounter.textContent =
                `${String(filmIndex + 1).padStart(2, "0")} / 05`;

        }

    }


    if (filmNext) {

        filmNext.addEventListener(
            "click",
            () => {

                filmIndex++;

                updateFilm();

            }
        );

    }


    if (filmPrev) {

        filmPrev.addEventListener(
            "click",
            () => {

                filmIndex--;

                updateFilm();

            }
        );

    }


    window.addEventListener(
        "resize",
        updateFilm
    );


    updateFilm();



    /* =====================================================
       POLAROID
       ===================================================== */

    const polaroids =
        document.querySelectorAll(
            ".polaroid"
        );


    polaroids.forEach(
        (polaroid) => {

            polaroid.addEventListener(
                "click",
                () => {

                    polaroids.forEach(
                        item => {
                            item.style.zIndex = "1";
                        }
                    );


                    polaroid.style.zIndex =
                        "20";

                }
            );

        }
    );



    /* =====================================================
       FUN FACT
       ===================================================== */

    const funFacts = [

        {
            icon: "🎧",
            text: "Punya playlist sesuai mood."
        },

        {
            icon: "🌅",
            text: "Suka bangun pagi tapi tidur larut."
        },

        {
            icon: "🌿",
            text: "Menyendiri untuk recharge energi."
        },

        {
            icon: "🧂",
            text: "Nggak suka asin."
        },

        {
            icon: "🥹",
            text: "Cengeng."
        }

    ];


    let factIndex = 0;


    const factText =
        document.getElementById(
            "funfactText"
        );

    const factIcon =
        document.getElementById(
            "funfactIcon"
        );

    const factNumber =
        document.getElementById(
            "factNumber"
        );

    const nextFact =
        document.getElementById(
            "nextFact"
        );

    const prevFact =
        document.getElementById(
            "prevFact"
        );


    function showFact(
        direction = "next"
    ) {

        if (
            !factText ||
            !factIcon ||
            !factNumber
        ) {
            return;
        }


        factText.style.opacity = "0";

        factIcon.style.opacity = "0";


        setTimeout(() => {

            factIcon.textContent =
                funFacts[
                    factIndex
                ].icon;


            factText.textContent =
                funFacts[
                    factIndex
                ].text;


            factNumber.textContent =
                `${String(
                    factIndex + 1
                ).padStart(2, "0")} / 05`;


            factText.style.opacity =
                "1";

            factIcon.style.opacity =
                "1";


        }, 180);

    }


    if (nextFact) {

        nextFact.addEventListener(
            "click",
            () => {

                factIndex++;

                if (
                    factIndex >=
                    funFacts.length
                ) {

                    factIndex = 0;

                }

                showFact("next");

            }
        );

    }


    if (prevFact) {

        prevFact.addEventListener(
            "click",
            () => {

                factIndex--;

                if (
                    factIndex < 0
                ) {

                    factIndex =
                        funFacts.length - 1;

                }

                showFact("prev");

            }
        );

    }



    /* =====================================================
       FUN FACT TRANSITION
       ===================================================== */

    if (factText) {

        factText.style.transition =
            "opacity 0.18s ease";

    }

    if (factIcon) {

        factIcon.style.transition =
            "opacity 0.18s ease";

    }



    /* =====================================================
       MUSIC CARD
       ===================================================== */

    const musicItem =
        document.querySelector(
            ".music-item"
        );

    const equalizer =
        document.querySelectorAll(
            ".equalizer i"
        );


    if (musicItem) {

        musicItem.addEventListener(
            "mouseenter",
            () => {

                equalizer.forEach(
                    bar => {

                        bar.style.animationDuration =
                            "0.5s";

                    }
                );

            }
        );


        musicItem.addEventListener(
            "mouseleave",
            () => {

                equalizer.forEach(
                    bar => {

                        bar.style.animationDuration =
                            "0.9s";

                    }
                );

            }
        );

    }



    /* =====================================================
       BUTTON PRESS EFFECT
       ===================================================== */

    const buttons =
        document.querySelectorAll(
            "button"
        );


    buttons.forEach(
        button => {

            button.addEventListener(
                "mousedown",
                () => {

                    button.style.transform =
                        "scale(0.92)";

                }
            );


            button.addEventListener(
                "mouseup",
                () => {

                    button.style.transform =
                        "";

                }
            );


            button.addEventListener(
                "mouseleave",
                () => {

                    button.style.transform =
                        "";

                }
            );

        }
    );



    /* =====================================================
       CONSOLE
       ===================================================== */

    console.log(
        "♡ Welcome to Mutiara's scrapbook ♡"
    );

});