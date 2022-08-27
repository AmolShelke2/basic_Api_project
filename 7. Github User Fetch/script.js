const APIURL = "https://api.github.com/users/";

const form = document.getElementById("form");
const search = document.getElementById("search");
const main = document.getElementById("main");

async function getUser(userName) {
  try {
    const { data } = await axios(APIURL + userName);
    console.log(data);
    createUserCard(data);
  } catch (err) {
    if (err.response.status === 404) {
      console.log(err);
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

getUser("AmolShelke2");
