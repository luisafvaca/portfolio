export function getQuotes () {
	return fetch('http://quotes.rest/qod.json', {
		method: 'get',
	}).then(function(response) {
		return response.json();
	})
}

export function getPictures (dt) {
  var arr = [],
      random;
  dt.content.map(function(a){
    if(a.type === 'image'){
      arr.push(a.url);
    }
  });
  random = arr[Math.floor(Math.random() * arr.length)];
  return random;
}
