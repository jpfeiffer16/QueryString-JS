var queryStringAutoUpdate = document.getElementById('querystring-auto-update');
var queryStringKey = document.getElementById('querystring-key');
var queryStringValue = document.getElementById('querystring-value');
var queryStringButton = document.getElementById('querystring-add');

//Set values to querystring

queryStringButton.addEventListener('click', function(e) {
	QueryString.set(queryStringKey.value, queryStringValue.value);
});

queryStringAutoUpdate.addEventListener('click', function(e) {
	QueryString.autoUpdate = queryStringAutoUpdate.checked;
});