chrome.omnibox.onInputChanged.addListener(function(text, suggest){
	chrome.tabs.getSelected(null, function(tab){
		chrome.tabs.sendRequest(tab.id, {'func': 'select', 'selector': text}, function(response){
			chrome.omnibox.setDefaultSuggestion({
				description: '<match>' + response.count + '</match> found'
			});
		});
	});
});

chrome.omnibox.onInputStarted.addListener(function(){
	chrome.omnibox.setDefaultSuggestion({
		description: '<match>0</match> found'
	});
});

chrome.omnibox.onInputCancelled.addListener(function(){
	chrome.omnibox.setDefaultSuggestion({
		description: '<match>0</match> found'
	});
});

chrome.omnibox.onInputEntered.addListener(function(text){
	chrome.tabs.getSelected(null, function(tab){
		chrome.tabs.sendRequest(tab.id, {'func': 'clear'}, function(response){
		});
	});
});
