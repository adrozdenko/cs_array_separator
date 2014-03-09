class ArraySorter
	constructor: (@data) ->
		if not @data
			return

	ascending: ->
		numbers = @data.numbers.sort (a, b) ->
			a - b
		strings = @data.strings.sort().reverse()

		numbers: numbers
		strings: strings

	descending: ->
		numbers = @data.numbers.sort (a, b) ->
			b - a
		strings = @data.strings.sort()

		numbers: numbers
		strings: strings

	enumerable: true
