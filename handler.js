(function(){
	var selection = window.getSelection();
	var range = document.createRange();

	var links = [
	{
		old: "/Attorneys.aspx",
		new: "/Attorneys/"
	},
	{
		old: "/Catastrophic-Injury.aspx",
		new: "/Catastrophic-Injuries-Wrongful-Death/"
	},
	{
		old: "/Wrongful-Death.aspx",
		new: "/Catastrophic-Injuries-Wrongful-Death/Wrongful-Death.shtml"
	},
	{
		old: "/Birth-Injuries.aspx",
		new: "/Personal-Injury/Birth-Injuries.shtml"
	},
	{
		old: "/Workplace-Accidents.aspx",
		new: "/Personal-Injury/Workplace-Accidents.shtml"
	},
	{
		old: "/Personal-Injury.aspx",
		new: "/Personal-Injury/"
	},
	{
		old: "/Case-Evaluation.aspx",
		new: "/Contact.shtml"
	},
	{
		old: "/Contact-Us.aspx",
		new: "/Contact.shtml"
	},
	{
		old: "/Personal-Injury/Aviation-Accidents.aspx",
		new: "/Motor-Vehicle-Accidents/Aviation-Accidents.shtml"
	},
	{
		old: "/Personal-Injury/Bicycle-Accidents.aspx",
		new: "/Motor-Vehicle-Accidents/Bicycle-Accidents.shtml"
	},
	{
		old: "/Personal-Injury/Bus-Accidents.aspx",
		new: "/Motor-Vehicle-Accidents/Bus-Accidents.shtml"
	},
	{
		old: "/Personal-Injury/Catastrophic-Car-Accidents.aspx",
		new: "/Catastrophic-Injuries-Wrongful-Death/"
	},
	{
		old: "/Personal-Injury/Product-Liability/Defective-Auto-Design-Parts.aspx",
		new: "/Personal-Injury/Product-Liability/Defective-Auto-Design-Parts.shtml"
	},
	{
		old: "/Personal-Injury/Catastrophic-Car-Accidents/Drunk-Driving-Accidents.aspx",
		new: "/Motor-Vehicle-Accidents/Car-Accidents/Drunk-Driving-Accidents.shtml"
	},
	{
		old: "/Personal-Injury/Catastrophic-Car-Accidents/Hit-Run-Accidents.aspx",
		new: "/Motor-Vehicle-Accidents/Car-Accidents/Hit-Run-Accidents.shtml"
	},
	{
		old: "/Personal-Injury/Catastrophic-Car-Accidents/Rear-End-Collisions.aspx",
		new: ""
	},
	{
		old: "/Personal-Injury/Commercial-Vehicle-Accidents.aspx",
		new: "/Motor-Vehicle-Accidents/Car-Accidents/Rear-End-Collisions.shtml"
	},
	{
		old: "/Personal-Injury/Food-Lead-Poisoning.aspx",
		new: "/Personal-Injury/Food-Lead-Poisoning.shtml"
	},
	{
		old: "/Personal-Injury/Construction-Accidents.aspx",
		new: "/Personal-Injury/Construction-Accidents.shtml"
	},
	{
		old: "/Personal-Injury/Gas-Electric-Explosions.aspx",
		new: "/Personal-Injury/Gas-Electric-Explosions.shtml"
	},
	{
		old: "/Personal-Injury/Jones-Act-Seamen-Injuries.aspx",
		new: "/Personal-Injury/Jones-Act-Seamen-Injuries.shtml"
	},
	{
		old: "/Personal-Injury/Motorcycle-Accidents.aspx",
		new: "/Motor-Vehicle-Accidents/Motorcycle-Accidents.shtml"
	},
	{
		old: "/Personal-Injury/Pedestrian-Accidents.aspx",
		new: "/Motor-Vehicle-Accidents/Pedestrian-Accidents.shtml"
	},
	{
		old: "/Personal-Injury/Truck-Accidents.aspx",
		new: "/Motor-Vehicle-Accidents/Truck-Accidents/"
	},
	{
		old: "/Catastrophic-Injury/Brain-Injuries/Coma.aspx",
		new: "/Catastrophic-Injuries-Wrongful-Death/Brain-Injuries/Coma.shtml"
	},
	{
		old: "/Catastrophic-Injury/Brain-Injuries/Memory-Loss.aspx",
		new: "/Catastrophic-Injuries-Wrongful-Death/Brain-Injuries/Memory-Loss.shtml"
	},
	{
		old: "/Catastrophic-Injury/Brain-Injuries/Mild-TBI.aspx",
		new: "/Catastrophic-Injuries-Wrongful-Death/Brain-Injuries/Mild-TBI.shtml"
	},
	{
		old: "/Catastrophic-Injury/Brain-Injuries/Post-Concussion-Disorder.aspx",
		new: "/Catastrophic-Injuries-Wrongful-Death/Brain-Injuries/Post-Concussion-Disorder.shtml"
	},
	{
		old: "/Catastrophic-Injury/Burn-Injuries.aspx",
		new: "/Catastrophic-Injuries-Wrongful-Death/Burn-Injuries.shtml"
	},
	{
		old: "/Catastrophic-Injury/Neck-and-Back-Injuries.aspx",
		new: "/Catastrophic-Injuries-Wrongful-Death/Neck-Back-Injuries.shtml"
	},
	{
		old: "/Catastrophic-Injury/Spinal-Cord-Injuries.aspx",
		new: "/Catastrophic-Injuries-Wrongful-Death/Spinal-Cord-Injuries/"
	},
	{
		old: "/Personal-Injury/Jones-Act-Seamen-Injuries.aspx",
		new: "/Personal-Injury/Jones-Act-Seamen-Injuries.shtml"
	},
	{
		old: "/Personal-Injury/Public-Transportation-Accidents.aspx",
		new: "/Personal-Injury/Public-Transportation-Accidents.shtml"
	},
	{
		old: "/Personal-Injury/Swimming-Pool-Accidents.aspx",
		new: "/Personal-Injury/Premises-Liability/Swimming-Pool-Accidents.shtml"
	},
	{
		old: "/Personal-Injury/Premises-Liability.aspx",
		new: "/Personal-Injury/Premises-Liability/"
	},
	{
		old: "/Personal-Injury/Product-Liability.aspx",
		new: "/Personal-Injury/Product-Liability/"
	},
	{
		old: "/Personal-Injury/Recreational-Boating-Accidents.aspx",
		new: "/Motor-Vehicle-Accidents/Recreational-Boating-Accidents.shtml"
	},
	{
		old: "",
		new: ""
	}

	];


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
		if((event.key=="c" || event.key=="C") && event.shiftKey){
			cleanContent();
			var content = document.querySelector("#MainContent").innerHTML;
			// var cleanedContent = cleanContent(content);
			copyText(content);
		}
		if((event.key=="h" || event.key=="H") && event.shiftKey){
			document.querySelector("h1").style.textTransform = "none";
			var content = document.querySelector("h1").innerText;
			copyText(content);
		}
	});


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

	
	function cleanContent(){
		$("#MainContent h1").remove();
		$("#MainContent a").each(function(){
		for(var i =0; i< links.length; i++){
			if($(this).attr("href") == links[i].old ){
					console.log($(this).attr("href"));
					$(this).attr("href", links[i].new);
			    }
			}
		});
	}

})();