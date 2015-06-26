var queryStringKey = document.getElementById('querystring-key');

var queryStringValue = document.getElementById('querystring-value');

var queryStringButton = document.getElementById('querystring-add');

//Set values to querystring

queryStringButton.addEventListener('click', function(e) {
	QueryString[queryStringKey.value] = queryStringValue.value;
});