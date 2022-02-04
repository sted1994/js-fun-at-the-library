function createTitle(title) {

  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {

  class character {
    constructor(){
      this.name = name,
      this.age = age,
      this.pronouns = pronouns
    }
  };

var mainChar = new character();
return mainChar;
};

function saveReview(str, reviews) {

  if (reviews.includes(str) === false) {
    reviews.push(str);
  }

  return reviews;
};

function calculatePageCount(title) {
  return title.length * 20;
};

function writeBook(bookTitle, bookCharacter, genre) {


var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre,
  };
return book;
};

function editBook(title) {

  title.pageCount = (title.pageCount * .75);

};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
