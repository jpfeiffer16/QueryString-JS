# QueryString-JS
JS library for manipulating the Query String
To Use the library include it in you page and then simply assign your values to the Query String by adding them as key-value pairs to the ```QueryString``` object:
```javascript
QueryString['Test'] = 'Test';
```
The QuerySting object updates the page Query String automatically by default. To change this set the autoUpdate property to false:
```javascript
QueryString.autoUpdate = false;
```
In addition, the QueryString object provide a few more useful features:
```javascript
QueryString.update();
```
-Updates the Query String to reflect the current state of the QueryString Object
```javascript
QueryString.getQueryString();
```
-Get's the text representation of the QueryString Object
```javascript
QueryString.getFullUrl();
```
-Gets the full Url with the QueryString Object's current state as the Query String
```javascript
QueryString.go();
```
-Refreshes the page with the current state of the Query String Object
