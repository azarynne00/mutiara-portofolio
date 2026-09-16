document.addEventListener("DOMContentLoaded", function () {

    /* =========================================
       SCROLL REVEAL
       ========================================= */

    const revealElements =
        document.querySelectorAll(".reveal");


    if (revealElements.length > 0) {

        const observer =
            new IntersectionObserver(
                function (entries) {

                    entries.forEach(function (entry) {

                        if (entry.isIntersecting) {

                            entry.target.classList.add("show");

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.1
                }
            );


        revealElements.forEach(function (element) {

            observer.observe(element);

        });

    }



    /* =========================================
       BACK TO TOP
       ========================================= */

    const backToTop =
        document.getElementById("backToTop");


    if (backToTop) {

        window.addEventListener(
            "scroll",
            function () {

                if (window.scrollY > 400) {

                    backToTop.classList.add("show");

                } else {

                    backToTop.classList.remove("show");

                }

            }
        );


        backToTop.addEventListener(
            "click",
            function () {

                window.scrollTo({

                    top: 0,

                    behavior: "smooth"

                });

            }
        );

    }



    /* =========================================
       PORTFOLIO FILTER
       ========================================= */

    const filterButtons =
        document.querySelectorAll(".filter-btn");

    const portfolioItems =
        document.querySelectorAll(".portfolio-item");


    if (
        filterButtons.length > 0 &&
        portfolioItems.length > 0
    ) {

        filterButtons.forEach(function (button) {

            button.addEventListener(
                "click",
                function () {


                    /* ACTIVE BUTTON */

                    filterButtons.forEach(
                        function (btn) {

                            btn.classList.remove(
                                "active"
                            );

                        }
                    );


                    button.classList.add(
                        "active"
                    );


                    /* GET FILTER */

                    const filter =
                        button.dataset.filter;


                    /* FILTER ITEMS */

                    portfolioItems.forEach(
                        function (item) {

                            const category =
                                item.dataset.category;


                            if (
                                filter === "all" ||
                                category === filter
                            ) {

                                item.style.display =
                                    "";

                            } else {

                                item.style.display =
                                    "none";

                            }

                        }
                    );

                }
            );

        });

    }



});