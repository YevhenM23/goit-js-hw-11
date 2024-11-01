import { createMarkUp } from "./render-functions";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

let lightbox = new SimpleLightbox('.list a', {
    captionsData: 'alt', 
    captionDelay: 250, 
});

function showError(message) {
    iziToast.error({
        message,
        position: 'topRight',
    });
}

const API_KEY = "46809919-8ae2f3dd2d3333d4ada30ded2";
const list = document.querySelector(".list");

export function fetchImages(query = "dogs") {
    const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true"
})

return fetch(`https://pixabay.com/api/?${params}`)
    .then(response => {
        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return response.json();
    })
    .then((result) => {
        list.innerHTML = "";
        if (result.hits.length === 0) {
                showError("Sorry, there are no images matching your search query. Please try again!");
                return;
            }
        list.insertAdjacentHTML("beforeend", createMarkUp(result.hits));
        lightbox.refresh();
    }).catch((err) => {
        console.log("Error:", err);
    });
}
