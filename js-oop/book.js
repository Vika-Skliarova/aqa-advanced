class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    //title
    get title() {
        return this._title;
    }

    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.log(`Error: ${this.title} - the Title is empty or has an invalid format`);
        }
        this._title = value;
    }

    //author
    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.log(`Error: ${this.title} - the Author is empty or has an invalid format`);
        }
        this._author = value;
    }

    //year
    get year() {
        return this._year;
    }

    set year(value) {
        if (typeof value !== 'number' || value <= 0) {
            console.log(`Error: ${this.title} - the Year has an invalid format`);
        }
        this._year = value;
    }

    printInfo() {
        console.log(`Title: ${this.title}, Author: ${this.author} Year: ${this.year}`);
    }

    static getOldestBook(booksArray) {
        let oldest = null;

        for (let book of booksArray) {
            if (book instanceof Book) {
                if (!oldest || book.year < oldest.year) {
                    oldest = book;
                }
            }
        }

        return oldest;
    }
};

export default Book;