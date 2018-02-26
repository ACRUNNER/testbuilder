/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    //throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      //throw new Error('10 should be even!');
    }
  });
});

describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...
	
	var expect = chai.expect;
  it('has a prefix of 38 and a length of 14', function() {
 
    expect(detectNetwork('38345678901234')).to.equal('Diner\'s Club');
  
  });

  it('has a prefix of 39 and a length of 14', function() {
    expect(detectNetwork('39345678901234')).to.equal('Diner\'s Club');
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var expect = chai.expect

  it('has a prefix of 34 and a length of 15', function() {
    expect(detectNetwork('343456789012345')).to.equal('American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    expect(detectNetwork('373456789012345')).to.equal('American Express');
	
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
 var expect = chai.expect;

  it('has a prefix of 4 and a length of 13', function() {
    expect(detectNetwork('4123456789012')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    expect(detectNetwork('4123456789012345')).to.equal('Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    expect(detectNetwork('4123456789012345678')).to.equal('Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it(FILL_ME_IN, function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  //var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal("MasterCard");
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal("MasterCard");
  })
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011345678901234')).to.equal('Discover');
  });
  
  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011123456789012345')).to.equal('Discover');
  });
  it('has a prefix of 644 and a length of 16', function(){
	expect(detectNetwork("6441234567890123")).to.equal('Discover');
  }); 
  it('has a prefix of 644 and a length of 19', function(){
	expect(detectNetwork("6441234567890123456")).to.equal('Discover');
  });
  it('has a prefix of 645 and a length of 16', function(){
	expect(detectNetwork("6451234567890123")).to.equal('Discover');
  }); 
  it('has a prefix of 645 and a length of 19', function(){
	expect(detectNetwork("6451234567890123456")).to.equal('Discover');
  });
  it('has a prefix of 646 and a length of 16', function(){
	expect(detectNetwork("6461234567890123")).to.equal('Discover');
  }); 
  it('has a prefix of 646 and a length of 19', function(){
	expect(detectNetwork("6461234567890123456")).to.equal('Discover');
  });
  it('has a prefix of 647 and a length of 16', function(){
	expect(detectNetwork("6471234567890123")).to.equal('Discover');
  }); 
  it('has a prefix of 647 and a length of 19', function(){
	expect(detectNetwork("6471234567890123456")).to.equal('Discover');
  });
  it('has a prefix of 648 and a length of 16', function(){
	expect(detectNetwork("6481234567890123")).to.equal('Discover');
  }); 
  it('has a prefix of 648 and a length of 19', function(){
	expect(detectNetwork("6481234567890123456")).to.equal('Discover');
  });
  it('has a prefix of 649 and a length of 16', function(){
	expect(detectNetwork("6491234567890123")).to.equal('Discover');
  }); 
  it('has a prefix of 649 and a length of 19', function(){
	expect(detectNetwork("6491234567890123456")).to.equal('Discover');
  });
  it('has a prefix of 65 and a length of 16', function(){
	expect(detectNetwork("6541234567890123")).to.equal('Discover');
  }); 
  it('has a prefix of 65 and a length of 19', function(){
	expect(detectNetwork("6541234567890123456")).to.equal('Discover');
  });
  
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  for(var x = '12345678'; x.length <= 15; x += "1"){
	(function(x) {
	
	it('has a prefix of 5018', function() {	  
    expect(detectNetwork('5018' + x)).to.equal('Maestro');
	});
	
	it('has a prefix of 5020', function() {
	  
    expect(detectNetwork('5020' + x)).to.equal('Maestro');
	});
	it('has a prefix of 5038', function() {
	  
    expect(detectNetwork('5038' + x)).to.equal('Maestro');
	});
	it('has a prefix of 6304', function() {
	  
    expect(detectNetwork('6304' + x)).to.equal('Maestro');
	});
	
	})(x)
  }
  
  it('has a prefix of 5020', function() {
    expect(detectNetwork('5020123456789012345')).to.equal('Maestro');
  });
});

describe('China UnionPay', function(){
	var expect = chai.expect;
	for (var y = "1234567890"; y.length <= 13; y+= "1"){	
		for(var x = 622126; x <= 622925; x += 1){
		(function(x, y){
		it('has a prefix of ' + x, function(){
			expect(detectNetwork(x + y)).to.equal('China UnionPay');
		});
		})(x, y);
		}
		
		for(var x = 6282; x <= 6288; x += 1){
		(function(x, y) {
		it('has a prefix of ' + x, function() {	  
			expect(detectNetwork(x + "12" + y)).to.equal('China UnionPay');
		});
		})(x, y);
		}
		
		for(var x = 624; x <= 626; x += 1){
		(function(x, y) {
		it('has a prefix of ' + x , function() {	  
			expect(detectNetwork(x + "123" + y)).to.equal('China UnionPay');
		});
		})(x, y);
		}
	}		
});
describe('Switch', function(){
	var expect = chai.expect;
	var x = "1234567890";
	it('4903', function(){
		expect(detectNetwork("490301" + x)).to.equal('Switch');
	});
	it('4903', function(){
		expect(detectNetwork("49030123" + x)).to.equal('Switch');
	});
	it('4903', function(){
		expect(detectNetwork("490301234" + x)).to.equal('Switch');
	});
	it('4905', function(){
		expect(detectNetwork("490501" + x)).to.equal('Switch');
	});
	it('4905', function(){
		expect(detectNetwork("49050123" + x)).to.equal('Switch');
	});
	it('4905', function(){
		expect(detectNetwork("490501234" + x)).to.equal('Switch');
	});
	it('4911', function(){
		expect(detectNetwork("491101" + x)).to.equal('Switch');
	});
	it('4911', function(){
		expect(detectNetwork("49110123" + x)).to.equal('Switch');
	});
	it('4911', function(){
		expect(detectNetwork("491101234" + x)).to.equal('Switch');
	});
	it('4936', function(){
		expect(detectNetwork("493601" + x)).to.equal('Switch');
	});
	it('4936', function(){
		expect(detectNetwork("49360123" + x)).to.equal('Switch');
	});
	it('4936', function(){
		expect(detectNetwork("493601234" + x)).to.equal('Switch');
	});
	it('6333', function(){
		expect(detectNetwork("633301" + x)).to.equal('Switch');
	});
	it('6333', function(){
		expect(detectNetwork("63330123" + x)).to.equal('Switch');
	});
	it('6333', function(){
		expect(detectNetwork("633301234" + x)).to.equal('Switch');
	});
	it('6759', function(){
		expect(detectNetwork("675901" + x)).to.equal('Switch');
	});
	it('6759', function(){
		expect(detectNetwork("67590123" + x)).to.equal('Switch');
	});
	it('6759', function(){
		expect(detectNetwork("675901234" + x)).to.equal('Switch');
	});
	it('564182', function(){
		expect(detectNetwork("564182" + x)).to.equal('Switch');
	});
	it('6759', function(){
		expect(detectNetwork("56418223" + x)).to.equal('Switch');
	});
	it('6759', function(){
		expect(detectNetwork("564182234" + x)).to.equal('Switch');
	});
	it('633110', function(){
		expect(detectNetwork("633110" + x)).to.equal('Switch');
	});
	it('633110', function(){
		expect(detectNetwork("63311023" + x)).to.equal('Switch');
	});
	it('633110', function(){
		expect(detectNetwork("633110234" + x)).to.equal('Switch');
	});
});
