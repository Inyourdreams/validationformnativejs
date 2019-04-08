const animatedForm = () => {
  const arrows = document.querySelectorAll(".fa-arrow-down");
  arrows.forEach(arrow => {
    arrow.addEventListener("click", () => {
      const input = arrow.previousElementSibling;
      const parrent = arrow.parentElement;
      const nextForm = parrent.nextElementSibling;
      console.log(nextForm);
      console.log(input);
      console.log(parrent);

      if (input.type === "text" && validateUser(input)) {
        nextSlide(parrent, nextForm);
      } else if (input.type === "email" && validateEmail(input)) {
        nextSlide(parrent, nextForm);
      } else if (input.type === "password" && validateUser(input)) {
        nextSlide(parrent, nextForm);
      } else {
        parrent.style.animation = "shake 0.5s ease";
      }

      parrent.addEventListener("animationend", () => {
        parrent.style.animation = "";
      });
    });
  });
};

const validateUser = user => {
  if (user.value.length < 6) {
    error("rgb(189,87,87");
  } else {
    error("rgb(87,189,130)");
    return true;
  }
};

const validateEmail = email => {
  const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (validation.test(email.value)) {
    error("rgb(87,189,130)");
    return true;
  } else {
    error("rgb(189,87,87");
  }
};

const nextSlide = (parrent, nextForm) => {
  parrent.classList.add("innactive");
  parrent.classList.remove("active");
  nextForm.classList.add("active");
};

const error = color => {
  document.body.style.backgroundColor = color;
};

animatedForm();
