

document.addEventListener('DOMContentLoaded', function() {
		var checkPageButton = document.getElementById('checkPage');
		checkPageButton.addEventListener('click', function() {



			chrome.tabs.getSelected(null, function(tab) {
				d = document;
				//console.log('coucou');
				//console.log(tab.querySelector(d.getElementById('xp').value));
				console.log(tab.id);

				var port = chrome.extension.connect({name: "Sample Communication"});
				todo = {
				"name":document.getElementById('name').value,
				"time":document.getElementById('time').value,
				"xp":document.getElementById('xp').value,
				"id":tab.id
				}
				port.postMessage(todo);
				port.onMessage.addListener(function(msg) {
					console.log("message recieved"+ msg);
					});


				//chrome.tabs.sendMessage(tab.id, {text: 'report_back'}, doStuffWithDom);


				/*		var f = d.createElement('form');
						f.action = 'http://gtmetrix.com/analyze.html?bm';
						f.method = 'post';
						var i = d.createElement('input');
						i.type = 'hidden';
						i.name = 'url';
						i.value = tab.url;
						f.appendChild(i);
						d.body.appendChild(f);
						f.submit();*/
			});
		}, false);
}, false);
