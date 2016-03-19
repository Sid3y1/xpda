var todo="";
chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
    // If the received message has the expected format...
  if (msg.text === 'record') {
	        // Call the specified callback, passing
		        // the web-page's DOM content as argument
//			        sendResponse(document.all[0].outerHTML);
document.todo = msg.todo;

todo = msg.todo;
console.log("record");
console.log(todo);
console.log(document.querySelector(todo.xp));				    }
	

        if (msg.text === 'report_back') {
	        // Call the specified callback, passing
		        // the web-page's DOM content as argument
//			        sendResponse(document.all[0].outerHTML);
todo = msg.todo;
			        sendResponse({'dom':document.all[0].outerHTML,'todo':todo});
console.log(document.querySelector(todo.xp));				    
location.reload(true);
		//		document.location = document.location;

				    }
				    });
