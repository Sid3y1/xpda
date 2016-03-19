// Regex-pattern to check URLs against. 
// It matches URLs like: http[s]://[...]stackoverflow.com[...]
var urlRegex = /^https?:\/\/(?:[^./?#]+\.)?stackoverflow\.com/;

// A function to use as callback

console.log("superman");
// When the browser-action button is clicked...
chrome.browserAction.onClicked.addListener(function (tab) {
		console.log("batman");
		// ...check the URL of the active tab against our pattern and...
		//if (urlRegex.test(tab.url)) {

		// ...if it matches, send a message specifying a callback too
		chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);
		//}
		});




var a ="";
//function doStuffWithDom(domContent,todo) {
function doStuffWithDom(obj) {
domContent = obj.dom;
todo = obj.todo;
	console.log('I receifzezekjhved the following DOM content:\n');
//	console.log(domContent);
	console.log(todo);
	parser = new DOMParser();
	doc = parser.parseFromString(domContent,"text/html")
		data = doc.querySelector(todo.xp).innerHTML;
	console.log(data);
	
	var req = new XMLHttpRequest();
	req.open('GET', 'http://souvenyr.com/xpda/set.php?name='+todo.name+'&data='+data, true);
	req.onreadystatechange = function (aEvt) {
		if (req.readyState == 4) {
			if(req.status == 200)
				console.log(req.responseText);
			else
				console.log("Erreur pendant le chargement de la page.\n");
		}
	};
	req.send(null);
}

chrome.extension.onConnect.addListener(function(port) {
  console.log("Connected .....");
    port.onMessage.addListener(function(msg) {
            console.log("message recieved"+ msg);
	    todo = msg;

	chrome.tabs.sendMessage(todo.id, {text: 'record','todo':todo}, doStuffWithDom);
				setInterval(doit,todo.time,todo);
	            port.postMessage("Hi Popup.js");
		      });
		      });

function doit(todo){
	chrome.tabs.sendMessage(todo.id, {text: 'report_back','todo':todo}, doStuffWithDom);
}
