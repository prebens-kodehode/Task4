const buttons = document.querySelectorAll(".property-button");
const flexboxEl = document.getElementById("flexbox-el");

buttons.forEach((button) => {
  button.addEventListener("click", buttonClick);
});

function buttonClick(event) {
  // stores the css property from the clicked button
  const clickedProperty = event.target.dataset.property;

  buttons.forEach((button) => {
    // checks if the property of the button matches the property of the clicked button
    if (button.dataset.property === clickedProperty) {
      // removes the ".active" class from matching buttons
      button.classList.remove("active");
    }
  });

  // adds ".active" class to clicked button
  event.target.classList.add("active");

  // stores the css property and its value from html dataset of the clicked button
  const property = event.target.dataset.property;
  const value = event.target.dataset.value;

  // changes the value of the corresponding css property
  flexboxEl.style[property] = value;
}
