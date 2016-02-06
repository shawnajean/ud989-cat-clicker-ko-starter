var initialCats = [
  {
    name: "Xuxa",
    imgSrc: "https://farm2.staticflickr.com/1126/625069434_db86b67df8_b.jpg",
    imgAttribution: "https://flic.kr/p/XeDnd",
    nicknames: [ 'Xu' ],
    clickCount: 0
  },{
    name: "Mask",
    imgSrc: "https://farm4.staticflickr.com/3684/9860937706_8608be2950_b.jpg",
    imgAttribution: "https://flic.kr/p/g2nTem",
    nicknames: [ 'Em' ],
    clickCount: 0
  },{
    name: "Sunny",
    imgSrc: "https://farm8.staticflickr.com/7401/16393044637_72e93d96b6_b.jpg",
    imgAttribution: "https://flic.kr/p/qYAD3D",
    nicknames: [ 'Sun' ],
    clickCount: 0
  },{
    name: "Yoann",
    imgSrc: "https://farm6.staticflickr.com/5704/20443802614_d0b0c0b5c5_b.jpg",
    imgAttribution: "https://flic.kr/p/x9xQgq",
    nicknames: [ 'Yo' ],
    clickCount: 0
  },{
    name: 'Turkish',
    imgSrc: 'https://farm8.staticflickr.com/7160/6672148713_4e2ab31099_b.jpg',
    imgAttribution: 'https://flic.kr/p/baAvmM',
    nicknames: [ 'Turk', 'Turkey', 'Mr T' ],
    clickCount: 0
  }
];

var Cat = function( data ) {
  this.clickCount = ko.observable( data.clickCount );
  this.name = ko.observable( data.name );
  this.imgSrc = ko.observable( data.imgSrc );
  this.imgAttribution = ko.observable( data.imgAttribution );

  this.nicknames = ko.observableArray( data.nicknames );

  this.level = ko.computed( function() {
    var currentClicks = this.clickCount();
    if( currentClicks < 10 ) {
      return "Newborn";
    } else if( currentClicks < 100 ) {
      return "Infant";
    } else if( currentClicks < 250 ) {
      return "Teen";
    } else if( currentClicks < 750 ) {
      return "Young adult";
    } else if( currentClicks < 1500 ) {
      return "Adult";
    } else {
      return "Retired";
    }
  }, this);
};

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach( function( catItem ) {
    self.catList.push( new Cat( catItem ) );
  });

  this.currentCat = ko.observable( this.catList()[0] );

  this.incrementCounter = function() {
    self.currentCat().clickCount( self.currentCat().clickCount() + 1 );
  }

  this.selectCat = function( clickedCat ) {
    self.currentCat( clickedCat );
  }
};

ko.applyBindings( new ViewModel() );
