const icons = document.querySelectorAll(".section-1-icons i"); // returns an arry of elements

let i = 1;

setInterval(() => {
  // for the slide show:
  // we have to select the first icon, which has class "change" on it
  // then remove this class and set it at the next icon

  i++;
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");

  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);
