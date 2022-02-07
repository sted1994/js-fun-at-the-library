
function createLibrary(library) {

var bookBuilding = {
  name: library,
  shelves: {fantasy: [], fiction: [], nonFiction: []}
};
  return bookBuilding;

}

function addBook(library, book) {
//add book to array that matches genre
  library.shelves[book.genre].push(book);
}

function checkoutBook(library, title, genre) {
  var shelf = library.shelves[genre];
  var libraryName = library.name;

  for (var i = 0; i <= shelf.length; i++){
    var book = shelf[i];
    if (book !== undefined && book.title === title){
      shelf.splice(i, 1)
      return `You have now checked out ${title} from the ${libraryName}`
    }
  }
  return `Sorry, there are currently no copies of ${title} available at the ${libraryName}`

}


module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
