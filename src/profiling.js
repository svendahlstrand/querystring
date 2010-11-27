function QueryString() {
  this.raw = window.location.search;

  this.includes = function(name) {
    re = "[?&]" + name;
    if (this.raw.search(re) != -1) { return true; }

    return false;
  }
};