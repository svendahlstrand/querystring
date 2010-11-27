function QueryString() {
  this.raw = window.location.search;

  this.exists = function() {
    return (this.raw.length > 0)
  }

  this.includes = function(name) {
    re = '[?&]' + name;

    return (this.raw.search(re) != -1);
  }

  this.set = function(name, value) {
    var keyValuePair = name + '=' + value;
    var queryString = this.exists() ? (this.raw + '&') : '?';

    this.raw = queryString + keyValuePair;
  }
};