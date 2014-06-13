ns-elapsed
==========

[![Build Status](https://travis-ci.org/ArtskydJ/ns-elapsed.svg?branch=master)](https://travis-ci.org/ArtskydJ/ns-elapsed)

- [Install](https://github.com/ArtskydJ/ns-elapsed#install)
- [Require](https://github.com/ArtskydJ/ns-elapsed#require)
- [Methods](https://github.com/ArtskydJ/ns-elapsed#methods)
	- [set](https://github.com/ArtskydJ/ns-elapsed#set)
	- [get](https://github.com/ArtskydJ/ns-elapsed#get)
- [Examples](https://github.com/ArtskydJ/ns-elapsed#examples)
- [License](https://github.com/ArtskydJ/ns-elapsed#license)

##Install
	npm install ns-elapsed
	
##Require
To require the constructor do:

	var Elapsed = require('ns-elapsed')
	var elapsed = new Elapsed()
	var elapsed2 = new Elapsed()

If you only want one timer, you might as well construct it right away.

	var elapsed = require('ns-elapsed')() //constructed

##Methods
###set()
Does not return anything

	elapsed1.set()

###get()
Returns the number of seconds elapsed. E.g. 13.947172826, (almost 14 seconds.)

	console.log( elapsed1.get() )

##Examples
Time how long it takes for a callback to be called:

	var Elapsed() = require('ns-elapsed')
	var elapsed = new Elapsed()
	elapsed.set()
	setTimeout(function() {
		console.log( elapsed.get() )
	}, 1000)

Time how long it takes for a synchronous function to execute:

	var elapsed = require('ns-elapsed')()
	//synchronous code here
	console.log( elapsed.get() )

##License

[MIT](http://opensource.org/licenses/MIT)
