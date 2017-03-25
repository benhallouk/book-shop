var HomePageObject = function() {
    this.searchField = element(by.className('search-field'));
    this.searchButton = element(by.className('search-button'));

    this.bookList = element(by.className('book'));

    this.bookCoverImage = element(by.css('.book img'));
    this.bookTitle = element(by.css('.book h4'));
    this.bookAuthor = element(by.binding('author'));
    this.bookOLID = element(by.binding('key'));
    this.bookPrice = element(by.className('price'));

    this.search = function(keyword) {
        this.searchField.clear().sendKeys(keyword);
        this.searchButton.click();
    };
};

module.exports = HomePageObject;