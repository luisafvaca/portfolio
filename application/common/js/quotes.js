// var Readable = require('stream').Readable;
//
// const s = new Readable;
// console.log(Readable);
export function getQuotes () {
	return fetch('http://quotes.rest/qod.json', {
		method: 'get',
	}).then(function(response) {
		return response.json();
	})
}
