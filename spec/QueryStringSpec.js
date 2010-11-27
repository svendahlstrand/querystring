describe('QueryString', function() {
  var queryString;

  beforeEach(function() {
    queryString = new QueryString();
  });

  it('should know the raw query string', function() {
    var search = window.location.search

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
      expect(queryString.includes('profiling')).toBe(false);
    });

    it('should return false when theres no parameter', function() {
      queryString.raw = '?foo=bar&baz=profiling';

      expect(queryString.includes('profiling')).toBe(false);
    });

    it('should return true when theres a parameter', function() {
      queryString.raw = '?profiling=true';

      expect(queryString.includes('profiling')).toBe(true);
    });

    it('should work with multiple parameters', function() {
      queryString.raw = '?foo=bar&profiling=true';

      expect(queryString.includes('profiling')).toBe(true);
    });
  });

  describe('set method', function() {
    it('should set a new query string when theres no one there', function() {
      queryString.raw = '';

      queryString.set('profiling', 'true');

      expect(queryString.raw).toEqual('?profiling=true');
    });

    it('should append if theres a query string present', function() {
      var originalQueryString = '?foo=bar';
      queryString.raw = originalQueryString;

      queryString.set('profiling', 'true');

      expect(queryString.raw).toEqual(originalQueryString + '&profiling=true');
    });
  });
});