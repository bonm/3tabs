chrome.tabs.onCreated.addListener(function () {
 
chrome.tabs.query({},function(tabs){     
	if(tabs.length>3){

var opt = {type:"basic",title:"only 3 tabs" ,message:"For best work,use only 3 tabs !", iconUrl: "img/icon-48.png"}
		chrome.notifications.create("0", opt,function(){
			chrome.tabs.remove(tabs[tabs.length-1].id, function(){});
		});
	}
	
 });
})
