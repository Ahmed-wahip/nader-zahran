// document.addEventListener("DOMContentLoaded", () => {

//     // PRELOADER
//     const preloader = document.querySelector(".preloader");

//     if (preloader) {
//         setTimeout(() => {
//             preloader.classList.add("loaded");
//         }, 1200);

//         setTimeout(() => {
//             preloader.style.display = "none";
//         }, 4000);
//     }

//     // MOBILE MENU
//     const menuToggle = document.querySelector(".menu-toggle");
//     const nav = document.querySelector(".nav");

//     if (menuToggle && nav) {
//         menuToggle.addEventListener("click", () => {
//             nav.classList.toggle("active");
//             menuToggle.classList.toggle("active");
//         });

//         nav.querySelectorAll("a").forEach(link => {
//             link.addEventListener("click", () => {
//                 nav.classList.remove("active");
//                 menuToggle.classList.remove("active");
//             });
//         });

//         document.addEventListener("click", event => {
//             if (
//                 !nav.contains(event.target) &&
//                 !menuToggle.contains(event.target)
//             ) {
//                 nav.classList.remove("active");
//                 menuToggle.classList.remove("active");
//             }
//         });
//     }

//     // STICKY HEADER
//     const header = document.querySelector(".header");

//     window.addEventListener("scroll", () => {
//         if (header) {
//             header.classList.toggle("scrolled", window.scrollY > 50);
//         }
//     });

//     // REVEAL ANIMATIONS
//     const revealElements = document.querySelectorAll(".reveal");

//     const observer = new IntersectionObserver(entries => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("visible");
//                 observer.unobserve(entry.target);
//             }
//         });
//     }, {
//         threshold: 0.15
//     });

//     revealElements.forEach(element => observer.observe(element));

//     // ACTIVE NAVIGATION
//     const sections = document.querySelectorAll("section[id]");
//     const navLinks = document.querySelectorAll(".nav a");

//     window.addEventListener("scroll", () => {
//         let currentSection = "";

//         sections.forEach(section => {
//             if (window.scrollY >= section.offsetTop - 150) {
//                 currentSection = section.id;
//             }
//         });

//         navLinks.forEach(link => {
//             link.classList.toggle(
//                 "active",
//                 link.getAttribute("href") === `#${currentSection}`
//             );
//         });
//     });

//     // CURRENT YEAR
//     const yearElement = document.querySelector("#current-year");

//     if (yearElement) {
//         yearElement.textContent = new Date().getFullYear();
//     }

//     // HERO ONE-TIME SCROLL TRANSITION
//     const hero = document.querySelector("#home");
//     const about = document.querySelector("#about");

//     let heroScrollDone = false;

//     if (hero && about) {
//         window.addEventListener("wheel", event => {

//             if (
//                 heroScrollDone ||
//                 window.innerWidth <= 768 ||
//                 event.deltaY <= 0 ||
//                 window.scrollY > 80
//             ) {
//                 return;
//             }

//             event.preventDefault();

//             heroScrollDone = true;

//             about.scrollIntoView({
//                 behavior: "smooth",
//                 block: "start"
//             });

//         }, { passive: false });
//     }

// });

document.addEventListener("DOMContentLoaded", () => {

    // PRELOADER
    const preloader = document.querySelector(".preloader");

    if (preloader) {
        setTimeout(() => {
            preloader.classList.add("loaded");
        }, 1200);

        setTimeout(() => {
            preloader.style.display = "none";
        }, 4000);
    }

    // MOBILE MENU
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", () => {
            nav.classList.toggle("active");
            menuToggle.classList.toggle("active");
        });

        nav.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("active");
                menuToggle.classList.remove("active");
            });
        });

        document.addEventListener("click", event => {
            if (
                !nav.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {
                nav.classList.remove("active");
                menuToggle.classList.remove("active");
            }
        });
    }

    // STICKY HEADER
    const header = document.querySelector(".header");

    window.addEventListener("scroll", () => {
        if (header) {
            header.classList.toggle("scrolled", window.scrollY > 50);
        }
    });

    // REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealElements.forEach(element => observer.observe(element));

    // ACTIVE NAVIGATION
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav a");

    window.addEventListener("scroll", () => {
        let currentSection = "";

        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 150) {
                currentSection = section.id;
            }
        });

        navLinks.forEach(link => {
            link.classList.toggle(
                "active",
                link.getAttribute("href") === `#${currentSection}`
            );
        });
    });

    // CURRENT YEAR
    const yearElement = document.querySelector("#current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // HERO FIRST SCROLL ANIMATION
    const heroSection = document.querySelector("#home");
    const nextSection = document.querySelector("#about");

    let heroScrollTriggered = false;

    if (heroSection && nextSection) {

        window.addEventListener("wheel", function (event) {

            if (
                heroScrollTriggered ||
                window.innerWidth <= 768 ||
                event.deltaY <= 0 ||
                window.scrollY > 80
            ) {
                return;
            }

            event.preventDefault();

            heroScrollTriggered = true;

            nextSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, { passive: false });

    }

});

