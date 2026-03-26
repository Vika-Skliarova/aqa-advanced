import Book from './book.js';
import Ebook from './ebook.js';

// Book
const book1 = new Book('Title Book 1', 'Author Book 1', 2001);
const book2 = new Book('Title Book 2', 'Author Book 2', 2002);
const book3 = new Book('Title Book 3', ''); // with Error

// Ebook
const ebook1 = new Ebook('Title eBook 1', 'Author eBook 1', 2021, 'PDF');
const ebook2 = new Ebook('Title eBook 2', 'Author eBook 2', 1022, 'EPUB');

// Oldest book
const oldest = Book.getOldestBook([book1, book2, ebook1, ebook2]);
console.log('Oldest book is:');
oldest.printInfo();

// return an instance of the EBook
const ebookFromBook = Ebook.copyBook(book1, 'MOBI');
ebookFromBook.printInfo();
