const items = document.querySelectorAll(".faq-item");

items.forEach((item) => {
  const question = item.querySelector(".faq-question");

  question.addEventListener("click", () => {
    const active = document.querySelector(".faq-item.active");

    if (active && active !== item) {
      active.classList.remove("active");
    }

    item.classList.toggle("active");
  });
});
