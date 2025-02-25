//Task 1 - Created Book Class

class Book {
    constructor(title, author, isbn, copies) {
      this.title = title;
      this.author = author;
      this.isbn = isbn;
      this.copies = copies;
    }
    //cretaed a book class that takes in strings and numbers
  
    getDetails() {
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`;
    }
    //created a get details that returns a formatted string of book detials 
  
    updateCopies(quantity) {
      this.copies += quantity;
    }
  }
  //added a method that modifies copies that are avaiable when book is borrowed or returned
  
  const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
  console.log("Task 1 part 1:", book1.getDetails());
  
  book1.updateCopies(-1);
  console.log("Task 1 part 2:",book1.getDetails());

  //logged results 
  