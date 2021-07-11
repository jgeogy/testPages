		

function mobileType()
{
var type = 0;
var isiphone  =  navigator.userAgent.match(/iPhone/i) != null;
	
	if(isAndroidMobile)
	{
		type = 1;        
	}
	return type;
}	

function mobileType2()
{
	var type = 0;
	//var isiphone  =  navigator.userAgent.match(/iPhone/i) != null;
	var isAndroidMobile=navigator.userAgent.match(/(android)/i) !=null;
	if(isAndroidMobile)
	{
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
	
		if(mobileType2()==0)
		{
		try 
		{
         webkit.messageHandlers.callback.postMessage("LoadComplete");
        } 
        catch(err) 
		{
         console.log('Can not reach native code');
        }
		}
}

var ButtonName;

function ButtonPressed(btname)
{
	switch(btname)
	{
		case 1:ButtonName="Next";
		break;
		case 2:ButtonName="Previous";
		break;
		case 3:ButtonName="Home";
		break;
		case 4:ButtonName="VoMute";
		break;
		case 5:ButtonName="VoUnmute";
		break;
		case 6:ButtonName="MusicMute";
		break;
		case 7:ButtonName="MusicUnmute";
		break;
		case 8:ButtonName="Thumbnails";
		break;
		case 9:ButtonName="OpenText";
		break;
		case 10:ButtonName="CloseText";
		break;
		case 11:ButtonName="OpenMenu";
		break;
		case 12:ButtonName="CloseMenu";
		break;
		case 13:ButtonName="RestartVO";
		break;
	}
	//Do everything to be done on load complete here
	ButtonName="ButtonPressed:"+ButtonName;
	console.log(ButtonName);
		if(mobileType2()==0)
		{
		try 
		{
         webkit.messageHandlers.callback.postMessage(ButtonName);
        } 
        catch(err) 
        {
         console.log('Can not reach native code');
        }
		}
}



function nexttime()
{
	//console.log("next load");
	return "0.3";
}

function MODESELECT(mode)
{
	if(mobileType2()==0)
	{
	try 
	{
	if(mode == 1)
	{
     window.webkit.messageHandlers.callback.postMessage("Autoplay selected");
	}
	else if(mode == 2)
	{
     window.webkit.messageHandlers.callback.postMessage("Interactive mode selected");
	}

    } 
    catch(err) 
	{
     console.log('Can not reach native code');
	}
	}
	else
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
}}

var currentPageNo = 0;

function SETCURRENTPAGE(pageNo)
{
	currentPageNo = pageNo;
	console.log(currentPageNo);
	if(mobileType2()==0)
	{
		currentPageNo="currentPageNo: "+currentPageNo
	try 
	{
     webkit.messageHandlers.callback.postMessage(currentPageNo);
    }
    catch(err) 
	{
    console.log('Can not reach native code');
	}
	}
	if(currentPageNo >= 3)
	{
	if(mobileType2()==0)
	{
	try 
	{		
    window.webkit.messageHandlers.callback.postMessage("SamplePopUp");
    } 
    catch(err) 
	{
    }
    }
	
    }
}

function STORYEND()
{
	//Do everything for end of story here
	console.log("End of story");
		
	 if(mobileType2()==0)
	 {
	  console.log("ios");
	 try 
	 {
       window.webkit.messageHandlers.callback.postMessage("EndOfStory");
     } 
	 catch(err) 
	 {
       console.log('Can not reach native code');
     }
     }
}



	
	
