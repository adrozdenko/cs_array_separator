class ArraySeparator
	constructor: (@data) ->
		if not @data
			return

	separateArray: ->
		i = 0
		arrNumbers =[]
		arrStrings = []

		while i < @data.length
			if typeof  @data[i] is "number"
				arrNumbers.push @data[i]
			else if typeof @data[i] is "string"
				arrStrings.push @data[i]
			else
				alert "Type of data isn't sortable"
			i++

		numbers: arrNumbers
		strings: arrStrings

	enumerable: true


