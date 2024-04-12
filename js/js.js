// Greeting
let now = new Date();
let hour = now.getHours();

    const greeting = document.querySelector(".greeting");
    if (hour < 12) {
        greeting.innerHTML = "Good Morning!";
    } else if (hour <= 18) {
        greeting.innerHTML = "Good Afternoon";
    } else {
        greeting.innerHTML = "Good Evening!"
    }


// Cards Artists 
const searchInput = document.getElementById("search-input");
const resultArtists = document.getElementById("result-artist");
const resultPlaylist = document.getElementById("playlist-whole");

function requestApi(searchTerm) {
    fetch(`http://localhost:3000/artists?name_like=${searchTerm}`)
        .then((response) => response.json())
        .then((result) => displayResults(result));
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden");
    const artistName = document.getElementById("artist-name");
    const artistImage = document.getElementById("artist-img");

    artistName.innerText = "";
    artistImage.src = "";
    
    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    })

    resultArtists.classList.remove("hidden");
}

document.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    if(searchTerm === "") {
        resultPlaylist.classList.add("hidden");
        resultArtists.classList.remove("hidden");
        return;
    }

    requestApi(searchTerm);
}) 
