const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(userName) {
  try {
    const { data } = await axios(APIURL + userName);
    createUserCard(data);
  } catch (err) {
    if (err.response.status === 404) {
      createErrorCard("No user find with the username");
    }
  }
}

function createUserCard(user) {
  const cardHtml = `
        <div class='card'>
         <div>
            <img src="${user.avatar_url}" alt="${user.name}" class="avatar"/>
         </div>
         <div class='user-info'>
            <h2>${user.name}</h2>
            <p>${user.bio}</p>

            <ul>
                <li>${user.followers}<strong>Followers</strong></li>
                <li>${user.following}<strong>Following</strong></li>
                <li>${user.public_repos}<strong>Repos</strong></li>
            </ul>
         </div>
        </div>
    `;

  main.innerHTML = cardHtml;
}

function createErrorCard(msg) {
  const cardHTML = `
        <div class='card'>
            <h1>${msg}</h1>
        </div>
    `;

  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);

    search.value = "";
  }
});
