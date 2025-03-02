// Task 1 Creating a book class
class Book { 
    constructor(title, author, isbn, copies) { 
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.copies = copies;
    };//cretaed a book class that takes in strings and numbers
    
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.isbn}, Copies: ${this.copies}` // Method to return details of Book
    };
    updateCopies(quantity) { 
        this.copies += quantity
    };//created a get details that returns a formatted string of book detials 
}


// Task 2 Creating a borrower class

class Borrower {
    constructor(name, borrowerID) {
        this.name = name;
        this.borrowerID = borrowerID;
        this.borrowedBooks = [];
    }; //created a class borrowers
    borrowBook(book) { 
        if (!this.borrowedBooks.includes(book)) { 
            this.borrowedBooks.push(book); // 
            console.log(`${book} has already been borrowed. `);
        };
    }; //method to see if book has been borrowed if not adds to array
    returnBook(book) { 
       const index = this.borrowedBooks.indexOf(book); 
        if (index !== -1) { 
            this.borrowedBooks.splice(index, 1) 
        } else {
            console.log(`${book} is not being borrowed`) 
        }//created a method to return books and to find them or remove them from array
    }
}

// Task 3 Creating a library class

class Library { 
    constructor() {
        this.books = []
        this.borrowers = []
    };
//created a class library that includes books and borrowers

    addBook(book) { 
        this.books.push(book) 
    }    //added a new book to the library
    listBooks() { 
        this.books.forEach(book => {console.log("Task 3:", book.getDetails()); 
        });
    };   //logged book details
    
        }


// logging Task 1
const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 123456, 5);
console.log("Task 1 part 1:", book1.getDetails()); 
book1.updateCopies(-1);
console.log("Task 1 part 2:", book1.getDetails()); 
// logging Task 1

//logging task 2 
const borrower1 = new Borrower("Alice Johnson", 201);
borrower1.borrowBook("The Great Gatsby");
console.log("Task 2 Part 1:",borrower1.borrowedBooks); 

borrower1.returnBook("The Great Gatsby");
console.log("Task 2 part 2:",borrower1.borrowedBooks); 
//logging task 2


//logging task 3
const library = new Library();
library.addBook(book1);
library.listBooks(); 
//logging task 3