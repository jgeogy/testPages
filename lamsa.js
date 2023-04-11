		


function getSessionId(){
	
	const params = new URLSearchParams(window.location.search)
	if(params.has('session')){
		
	let sessionID = params.get('session');
	let sessionTag = "{\"session_id\":".concat(sessionID,",");
	
	return sessionTag;
	}
	let sessionTag = "{\"session_id\":0,";
	return sessionTag;
	

	
}
function mobileType()
{
	var type = 0;
var isiphone  =  navigator.userAgent.match(/iPhone/i) != null;
	
	if(isAndroidMobile){
		type = 1;        
	}
	return type;
}	

function getHostname(){
	
	var hostName = window.location.href;
	let result = hostName.includes("staging");
	if(result){
		return true;
		
	}
return false;
}
function mobileType2()
{
	var type = 0;
	//var isiphone  =  navigator.userAgent.match(/iPhone/i) != null;
	    var isAndroidMobile=navigator.userAgent.match(/(android)/i) !=null;
	if(isAndroidMobile){
		type = 1;        
	}
	return type;
}		

function CALLC2FUNCTION(fName)
{
	if(c2_callFunction)
		{
			c2_callFunction(fName);
		}
}


function LOADCOMPLETE()
{
	//Do everything to be done on load complete here
	console.log("Load completed");
		if(mobileType2()==0){
		try {
   webkit.messageHandlers.callback.postMessage("LoadComplete");
   } catch(err) {
    console.log('Can not reach native code');
  }
		}
}

function nexttime()
{
	console.log("next load");
	return "0.3";
}

function MODESELECT(mode)
{
	if(mode == 1)
	{
		console.log("Autoplay selected");
	}
	else if(mode == 2)
	{
		console.log("Interactive mode selected");
	}
	else
	{
		console.log("No mode select");
	}
}

var currentPageNo = 0;

function SETCURRENTPAGE(pageNo)
{
	currentPageNo = pageNo;
	console.log(currentPageNo);
	if(currentPageNo == 3)
	{
		CALLC2FUNCTION("MUSICOFF");
	}
	else if(currentPageNo == 4)
	{
		CALLC2FUNCTION("MUSICON");
	}
}
	var StudentEvent;


function STORYEND()
{
	//Do everything for end of story here
	console.log("End of story");
	
		if(mobileType2()==0){
		console.log("ios");
		try {
    window.webkit.messageHandlers.callback.postMessage("EndOfStory");
  } catch(err) {
    console.log('Can not reach native code');
  }
}}

/////////////////////////////////////////////////////////////////Learning Events///////////////////////////////////////////////////////
var StudentEvent = ""
function UnitStart_Activity(StudentEvent)
{
console.log(StudentEvent);
sendEvent(StudentEvent);
}

function UnitStart_Round(StudentEvent)
{
console.log(StudentEvent);
sendEvent(StudentEvent);
}
function UnitEnd_Round(StudentEvent)
{
console.log(StudentEvent);
sendEvent(StudentEvent);}
function UnitEnd_Activity(StudentEvent)
{
console.log(StudentEvent);
sendEvent(StudentEvent);
}
	
	
function PlayerAction_Answer_Step(StudentEvent)
{
console.log(StudentEvent);
sendEvent(StudentEvent);
}
function PlayerAction_Answer_Attempt(StudentEvent)
{
	console.log(StudentEvent)

sendEvent(StudentEvent);}

function PlayerAction_Tap(StudentEvent)
{
	console.log(StudentEvent);
sendEvent(StudentEvent);
}

function Game_Status(StudentEvent)
{

console.log(StudentEvent);
sendEvent(StudentEvent);
}


function httpGet(theUrl)
{
		let sEvent = theUrl.replace("{",getSessionId());
		 sEvent = sEvent.replaceAll("&","");
	var newURL="https://report.lamsaworld.com/data_validation/?json=".concat(sEvent);
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET",newURL , true ); // false for synchronous request
 xmlHttp.send();
   return xmlHttp.responseText;
}

function sendEvent(studentEvent){
	
	if(getHostname()){
		httpGet(studentEvent);
	}
	if(mobileType2()==0){
		try {
    window.webkit.messageHandlers.callback.postMessage(studentEvent);
  } catch(err) {
    console.log('Can not reach native code');
  }
	
	
}else{
	try{
	    androidApp.makeToast(studentEvent, true);
	}catch(err){
		
		    console.log('Can not reach android code');

	}
}
	
	
}