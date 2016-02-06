var Cat = function( data ) {
  this.clickCount = ko.observable( data.clickCount );
  this.name = ko.observable( data.name );
  this.imgSrc = ko.observable( data.imgSrc );
  this.imgAttribution = ko.observable( data.imgAttribution );

  this.nicknames = ko.observableArray( data.nicknames );

  this.level = ko.computed( function() {
      if( this.clickCount() < 10 ) {
        return "Newborn";
      } else if( this.clickCount() < 100 ) {
        return "Infant";
      } else if( this.clickCount() < 250 ) {
        return "Teen";
      } else if( this.clickCount() < 750 ) {
        return "Young adult";
      } else if( this.clickCount() < 1500 ) {
        return "Adult";
      } else {
        return "Retired";
      }
  }, this);
}

var ViewModel = function() {
  var self = this;

  this.currentCat = ko.observable( new Cat({
    clickCount: 0,
    name: 'Turkish',
    imgSrc: 'https://farm8.staticflickr.com/7160/6672148713_4e2ab31099_b.jpg',
    imgAttribution: 'https://flic.kr/p/baAvmM',
    nicknames: [ 'Turk', 'Turkey', 'Mr T' ]
  }) );

  // function is called from within the binding context of currentCat from HTML
  this.incrementCounter = function() {
    self.currentCat().clickCount( self.currentCat().clickCount() + 1 );
  }
}

ko.applyBindings( new ViewModel() );
