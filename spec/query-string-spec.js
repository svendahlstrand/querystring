describe('QueryString', function() {
  var queryString;

  beforeEach(function() {
    queryString = new QueryString();
  });

  it('should know the raw query string', function() {
    var search = window.location.search;

    expect(queryString.raw).toEqual(search);
  });

  it('should be able to reload the document with a new query string', function() {
    // TODO
  });

  describe('present method', function() {
    it('should know when thers no query string', function() {
      queryString.raw = '';

      expect(queryString.present()).toBe(false);
    });

    it('should know when ther are a query string', function() {
      queryString.raw = '?foo=bar';

      expect(queryString.present()).toBe(true);
    });
  });

  describe('includes method', function() {
    it('should return false when theres no query string', function() {
      queryString.raw = '';

      expect(queryString.includes('foo')).toBe(false);
    });

    it('should return false when theres no parameter', function() {
      queryString.raw = '?bar=foo';

      expect(queryString.includes('foo')).toBe(false);
    });

    it('should return true when theres a parameter', function() {
      queryString.raw = '?foo=bar';

      expect(queryString.includes('foo')).toBe(true);
    });

    it('should work with multiple parameters', function() {
      queryString.raw = '?foo=bar&baz=fubar';

      expect(queryString.includes('baz')).toBe(true);
    });
  });

  describe('get method', function() {
    it('should return null if parameter does not exists', function() {
      queryString.raw = '';

      expect(queryString.get('foo')).toBe(null);
    });

    it('should return the value', function() {
      queryString.raw = '?foo=bar';

      expect(queryString.get('foo')).toEqual('bar');
    });
  });

  describe('set method', function() {
    it('should set a new query string when theres no one there', function() {
      queryString.raw = '';

      queryString.set('foo', 'bar');

      expect(queryString.raw).toEqual('?foo=bar');
    });

    it('should append if theres a query string present', function() {
      var originalQueryString = '?foo=bar';
      queryString.raw = originalQueryString;

      queryString.set('baz', 'fubar');

      expect(queryString.raw).toEqual(originalQueryString + '&baz=fubar');
    });

    it('should replace if theres a parameter with the same name', function() {
      queryString.raw = '?foo=bar';

      queryString.set('foo', 'baz');

      expect(queryString.raw).toEqual('?foo=baz');
    });
  });
});