const apiUrl = "https://api.quotable.io/random";

const QoutePlaceholder = document.getElementById("quote");
const GetQuateBtn = document.getElementById("btn");
const author = document.querySelector(".author");

GetQuateBtn.addEventListener("click", getQuote);

async function getQuote() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  console.log(data);
  QoutePlaceholder.innerHTML = data.content;
  author.textContent = `"${data.author}`;
}
