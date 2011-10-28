$(init);

function init(){
	chrome.extension.onRequest.addListener(function(request, sender, sendResponse){
		console.log('func: ' + request.func);
		if(request.func == 'select'){
			var selector = request.selector;
			console.log("OmniJQueryLocator: selector: " + selector);
			$(".ojl_selected").removeClass("ojl_selected");
			var matched_count = $(selector).addClass("ojl_selected").size();
			console.log("OmniJQueryLocator: found " + matched_count);
			sendResponse({count: matched_count});
		}else if(request.func == 'clear'){
			$(".ojl_selected").removeClass("ojl_selected");
			sendResponse({});
		}
	});
	$('head').append($("<style> .ojl_selected { border-style: solid; border-color: #F00; border-width: 2px; } </style>"));
	console.log("OmniJQueryLocator installed");
}


