const listItems = document.getElementsByClassName("list-item");

for (let i = 0; i < listItems.length; i++) {
  listItems[i].addEventListener("mouseover", (e) => {
    e.target.classList.toggle("active");
  });
}
