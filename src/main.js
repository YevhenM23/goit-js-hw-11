import { fetchImages } from "./js/pixabay-api.js";

const form = document.querySelector(".search-form");

const loader = document.querySelector(".loader");

function showLoader() {
    loader.style.display = "block";
}

function hideLoader() {
    loader.style.display = "none";
}

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const query = form.query.value.trim();
    if (query) {
        showLoader();
        fetchImages(query).finally(hideLoader);
    }
});

