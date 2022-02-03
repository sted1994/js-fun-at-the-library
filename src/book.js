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

  reviews.push(str);

  return reviews;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  // calculatePageCount,
  // writeBook,
  // editBook
}
