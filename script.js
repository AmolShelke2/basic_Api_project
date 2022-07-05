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

const dogImg = document.querySelector(".dog-img");
const getDogbtn = document.querySelector(".get-dog");

const dogAPiUrl = "https://dog.ceo/api/breeds/image/random";

getDogbtn.addEventListener("click", async function () {
  const res = await fetch(dogAPiUrl);
  const data = await res.json();
  dogImg.src = data.message;
});

// refactoring code
