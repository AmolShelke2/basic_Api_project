// Getting cat

const catImg = document.querySelector(".cat-img");
const getCatbtn = document.querySelector(".get-cat");

const catAPiURl = "https://api.thecatapi.com/v1/images/search";

getCatbtn.addEventListener("click", async function () {
  const res = await fetch(catAPiURl);
  const data = await res.json();
  catImg.src = data[0].url;
});

// fetching Dog
