const buttons = document.querySelectorAll(".property-button");
const flexboxEl = document.getElementById("flexbox-el");

buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});

function buttonClick(event) {
  const clickedProperty = event.target.dataset.property;

  buttons.forEach((button) => {
    if (button.dataset.property === clickedProperty) {
      button.classList.remove("active");
    }
  });

  event.target.classList.add("active");

  const property = event.target.dataset.property;
  const value = event.target.dataset.value;

  flexboxEl.style[property] = value;
}
