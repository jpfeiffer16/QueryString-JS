var QueryString = (function() {
  var queryObject = function() {
    //Private Methods
    var updateQueryObject = function (queryObject) {
      var queryString = window.location.search.substring(1);

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

    //Public Methods
    var autoUpdate = true;

    var getQueryString = function () {
      return assembleQueryString(queryObject);
    };

    var getFullUrl = function () {
      var newUrl = location.protocol + '//' + location.host + location.pathname + assembleQueryString(queryObject);
      return newUrl;
    };

    var update = function() {
      history.replaceState('', '', getFullUrl());
    };

    var go = function () {
      location.href = getFullUrl();
    };

    return {
      updateQueryObject: updateQueryObject,
        autoUpdate,
        getQueryString: getQueryString,
        getFullUrl: getFullUrl,
        update: update,
        go: go
    };
  }();

  //Init the queryObject with the current querystring:
  queryObject.updateQueryObject(queryObject);
  delete queryObject.updateQueryObject;

  if (Object.observe) {
    //If the browser supports Object.observe, use that method
    Object.observe(queryObject, function() {
      if (queryObject.autoUpdate) {
        queryObject.update();
      }
    });
  } else {
    //If not set a timer to auto-update
    setInterval(function() {
      if (queryObject.autoUpdate) {
        queryObject.update();
      }
    }, 400);
  }

  return queryObject;
}());
