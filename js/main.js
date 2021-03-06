//parallax
const parallax = document.getElementById("parallax");

window.addEventListener("scroll", function () {
  let offset = window.pageYOffset;

  parallax.style.backgroundPositionY = offset * 0.4 + "px";
  console.log(offset);
});

// for image slider

let i = 0;
let images = ["../images/mainpage.jpg", "../images/mainpage2.jpg"];

const time = 6000;

function changePic() {
  document.slide1.src = images[i];

  i < images.length - 1 ? i++ : (i = 0);
  setTimeout("changePic()", time);
}
window.onload = changePic;

function prev() {
  document.slide1.src = images[i];
  i <= 0 ? (i = images.length - 1) : i--;
}

function next() {
  document.slide1.src = images[i];
  i < images.length - 1 ? i++ : (i = 0);
}

//move to top function
function scroll_Top() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

//slide products
function prev_product() {
  console.log("prev clicked");
}

function next_product() {
  console.log("next clicked");
}
