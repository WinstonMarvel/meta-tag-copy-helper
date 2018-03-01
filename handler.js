var selection = window.getSelection();
var range = document.createRange();

window.onload = function(){
	document.addEventListener("keypress", (event)=>{
	var key = event.key;
	if((event.key=="t" || event.key=="T") && event.shiftKey){
		var titleTag = document.querySelector("title").innerText;
		copyText(titleTag);
	}
	if((event.key=="d" || event.key=="D") && event.shiftKey){
		var description = document.querySelector("meta[name='description']").getAttribute("content");;
		copyText(description);
	}
	if((event.key=="k" || event.key=="K") && event.shiftKey){
		var keywords = document.querySelector("meta[name='keywords']").getAttribute("content");;
		copyText(keywords);
	}
});



}


function copyText(string){
	selection.removeAllRanges();
	var tempElement = document.createElement("span");
	document.body.appendChild(tempElement);
	tempElement.innerText = string;
	range.selectNodeContents(tempElement);
	selection.addRange(range);
	document.execCommand("copy");
	selection.removeAllRanges();
}


