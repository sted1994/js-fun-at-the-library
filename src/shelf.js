
function shelfBook(book, sciFiShelf) {


   if ((book.genre === "sciFi") && (sciFiShelf.length < 3)) {
     sciFiShelf.unshift(book);
   }

}

function unshelfBook() {


}

function listTitles() {


}

function searchShelf() {


}

module.exports = {
  shelfBook,
  // unshelfBook,
  // listTitles,
  // searchShelf
};
