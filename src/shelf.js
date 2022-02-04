
function shelfBook(book, sciFiShelf) {


   if ((book.genre === "sciFi") && (sciFiShelf.length < 3)) {
     sciFiShelf.unshift(book);
   }

}

function unshelfBook(book, shelf) {

  for (var i = 0; i < shelf.length; i++) {
    if (shelf[i].title === book) {
      shelf.splice(i, 1);
    }
  };
};

function listTitles(titles) {
  var list = [];

    for (var i = 0; i < titles.length; i++) {
    list.push(titles[i].title)
    }

return list.join(', ');
}

function searchShelf(shelf, title) {

  var hasBook = false
  for (var i = 0; i < shelf.length; i++) {

    if (shelf[i].title === title){
      hasBook = true;
    };
  }
  return hasBook
}

module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
