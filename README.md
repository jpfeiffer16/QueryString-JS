# QueryString-JS
JS library for manipulating the Query String

> Note: the syntax for the library has changed for `1.0` as a result of `Object.observe()` being deprecated because of its removal from the ES7 standard spec. To see the documentation for pre-1.0, please browse the tree at the commit before the 1.0 tag.

## 1.0
To Use the library include it in you page and then simply assign your values to the Query String by calling the `set` method on the  `QueryString` object:
```javascript
QueryString.set('Test', 'Test');
```
To get values use:
```javascript
QueryString.get('Test');
> "Test"
```
The QuerySting object updates the page Query String automatically by default. To change this set the `autoUpdate` property to false:
```javascript
QueryString.autoUpdate = false;
```
In addition, the QueryString object provides a few more useful features:
```javascript
QueryString.update();
```
-Updates the Query String to reflect the current state of the QueryString Object
```javascript
QueryString.getQueryString();
```
-Gets the text representation of the QueryString Object
```javascript
QueryString.getFullUrl();
```
-Gets the full Url with the QueryString Object's current state as the Query String
```javascript
QueryString.go();
```
-Refreshes the page with the current state of the QueryString Object

For example, in an old-school search page or such it is often desirable to simply post the form back to the server with an updated querystring that will match different results. This is often hard to do if there are other important values that we do not want to mess with in the querystring already. QueryStringJS makes this easy:

Suppose you have the url: `https://somesite.net/search?text=test&type=image`

And some typical jQuery with a little help from QueryStringJS:
```javascript
  $('#search-button').click(function(e) {
    var searchText = $('#search-text').val();
    //searchText is "cars"
    QueryString.set('text', searchText);
  });
```
Your url now looks like this: `https://somesite.net/search?text=cars&type=image`

Now you can post back to the server with:
```javascript
QueryString.go();
```