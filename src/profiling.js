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
    this.raw = '?' + name + '=' + value;
  }
};