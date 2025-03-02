// Task 1 Creating a book class
class Book { 
    constructor(title, author, isbn, copies) { 
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    } // created a book class that takes in strings and numbers
    
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}`; 
    }
    
    updateCopies(quantity) { 
        this.copies += quantity;
    } // created a get details that returns a formatted string of book details 
}


// Task 2 Creating a borrower class

class Borrower {
    constructor(name, borrowerId) { 
        this.name = name;
        this.borrowerId = borrowerId;
        this.borrowedBooks = [];
    } // created a class borrowers

    borrowBook(bookTitle) { 
        if (!this.borrowedBooks.includes(bookTitle)) { 
            this.borrowedBooks.push(bookTitle); // adds book title to borrowedBooks
        } else {
            console.log(`${bookTitle} has already been borrowed.`);
        }
    } // method to add a book if not already in the array

    returnBook(bookTitle) { 
        const index = this.borrowedBooks.indexOf(bookTitle); 
        if (index !== -1) { 
            this.borrowedBooks.splice(index, 1);
        } else {
            console.log(`${bookTitle} is not being borrowed`);
        } // created a method to return books and to find them or remove them from array
    }
}


// Task 3 Creating a library class

class Library { 
    constructor() {
        this.books = [];
        this.borrowers = [];
    } // created a class library that includes books and borrowers

    addBook(book) { 
        this.books.push(book);
    } // added a new book to the library

    addBorrower(borrower) {
        this.borrowers.push(borrower);
    } // added a new borrower to the library

    listBooks() { 
        this.books.forEach(book => {
            console.log("Task 3:", book.getDetails()); 
        });
    } // logged book details
    
    // Task 4: Implementing Book Borrowing
    lendBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn); // Checks if the book exists 
        if (!book) {
            console.log("Book is not in library");
            return;
        } // created a method lendBook in the library class and checks to see if book is real

        if (book.copies <= 0) { 
            console.log("No copies available");
            return;
        } // sees how many copies are available 

        const borrower = this.borrowers.find(bw => bw.borrowerId === borrowerId);
        if (!borrower) {
            console.log("Borrower not found"); // if it cannot be traced
            return;
        } // see who is currently borrowing the book 
        
        book.updateCopies(-1); // subtracts from book amount
        borrower.borrowBook(book.title); 
    }

    // Task 5: Implementing Book Returns
    returnBook(borrowerId, isbn) {
        const book = this.books.find(b => b.isbn === isbn);
        const borrower = this.borrowers.find(bw => bw.borrowerId === borrowerId);
        // check if book is still in system and exists 
        if (!book) {
            console.log("No book found");
            return;
        } 
        if (!borrower) {
            console.log("No borrower found");
            return; // sees if borrower is still in the system 
        } 
        book.updateCopies(1);
        // adds an extra book to the system
        borrower.returnBook(book.title);
    }
} 

// logging Task 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log("Task 1 part 1:", book1.getDetails()); 
book1.updateCopies(-1);
console.log("Task 1 part 2:", book1.getDetails()); 
// logging Task 1

// logging task 2 
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log("Task 2 Part 1:", JSON.stringify(borrower1.borrowedBooks)); 

borrower1.returnBook("The Great Gatsby");
console.log("Task 2 part 2:", JSON.stringify(borrower1.borrowedBooks)); 
// logging task 2

// logging task 3
const library = new Library();
library.addBook(book1);
library.addBorrower(borrower1); 
library.listBooks(); 
// logging task 3

// logging Task 4
library.lendBook(201, 123456);
console.log("Task 4 part 1:", book1.getDetails());
console.log("Task 4 part 2:", JSON.stringify(borrower1.borrowedBooks));
// logging task 4

// logging task 5
library.returnBook(201, 123456);
console.log("Task 5 -part 1:", book1.getDetails());
console.log("Task 5 -part 2:", JSON.stringify(borrower1.borrowedBooks));
// logging task 5 
