document.addEventListener("DOMContentLoaded", () => {


    /* =================================================
                     FALLING FLOWERS
    ================================================== */

    const petalContainer =
        document.getElementById("petals");


    if (petalContainer) {

        const flowers = [
            "✿",
            "❀",
            "✦",
            "♡"
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
                Math.random() * 10 + 9;

            petal.style.fontSize =
                size + "px";


            const duration =
                Math.random() * 7 + 7;

            petal.style.animationDuration =
                duration + "s";


            petal.style.opacity =
                Math.random() * 0.45 + 0.25;


            petalContainer.appendChild(
                petal
            );


            setTimeout(() => {

                petal.remove();

            }, (duration + 1) * 1000);

        }


        for (let i = 0; i < 10; i++) {

            setTimeout(
                createPetal,
                i * 500
            );

        }


        setInterval(
            createPetal,
            1200
        );

    }



    /* =================================================
                    OPEN GALLERY
    ================================================== */

    const galleryButtons =
        document.querySelectorAll(
            "[data-gallery]"
        );


    galleryButtons.forEach((button) => {

        button.addEventListener(
            "click",
            () => {

                const galleryId =
                    button.getAttribute(
                        "data-gallery"
                    );


                const gallery =
                    document.getElementById(
                        galleryId
                    );


                if (!gallery) return;


                gallery.classList.add(
                    "active"
                );


                document.body.style.overflow =
                    "hidden";

            }
        );

    });



    /* =================================================
                    CLOSE GALLERY
    ================================================== */

    const galleries =
        document.querySelectorAll(
            ".gallery-modal"
        );


    galleries.forEach((gallery) => {

        const closeButton =
            gallery.querySelector(
                ".gallery-close"
            );


        const backdrop =
            gallery.querySelector(
                ".gallery-backdrop"
            );


        function closeGallery() {

            gallery.classList.remove(
                "active"
            );


            document.body.style.overflow =
                "";

        }


        closeButton.addEventListener(
            "click",
            closeGallery
        );


        backdrop.addEventListener(
            "click",
            closeGallery
        );

    });



    /* =================================================
                    ESC TO CLOSE
    ================================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape"
            ) {

                galleries.forEach(
                    (gallery) => {

                        gallery.classList.remove(
                            "active"
                        );

                    }
                );


                document.body.style.overflow =
                    "";

            }

        }
    );



    /* =================================================
                     SCROLL REVEAL
    ================================================== */

    const revealElements =
        document.querySelectorAll(
            ".education-item, .learning-note"
        );


    revealElements.forEach(
        (element) => {

            element.style.opacity = "0";

            element.style.transform +=
                " translateY(30px)";

            element.style.transition =
                "opacity 0.8s ease, transform 0.8s ease";

        }
    );


    const revealObserver =
        new IntersectionObserver(
            (entries, observer) => {

                entries.forEach(
                    (entry) => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target.style.opacity =
                                "1";

                            entry.target.style.transform =
                                entry.target.style.transform.replace(
                                    " translateY(30px)",
                                    ""
                                );


                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: 0.15
            }
        );


    revealElements.forEach(
        (element) => {

            revealObserver.observe(
                element
            );

        }
    );


    console.log(
        "♡ Welcome to Mutiara's Education Journey ♡"
    );

});