describe('QueryString', function() {
  var queryString;

  beforeEach(function() {
    queryString = new QueryString();
  });

  it('should know the raw query string', function() {
    var search = window.location.search

    expect(queryString.raw).toEqual(search);
  });

  describe('exists method', function() {
    it('should know when thers no query string', function() {
      queryString.raw = '';

      expect(queryString.exists()).toBe(false);
    });

    it('should know when ther are a query string', function() {
      queryString.raw = '?foo=bar';

      expect(queryString.exists()).toBe(true);
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
});