/**
 * Change the selected item on click
 * 
 */
const items = document.getElementsByClassName('item');


function setSelectedItem(event) {
  let { target } = event;
  if (target.matches('p')) {
    target = target.parentNode;
  } else if (target.matches('span')) {
    target = target.parentNode.parentNode;
  }

  let currentSelectedItem = document.querySelector(".item--selected");
  currentSelectedItem.classList.toggle("item--selected");
  target.classList.toggle('item--selected');
}

for (let i = 0; i < items.length; i += 1) {
  items[i].addEventListener('click', setSelectedItem);
}
