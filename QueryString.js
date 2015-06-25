var QueryString = function () {
    var getQueryObject = function () {
        var queryString = window.location.search.substring(1);

        var params = {}, queries, temp, i, l;

        queries = queryString.split("&");

        for (i = 0, l = queries.length; i < l; i++) {
            if (queries[i].split('=')[0] != "") {
                temp = queries[i].split('=');
                params[temp[0]] = temp[1];
            }
        }

        return params;
    }

    var assembleQueryString = function (queryObject) {
        var qString = '?';
        for (var key in queryObject) {
            if (typeof (queryObject[key]) != 'function') {
                qString += key + '=' + queryObject[key] + '&';
            }
        };
        return qString.slice(0, qString.length - 1);
    }

    //Public Methods
    var getQueryString = function () {
        return assembleQueryString(queryObject);
    }

    var getFullUrl = function () {
        var newUrl = location.protocol + '//' + location.host + location.pathname + assembleQueryString(queryObject);
        return newUrl;
    }

    var go = function () {
        location.href = getFullUrl();
    }


    var queryString = assembleQueryString(getQueryString());

    var queryObject = getQueryObject();

    queryObject.getQueryString = getQueryString;
    queryObject.getFullUrl = getFullUrl;
    queryObject.go = go;

    return queryObject;
};