let unreturnedBook = document.querySelector(".unreturnedBook");
let borrowRecord = document.querySelector(".borrowRecord");
let cover = unreturnedBook.getElementsByClassName("cover");
let bookDetails = document.querySelector(".bookDetails")

for (let i = 0; i < cover.length; i++) {
    cover[i].addEventListener('click', () => {
        bookDetails.style.display = "grid";
    })
}
cover = borrowRecord.getElementsByClassName("cover");
for (let i = 0; i < cover.length; i++) {
    cover[i].addEventListener('click', () => {
        bookDetails.style.display = "grid";
    })
}