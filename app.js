// window.addEventListener("load", () => {
//     window.scrollTo(0, 0);
// });



const animatedItems = document.querySelectorAll(".animate");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    },
    {
        threshold: 0.25,
    }
);

animatedItems.forEach((item) => observer.observe(item));

