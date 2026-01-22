// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// 1. Hero Reveal (if we want to animate the hero elements)
gsap.from(".brand-name", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.2
});
gsap.from(".tagline", {
    y: 20,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    delay: 0.5
});

// 2. Bento Grid Stagger Reveal
gsap.from(".card", {
    scrollTrigger: {
        trigger: ".container",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.1,
    ease: "power2.out"
});

// 3. Detail Sections Reveal
const sections = document.querySelectorAll(".detail-section");

sections.forEach((section) => {
    // Reveal the section container
    gsap.to(section, {
        scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out"
    });

    // Content internal animations (Title, Text, box)
    const title = section.querySelector(".section-title");
    const text = section.querySelector(".section-text");
    const block = section.querySelector(".placeholder-block");

    gsap.from([title, text, block], {
        scrollTrigger: {
            trigger: section,
            start: "top 70%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2, // Stagger specific elements
        ease: "power2.out"
    });
});

// 4. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            // Use GSAP's smooth window scroll
            // Note: If you want standard behavior, remove this block. 
            // But this ensures it aligns with ScrollTrigger nicely.
            const offsetTop = targetSection.getBoundingClientRect().top + window.scrollY;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});