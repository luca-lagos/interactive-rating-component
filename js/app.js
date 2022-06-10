let points_panel = document.querySelector(".interactive-rating-group");
let point_group = document.querySelectorAll(".interactive-rating-point");
let rating_submit = document.getElementById("interactive-rating-submit");
rating_submit.disabled = true;
let interactive_rating = document.getElementById("interactive-rating");
let successfull_rating = document.getElementById("successfull-rating");
successfull_rating.style.display = "none";
let successfull_message = document.querySelector("#successfull-rating span");
let point_content = null;
let back_down = document.getElementById("back-down");

points_panel.addEventListener("click", (e) => {
  rating_submit.disabled = false;
  point_content = e.target.innerHTML;
  console.log(point_content);
  point_selected = e.target;
  for (let i = 0; i < point_group.length; i++) {
    if (point_group[i] != point_selected) {
      point_group[i].classList.remove("active");
      point_group[i].classList.add("desactive");
    }
  }
  point_selected.classList.add("active");
  point_selected.classList.remove("desactive");
});

rating_submit.addEventListener("click", () => {
  if (rating_submit.disabled == false) {
    interactive_rating.style.display = "none";
    successfull_rating.style.display = "flex";
    successfull_message.innerHTML =
      "You selected " + point_content + " out of 5";
  }
});

back_down.addEventListener("click", () => {
  interactive_rating.style.display = "block";
  successfull_rating.style.display = "none";
  rating_submit.disabled = true;
  point_content = null;
  for (let i = 0; i < point_group.length; i++) {
    point_group[i].classList.remove("active");
    point_group[i].classList.add("desactive");
  }
});
