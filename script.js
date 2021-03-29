const contents = document.querySelectorAll(".content");
const navItems = document.querySelectorAll("li");

// iterate through navItems
navItems.forEach((item, idx) => {
  // listen for click on each item
  item.addEventListener("click", () => {
    // remove active and show classes from all
    hideAllContents();
    hideAllItems();
    // add active class to clicked item
    item.classList.add("active");
    // add show class to img with same index as nav item
    contents[idx].classList.add("show");
  });
});
// remove show class from all images
function hideAllContents() {
  contents.forEach(content => {
    content.classList.remove("show");
  });
}
// remove active class from all nav items
function hideAllItems() {
  navItems.forEach(item => {
    item.classList.remove("active");
  });
}
