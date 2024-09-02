function saveToLocalStorage() {
  localStorage.setItem("booksData", JSON.stringify(books));
}

function getFromLocalStorage() {
  let storedBooks = localStorage.getItem("booksData");
  if (storedBooks) books = JSON.parse(storedBooks);
}

getFromLocalStorage();

function renderBooks() {
  let contentRef = document.getElementById("main_container--container_books");
  contentRef.innerHTML = "";
  for (let indexBooks = 0; indexBooks < books.length; indexBooks++) {
    let commentsHtml = generateComments(books[indexBooks].comments);
    contentRef.innerHTML += getBooksTemplate(indexBooks, commentsHtml);
    let likeButtonRef = document.getElementById(`main_container--container_books--book_card--data--price_like--like--like_button${indexBooks}`);
    if (books[indexBooks].liked) {
      likeButtonRef.style.fill = "rgb(139, 35, 35)";
    } else {
      likeButtonRef.style.fill = "rgb(179, 229, 252)";
    }
  }
}
renderBooks();

function generateComments(comments) {
  let htmlStrings = [];
  for (let index = 0; index < comments.length; index++) {
    let html = getBooksCommentTemplate(comments[index]);
    htmlStrings.push(html);
  }
  let result = htmlStrings.join(""); //https://www.w3schools.com/jsref/jsref_join.asp

  return result;
}

function addNote(bookIndex) {
  let inputFieldRef = document.getElementById(`main_container--container_books--book_card--comments--input_container--input${bookIndex}`);
  let commentText = inputFieldRef.value;
  if (commentText !== "") {
    let newComment = {
      name: "Gast",
      comment: commentText,
    };
    books[bookIndex].comments.unshift(newComment);
    renderBooks();
    saveToLocalStorage();
  } else {
    inputFieldRef.style.borderColor = "red";
  }
}

function toggleLike(likeIndex) {
  let likeButtonRef = document.getElementById(`main_container--container_books--book_card--data--price_like--like--like_button${likeIndex}`);
  let likeCountHTMLRef = document.getElementById(`main_container--container_books--book_card--data--price_like--like--number${likeIndex}`);
  let likeCountRef = books[likeIndex].likes;
  if (books[likeIndex].liked) {
    books[likeIndex].liked = false;
    books[likeIndex].likes = likeCountRef - 1;
    likeButtonRef.style.fill = "rgb(179, 229, 252)";
  } else {
    books[likeIndex].liked = true;
    books[likeIndex].likes = likeCountRef + 1;
    likeButtonRef.style.fill = "rgb(139, 35, 35)";
  }
  likeCountHTMLRef.innerText = books[likeIndex].likes;
  saveToLocalStorage();
}
