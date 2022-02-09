function addBook(bookName, bookAuthor, bookPrice, bookAmount, bookList) {
    bookList.push([bookList.length, bookName, bookAuthor, bookPrice, bookAmount]);

}

function findBook(bookID, bookTitle, bookAuthor, bookList) {
    for (const book of bookList) {
        if (bookID === book[0] || bookTitle === book[1] || bookAuthor === book[2]) {
            return book;
        }
    }
    return false;
}

function buy(bookID, bookTitle, bookAuthor, amount, bookList) {
    let book = findBook(bookID, bookTitle, bookAuthor, bookList);
    if (!book) {
        return "cannot find the book";
    }
    if (book[4] < amount) {
        return "there is no enough amount of books";
    }
    book[4] -= amount;
    return `bought "${book[1]}"\t\tamount ${amount}\t\tprice ${book[3]*amount}`
}

function displayBooks(bookList) {
    for (const book of bookList) {
        console.log(`id: ${book[0]}\t\tbook: ${book[1]}\t\tauthor: ${book[2]}\t\tprice: ${book[3]}\t\tamount: ${book[4]}`);
    }
}

let bookList = [];
addBook("Start with why", "simon sinek", 80.0, 13, bookList);
addBook("But how do it know", "J. Clark Scott", 59.9, 22, bookList);
addBook("Clean Code	", "Robert Cecil Martin", 50.0, 5, bookList);
addBook("Zero to One", "Peter Thiel", 45.0, 12, bookList);
addBook("You don't know JS", "Kyle Simpson", 39.9, 9, bookList);

console.log(buy(20, null, null, 20, bookList));