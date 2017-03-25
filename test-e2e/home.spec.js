var HomePageObject = require('./home.pageObject');

describe('home page', function() {
  var homePageObject = new HomePageObject();

  it('should have a title', function() {    
    browser.get(browser.baseUrl);    
    expect(browser.getTitle()).toBeDefined();
  });

  it('should have book lists', function() {  
    expect(homePageObject.bookList.isPresent()).toBe(true);
  });

  describe('book data', function() {
    it('should have cover image', function() { 
      expect(homePageObject.bookCoverImage.isPresent()).toBe(true);
    });
    it('should have title', function() { 
      expect(homePageObject.bookTitle.isPresent()).toBe(true);
    });
    it('should have author', function() { 
      expect(homePageObject.bookAuthor.isPresent()).toBe(true);
    });
    it('should have open library Id', function() { 
      expect(homePageObject.bookOLID.isPresent()).toBe(true);
    });
    it('should have price', function() { 
      expect(homePageObject.bookPrice.isPresent()).toBe(true);
    });
  });

  describe('when search for a book by title', function() {
    it('should be returned', function() {      
      homePageObject.search('A veiled reflection');
       expect(homePageObject.bookList.isPresent()).toBe(true);
    });
  });

  describe('when search for a book by OLID', function() {
    it('should be returned', function() {     
      homePageObject.search('OL30460M');    
       expect(homePageObject.bookList.isPresent()).toBe(true);
    });
  });

});