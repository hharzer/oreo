var Book = function Book (data) {
  delete data.something
  this.getTitle2 = function () {
    return this.title
  }
}

Book.prototype.getTitle = function () {
  return this.title
}

module.exports = Book





// 'use strict';
// module.exports = class Book {
//   constructor () {
//     this.getTitle2 = function () {
//       return this.title
//     }
//   }
//   getTitle () {
//     return this.title
//   }
// }