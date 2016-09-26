fetch('http://quotes.rest/qod.json', {
	method: 'get'
}).then(function(response) {
	console.log(response)
})
