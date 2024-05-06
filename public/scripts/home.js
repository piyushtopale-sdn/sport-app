// get video el
const video = document.getElementById("introAnim");
const btnSkipOpening = document.querySelector("[data-action='skipOpening']");

// pause video by default
// video.pause();

// hide loading animation
const hideLoadingAnimation = () => {
    const loadingAnimSVG = document.getElementById("L3");
    const leadin = document.getElementById("leadin");
    loadingAnimSVG && loadingAnimSVG.remove();
    leadin && leadin.classList.add("stop-anim");
};

// reveal landing page after video ends (or when skip button is clicked)

const revealLandingPage = () => {
    const body = document.querySelector("body");
    const hero = document.querySelector(".hero");
    const heroContent = hero.querySelector(".content");
    const scrollMarkers = document.querySelector(".scroll-markers");

    btnSkipOpening.remove();
    hero.classList.add("loaded", "fade-out");
    heroContent.classList.add("fade-in");
    body.classList.add("animation-complete");
    scrollMarkers.classList.remove("scroll-markers--hidden");
};

/**
 * Skip Opening Animation
 */

btnSkipOpening.addEventListener("click", () => {
    video.pause();
    clearTimeout();
    hideLoadingAnimation();
    revealLandingPage();
    btnSkipOpening.remove();
});

/**
 * Regular Animation
 */

video.onloadeddata = function () {
    /* 
        When video is loaded, hide loading animation and play video after a delay of 3 seconds 
       This will ensure that users see the initial text 
    */
    setTimeout(() => {
        const loadingAnimSVG = document.getElementById("L3");
        const leadin = document.getElementById("leadin");
        const hero = document.querySelector(".hero");

        loadingAnimSVG && loadingAnimSVG.remove();
        hero.classList.add("loaded");
        leadin.classList.add("begin-anim");

        video.play();
    }, 3000);

    /* Show content after video ends */
    video.addEventListener("ended", revealLandingPage);
};

/**
 * Scroll markers
 */
const scrollMarkersList = document.querySelector(".scroll-markers__list");
window.onload = () => {
    const navElements = [...scrollMarkersList.querySelectorAll("li")];
    const sections = navElements.map((navElement) =>
        document.getElementById(navElement.dataset.id)
    );

    const observer = new IntersectionObserver(
        (entries) => {
            for (const entry of entries) {
                if (entry.isIntersecting) {
                    const navEl = document.querySelector(`[data-id="${entry.target.id}"]`);
                    const selectedItemIndex = navElements.indexOf(navEl);
                    for (let i = 0; i < navElements.length; i++) {
                        navElements[i].classList[i !== selectedItemIndex ? "remove" : "add"](
                            "selected"
                        );
                    }
                }
            }
        },
        {
            rootMargin: "0px",
            threshold: [0.5, 1],
        }
    );

    for (let i = 0; i < sections.length; i++) {
        observer.observe(sections[i]);
    }
};
