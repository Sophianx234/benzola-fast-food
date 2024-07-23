var swiper = new Swiper(".menu-slider", {
  grabCursor: true,
  loop: true,
  autoHeight: true,
  centeredSlides: true,
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let list = Array(26);
console.log(list.length);

for (let i = 1; i <= list.length; i++) {
  document.querySelector(`.txt${i}`)?.addEventListener("click", function () {
    console.log("button clicked ");
    let food = document.querySelector(`.txt-${i}`).textContent;
    console.log(food);
    localStorage.setItem("foodName", food);
    window.open((URL = "./order.html"), "_self");
  });
}
document.querySelector(".insertfood").value = localStorage.getItem("foodName");
