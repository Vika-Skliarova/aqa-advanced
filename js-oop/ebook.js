import Book from './book.js';

class Ebook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    get fileFormat() {
        return this._fileFormat;
    }

    set fileFormat(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.log(`Error: ${this.title} the File Format is empty or has an invalid format`);
        }
        this._fileFormat = value;
    }

    printInfo() {
        super.printInfo();
        console.log(`File format: ${this.fileFormat}`);
    }

    static copyBook(bookInstance, fileFormat) {
        if (!bookInstance || !(bookInstance instanceof Book)) {
            console.log('Error: Book instance is required');
            return null;
        }

        return new Ebook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
};

export default Ebook;