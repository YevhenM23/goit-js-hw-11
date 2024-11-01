export function createMarkUp(arr) {
    return arr.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
     <li class="list-item">
     <a href="${largeImageURL}">
         <img src="${webformatURL}" alt="${tags}" title="${tags}"/>
     </a>
        <div class="info">
        <p>❤️ ${likes}</p>
        <p>👁️${views}</p>
        <p>💬${comments}</p>
        <p>⬇️${downloads}</p>
        </div>
     </li>
    ` ).join("")
}