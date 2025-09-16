document.addEventListener("DOMContentLoaded", () => {
  const storyImage = document.querySelector(".story-image");
  const tooltip = document.querySelector(".tooltip");
  const reaction = document.querySelector(".reaction");

  const images = ["1.png", "2.png", "3.png"];
  const bgColors = ["#f2f2f2", "#ffe6cc", "#e6f7ff"];

  let index = 0;

  storyImage.addEventListener("click", () => {
    index = (index + 1) % images.length;
    storyImage.src = images[index];
    document.body.style.backgroundColor = bgColors[index];

    storyImage.classList.remove("enlarge");
    tooltip.classList.add("hidden");
    tooltip.classList.remove("show-tooltip");
    reaction.classList.add("hidden");
    reaction.classList.remove("show-reaction");

    if (index === 0) {
      storyImage.classList.add("enlarge");
    } else if (index === 1) {
      tooltip.classList.remove("hidden");
      tooltip.classList.add("show-tooltip");
    } else if (index === 2) {
      reaction.classList.remove("hidden");
      reaction.classList.add("show-reaction");
    }
  });
});
