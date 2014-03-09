var Application;

Application = (function() {
  function Application(data) {
    this.data = data;
  }

  Application.prototype.separatedData = function() {
    return new ArraySeparator(this.data).separateArray();
  };

  Application.prototype.sortedData = function() {
    return new ArraySorter(this.separatedData());
  };

  Application.prototype.display = function() {
    document.write("<p>Ascending Strings: " + this.sortedData().ascending().strings + "</p>");
    document.write("<p>Ascending Numbers: " + this.sortedData().ascending().numbers + "</p>");
    document.write("<p>Descending Strings: " + this.sortedData().descending().strings + "</p>");
    document.write("<p>Descending Numbers: " + this.sortedData().descending().numbers + "</p>");
  };

  return Application;

})();
