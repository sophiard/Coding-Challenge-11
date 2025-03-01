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



 //"Task 2 - Created Borrower Class 

  class Borrower {
    constructor(name, borrowerID) {
        this.name = name;
        this.borrowerID = borrowerID;
        this.borrowedBooks = [];
        //created a class borrower
    };
    borrowBook(book) { 
        if (!this.borrowedBooks.includes(book)) { 
            this.borrowedBooks.push(book); 
        } else {
            console.log(`${book} This book has already been borrowed. `);
        };
    }; //created a method to borrow books 
    // added method that shos if book has alreayd been borrowed or if not adds to array

    returnBook(book) { 
       const index = this.borrowedBooks.indexOf(book); 
        if (index !== -1) { 
            this.borrowedBooks.splice(index, 1) 
        } else {
            console.log(`${book} hasn't been borrowed`) //if book is not in array
        }//created method that retunrs books and to find the borrowed ones in arraY
        //Also removed book from borrow array
    }
}
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log("Task 2 part 1", borrower1.borrowedBooks); 

borrower1.returnBook("The Great Gatsby");
console.log("Task 2 part 2", borrower1.borrowedBooks); 
//logged outputs for task 2 



//Task 3 - Created Library Class
class Library {
    constructor() {
        this.books = []; 
        this.borrowers = []; 
    } //created a class library that includes books and borrowers

    // Adds a new book to the library
    addBook(book) {
        this.books.push(book);
    }//added a new book to the library 
    
    listBooks() {
        this.books.forEach(book => console.log(book.getDetails()));
    }}; //logged book details