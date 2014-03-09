var ArraySorter;

ArraySorter = (function() {
  function ArraySorter(data) {
    this.data = data;
    if (!this.data) {
      return;
    }
  }

  ArraySorter.prototype.ascending = function() {
    var numbers, strings;
    numbers = this.data.numbers.sort(function(a, b) {
      return a - b;
    });
    strings = this.data.strings.sort().reverse();
    return {
      numbers: numbers,
      strings: strings
    };
  };

  ArraySorter.prototype.descending = function() {
    var numbers, strings;
    numbers = this.data.numbers.sort(function(a, b) {
      return b - a;
    });
    strings = this.data.strings.sort();
    return {
      numbers: numbers,
      strings: strings
    };
  };

  ArraySorter.prototype.enumerable = true;

  return ArraySorter;

})();
