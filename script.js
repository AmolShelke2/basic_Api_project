// Getting cat

const catImg = document.querySelector(".cat-img");
const getCatbtn = document.querySelector(".get-cat");

const catAPiURl = "https://api.thecatapi.com/v1/images/search";

const getCatImg = async function () {
  const res = await fetch(catAPiURl);
  const data = await res.json();
  catImg.src = data[0].url;
};

getCatbtn.addEventListener("click", function () {
  getCatImg();
});

// fetching Dog

const dogImg = document.querySelector(".dog-img");
const getDogbtn = document.querySelector(".get-dog");

const dogAPiUrl = "https://dog.ceo/api/breeds/image/random";

const getDogImg = async function () {
  const res = await fetch(dogAPiUrl);
  const data = await res.json();
  dogImg.src = data.message;
};

// refactoring code
getDogbtn.addEventListener("click", function () {
  getDogImg();
});
