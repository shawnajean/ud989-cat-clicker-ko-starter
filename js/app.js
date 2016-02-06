var ViewModel = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Turkish');
  this.imgSrc = ko.observable('https://farm8.staticflickr.com/7160/6672148713_4e2ab31099_b.jpg');
  this.imgAttribution = ko.observable('https://flic.kr/p/baAvmM');
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

  this.incrementCounter = function() {
    this.clickCount( this.clickCount() + 1 );
  }
}

ko.applyBindings( new ViewModel() );
