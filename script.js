

document.addEventListener('DOMContentLoaded', function () {
 
chrome.tabs.query({},function(tabs){     
	
	document.getElementById('tabcount').innerHTML=tabs.length;
 });
});