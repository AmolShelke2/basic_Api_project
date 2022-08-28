const apiUrl = "https://api.quotable.io/random";

async function getQuote() {
  const res = await fetch(apiUrl);
  const data = await res.json();
  console.log(data);
}

getQuote();
