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
```javascript
QueryString.getQueryString();
```
```javascript
QueryString.getFullUrl();
```
```javascript
QueryString.go();
```
