﻿var test = require('tap').test
var Elapsed = require('../index.js')
var elapsed1 = new Elapsed()
var elapsed2 = new Elapsed()

var between = function(x, y, z) {
	return (x<y && y<z)
}

test('test for approximation', function(t) {
	t.plan(4)
	elapsed1.set()
	setTimeout(function() {
		elapsed2.set()
		t.ok( between(0.89, elapsed1.get(), 0.95), "stopwatch 1 is between 0.89 and 0.94")
		t.ok( between(0.0, elapsed2.get(), 0.05), "stopwatch 2 is between 0.00 and 0.05")
		setTimeout(function() {
			t.ok( between(1.29, elapsed1.get(), 1.35), "stopwatch 1 is between 1.29 and 1.35")
			t.ok( between(0.39, elapsed2.get(), 0.45), "stopwatch 2 is between 0.39 and 0.45")
			t.end()
		}, 400)
	}, 900)
})