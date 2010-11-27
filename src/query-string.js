function QueryString() {
  this.raw = window.location.search;

  this.present = function() {
    return (this.raw.length > 0);
  };

  this.includes = function(name) {
    re = '[?&]' + name;

    return (this.raw.search(re) != -1);
  };

  this.get = function(name) {
    if (!this.includes(name)) { return null; }

    var re = '[?&]' + name + '=([^&]*)';

    return this.raw.match(re)[1];
  };

  this.set = function(name, value) {
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

  this.reload = function() {
    window.location.search = this.raw;
  };
}