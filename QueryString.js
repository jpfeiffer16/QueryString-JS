(function () {
  function QueryString(query) {
    var self = this;
    var queryObject = {};
    //Private Methods
    var updateQueryObject = function () {
      var queryString = '';
      if (query) {
        queryString = query;
      } else {
        queryString = window.location.search.substring(1);
      }

      var params = {}, queries, temp, i, l;

      queries = queryString.split('&');

      for (i = 0, l = queries.length; i < l; i++) {
        if (queries[i].split('=')[0] != '' && queries[i].split('=')[1] != '') {
          temp = queries[i].split('=');
          queryObject[temp[0]] = temp[1];
        }
      }
    };
    var assembleQueryString = function (queryObject) {
      var qString = '?';
      for (var key in queryObject) {
        if ((typeof (queryObject[key]) != 'function') && (typeof (queryObject[key]) != 'boolean')) {
          qString += key + '=' + queryObject[key] + '&';
        }
      };
      return qString.slice(0, qString.length - 1);
    };
    
    //Public Properties
    this.autoUpdate = true;
    
    //Public Methods
    this.get = function (name) {
      if (typeof name == 'string')
        return queryObject[name];
      else
        console.error('Get method requires a string forthe  name argument');
    };
    
    this.set = function (name, value) {
      if (typeof name == 'string' && typeof value == 'string')
        queryObject[name] = value;
        if (self.autoUpdate) self.update();
      else
        console.error('Set method requires a string for both name and value arguments');
    };
    
    this.getQueryString = function () {
      return assembleQueryString(queryObject);
    };

    this.getFullUrl = function () {
      var newUrl = location.protocol + '//' + location.host +
        location.pathname + assembleQueryString(queryObject);
      return newUrl;
    };

    this.update = function() {
      history.replaceState('', '', self.getFullUrl());
    };

    this.go = function () {
      location.href = getFullUrl();
    };
    
    //Initial Setup
    updateQueryObject();
  }
  if (module) {
    module.exports = QueryString;
  } else {
    window.QueryString = new QueryString();
  }
})();
