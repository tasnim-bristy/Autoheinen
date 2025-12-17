var faqs = document.querySelectorAll(".faq-singular");

faqs.forEach(function (faq) {
  var question = faq.querySelector(".faq-question");

  question.addEventListener("click", function () {
    faq.classList.toggle("active");
  });
});

// products dropdown
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    const toggle = dropdown.querySelector(".dropdown-toggle");
    const menu = dropdown.querySelector(".dropdown-menu");

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      menu.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (!e.target.closest(".dropdown")) {
        menu.classList.remove("show");
      }
    });

     window.addEventListener("scroll", function(){
      menu.classList.remove("show");
    });
  });
});
