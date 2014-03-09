var ArraySeparator;

ArraySeparator = (function() {
  function ArraySeparator(data) {
    this.data = data;
    if (!this.data) {
      return;
    }
  }

  ArraySeparator.prototype.separateArray = function() {
    var arrNumbers, arrStrings, i;
    i = 0;
    arrNumbers = [];
    arrStrings = [];
    while (i < this.data.length) {
      if (typeof this.data[i] === "number") {
        arrNumbers.push(this.data[i]);
      } else if (typeof this.data[i] === "string") {
        arrStrings.push(this.data[i]);
      } else {
        alert("Type of data isn't sortable");
      }
      i++;
    }
    return {
      numbers: arrNumbers,
      strings: arrStrings
    };
  };

  ArraySeparator.prototype.enumerable = true;

  return ArraySeparator;

})();
