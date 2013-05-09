function QueryString() {
  this.raw = window.location.search;
}

QueryString.prototype.present = function() {
  return (this.raw.length > 0);
};

QueryString.prototype.includes = function(name) {
  re = '[?&]' + name;

  return (this.raw.search(re) != -1);
};

QueryString.prototype.get = function(name) {
  if (!this.includes(name)) { return null; }

  var re = '[?&]' + name + '=([^&]*)';

  return this.raw.match(re)[1];
};

QueryString.prototype.set = function(name, value) {
  /* Remove previously set parameter(s).
     TODO: Is this the best way? */
  var re = '[?&]' + name + '=([^&]*)';
  re = new RegExp(re, 'ig');

  this.raw = this.raw.replace(re, '');
  this.raw = this.raw.replace(/^&/, '?');

  var keyValuePair = name + '=' + value;
  var queryString = this.present() ? (this.raw + '&') : '?';

  this.raw = queryString + keyValuePair;
};

QueryString.prototype.reload = function() {
  window.location.search = this.raw;
};
