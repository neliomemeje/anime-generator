const btnEl = document.querySelector(".btn");
const animeContainer = document.querySelector(".anime-container");
const image = document.getElementById("image");
const nameEl = document.getElementById("name");

async function fetchAnime() {
  const urlAPI = "https://api.catboys.com/img";

  try {
    btnEl.disabled = true;
    btnEl.innerText = "fetching...";
    nameEl.innerText = "updating...";
    image.src = "https://samherbert.net/svg-loaders/svg-loaders/oval.svg"

    const response = await fetch(urlAPI);
    const data = await response.json();

    animeContainer.style.display = "block";
    btnEl.disabled = false;
    btnEl.innerText = "Get anime";
    nameEl.style.display = "block";
    image.src = data.url;
    nameEl.innerText = "Name: " + data.artist;
  } catch (err) {
    animeContainer.innerHTML = "Something is wrong. Please try again later.";
  }
}

btnEl.addEventListener("click", fetchAnime);
