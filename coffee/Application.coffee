class Application
	constructor: (@data) ->

	separatedData: ->
		new ArraySeparator(@data).separateArray()

	sortedData: ->
		new ArraySorter(@separatedData())

	display: ->
		document.write("<p>Ascending Strings: " + @sortedData().ascending().strings + "</p>");
		document.write("<p>Ascending Numbers: " + @sortedData().ascending().numbers + "</p>");
		document.write("<p>Descending Strings: " + @sortedData().descending().strings + "</p>");
		document.write("<p>Descending Numbers: " + @sortedData().descending().numbers + "</p>");
		return