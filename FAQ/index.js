
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
    const question = faq.querySelector(".question");
    const icon = faq.querySelector("span");

    question.addEventListener("click", () => {
        faq.classList.toggle("active");

        if (faq.classList.contains("active")) {
            icon.textContent = "−";
        } else {
            icon.textContent = "+";
        }
    });
});
