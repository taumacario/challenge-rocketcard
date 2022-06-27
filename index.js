const url ="https://api.github.com"

function getUsers (){
  fetch(url)
  .then(response => response.json())
  .then(data => card.textContent = JSON.stringify(data))
  .catch(error => console.error(error))
}

function getUser (){
  fetch(`${url}/users/taumacario`)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.login
    userAvatar.src = data.avatar_url
    userFollowers.textContent = data.followers
    userFollowing.textContent = data.following
    userRepositorios.textContent = data.public_repos
    userCompany.textContent = data.company
    userLocation.textContent = data.location
  })
  .catch(error => console.error(error))
}


getUser()



const colors = ['red', 'green', 'blue', 'purple', 'pink', 'white', 'gray', 'yellow', 'orange', 'lightgreen'];

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function changeColor() {
  let randomNumber = getRandomNumber();
  const colorCard = document.querySelector('#card');
  colorCard.style.backgroundColor = colors[randomNumber];
}