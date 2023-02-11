const btnEl = document.querySelector(".btn");
const animeContainer = document.querySelector(".anime-container");
const imageEl = document.getElementById("image");
const nameEl = document.getElementById("name");

async function fetchAnime() {
  const urlAPI = "https://api.catboys.com/img";

  try {
    btnEl.disabled = true;
    btnEl.innerText = "fetching...";
    nameEl.innerText = "updating...";
    imageEl.src = 'loader.svg'

    const response = await fetch(urlAPI);
    const data = await response.json();

    animeContainer.style.display = "block";
    btnEl.disabled = false;
    btnEl.innerText = "Get anime";
    nameEl.style.display = "block";
    imageEl.src = data.url;
    nameEl.innerText = "Name: " + data.artist;
  } catch (err) {
  	console.log(err)
    animeContainer.innerHTML = "Something is wrong. Please try again later.";
  }
}

btnEl.addEventListener("click", fetchAnime);
