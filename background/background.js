(function () {
	const theBrowser = browser || chrome;
	theBrowser.browserAction.onClicked.addListener(function () {
		theBrowser.tabs.query({ currentWindow: true, active: true }, function (tabs) {
			document.getElementById('clipboarddrop').value = tabs[0].url;
			document.getElementById('clipboarddrop').select();
			document.execCommand('Copy');
		});
	});
})()