function getBooksTemplate(indexBooks, commentsHtml) {
  return /*html*/ `
        <div class="main_container--container_books--book_card">
          <section class="main_container--container_books--book_card--info">
            <h1 class="main_container--container_books--book_card--info--heading">${books[indexBooks].name}</h1>
            <img
              class="main_container--container_books--book_card--info--img"
              src="./assets/img/${indexBooks}.png"
              alt="Bild vom Buch" />
          </section>
          <section class="main_container--container_books--book_card--data">
            <table class="main_container--container_books--book_card--data--details">
              <tr>
                <th>Author:</th>
                <th>${books[indexBooks].author}</th>
              </tr>
              <tr>
                <th>Erscheinungsjahr:</th>
                <th>${books[indexBooks].publishedYear}</th>
              </tr>
              <tr>
                <th>Genre</th>
                <th>${books[indexBooks].genre}</th>
              </tr>
            </table>
            <div class="main_container--container_books--book_card--data--price_like">
              <span class="main_container--container_books--book_card--data--price_like--price">${books[indexBooks].price}€</span>
              <span class="main_container--container_books--book_card--data--price_like--like">
              <span 
                id="main_container--container_books--book_card--data--price_like--like--number${indexBooks}" 
                class="main_container--container_books--book_card--data--price_like--like--number" 
                >${books[indexBooks].likes}
              </span>
                <svg
                onclick="toggleLike(${indexBooks})"
                    id="main_container--container_books--book_card--data--price_like--like--like_button${indexBooks}"
                  class="main_container--container_books--book_card--data--price_like--like--like_button"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 -960 960 960">
                  <path
                    d="M440-501Zm0 381L313-234q-72-65-123.5-116t-85-96q-33.5-45-49-87T40-621q0-94 63-156.5T260-840q52 0 99 22t81 62q34-40 81-62t99-22q81 0 136 45.5T831-680h-85q-18-40-53-60t-73-20q-51 0-88 27.5T463-660h-46q-31-45-70.5-72.5T260-760q-57 0-98.5 39.5T120-621q0 33 14 67t50 78.5q36 44.5 98 104T440-228q26-23 61-53t56-50l9 9 19.5 19.5L605-283l9 9q-22 20-56 49.5T498-172l-58 52Zm280-160v-120H600v-80h120v-120h80v120h120v80H800v120h-80Z" />
                </svg>
              </span>
            </div>
          </section>
          <section class="main_container--container_books--book_card--comments">
            <h2 class="main_container--container_books--book_card--comments--heading">Kommentare:</h2>
            <div class="main_container--container_books--book_card--comments--content">          
            ${commentsHtml}
            </div>
            <div class="main_container--container_books--book_card--comments--input_container">
              <input
                id="main_container--container_books--book_card--comments--input_container--input${indexBooks}"
                class="main_container--container_books--book_card--comments--input_container--input"
                onkeydown="if (event.key === 'Enter') addNote(${indexBooks})"
                type="text" />
              <svg
                onclick="addNote(${indexBooks})"
                class="main_container--container_books--book_card--comments--input_container--send_button"
                id="main_container--container_books--book_card--comments--input_container--send_button${indexBooks}"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960">
                <path
                  d="M760-200v-160q0-50-35-85t-85-35H273l144 144-57 56-240-240 240-240 57 56-144 144h367q83 0 141.5 58.5T840-360v160h-80Z" />
              </svg>
            </div>
          </section>
        </div>
        `;
}

function getBooksCommentTemplate(comment) {
  return /*html*/ `
    <div class="main_container--container_books--book_card--comments--content--comment">
        <span class="main_container--container_books--book_card--comments--content--comment--name">${comment.name}:</span>
        <span class="main_container--container_books--book_card--comments--content--comment--comment" >${comment.comment} </span>
    </div>
`;
}
