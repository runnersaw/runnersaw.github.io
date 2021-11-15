var httpRequest;
var flSteps = 60;
var flTime = 2000;
var flHeight = 525;
var thisxml = '';

function loadXML(part)
{
  var file = "xml/crossing_part" + part + ".xml";
	thisxml = "crossing_part" + part;
  if (typeof XMLHttpRequest != 'undefined') 
  {
    httpRequest = new XMLHttpRequest();
    httpRequest.open('GET', file, true);
    httpRequest.onreadystatechange = function () 
    {
      if (httpRequest.readyState == 4 && httpRequest.status == 200) 
	  {
      var xmlDocument = httpRequest.responseXML;
	    parseXML(xmlDocument);
      }
    }
    httpRequest.send(null);
  }
}//end function loadXML()

function parseXML(xmlDoc)
{
  out = '';
  var cnt = whichBrs() == 'Internet Explorer' ? 1 : 0;
  var main = xmlDoc.childNodes[cnt];
  for(i=0;i<main.childNodes.length;i++)
  {
    var obj = main.childNodes[i];
	  switch(obj.tagName)
	  {
	    case 'story':
	      var story = obj.childNodes[0].nodeValue;		
		    break;
      case 'parttitle':
	      var chpttitle = obj.childNodes[0].nodeValue;	  
	      chpthtml = '<div style="font-size: 14pt; font-weight: bold; color: #473B2D;">THE CROSSING: <span id="title" style="font-weight: normal; color: 8B6F57;">'+chpttitle+'</span></div>';
		    break;
	    case 'part':
	      chptnum = obj.getAttribute('num');
		    chpt = '<div id="chapternum" style="font-size: 10pt; font-weight: bold; color: 8B6F57;">CHAPTER '+ chptnum +' OF 33</div><br><div style="font-size: 10pt; font-weight: bold; color: 473B2D;">By <a href="mailto:vaughank@rockymountainnews.com" style="color: 473B2D; text-decoration: underline;">Kevin Vaughan</a><br>Photos by <a href="mailto:schneiderc@rockymountainnews.com" style="color: 473B2D; text-decoration: underline;">Chris Schneider</a></div>';
		    break;
	    case 'photo':
	      photopath = obj.getAttribute('url');
		    break;		
	    case 'photocredit':
	      photocredit = obj.getAttribute('credit');
	      break;
	    case 'caption':
	      caption = obj.childNodes[0].nodeValue;
	      break;		
	    case 'sources':
	      sources = obj.childNodes[0].getAttribute('url');
	      break;		
	    case 'inprint':
	      inprint = obj.childNodes[0].getAttribute('url');
		    break;		
	    case 'videos':
	      vidhtml = "";
	      if(obj.getAttribute('text') != 'none')
		    {
		      vidpath = obj.getAttribute('still');
		      vidtext = obj.childNodes[2].childNodes[0].nodeValue;		
		      vidhtml += '<div class="railBin" style="height: 130px;"><h3>Video</h3><a href="#" onclick="loadflash(1,1,\'vid\');"><img src="videos/'+vidpath+'" style="float: left; border: 1px solid #000; margin: 5px 10px 0 10px;" title="'+vidtext+'"></a><p style="color: #DCD4B3;">'+vidtext+'</p><img src="images/arrow.gif" /> <a href="#" onclick="loadflash(1,1,\'vid\');">Watch video</a></div>';
		    }
	      break;
	    case 'documents':
	      if(obj.childNodes.length > 0)
		    {
		      dlinks = '<h4>Chapter '+chptnum+' documents</h4><div style="margin-bottom: 8px;"></div><ul>';
		      for(z=0;z<obj.childNodes.length;z++)
		      {
		        dlinks += '<li><a href="'+obj.childNodes[z].getAttribute('url')+'" target="_blank">'+obj.childNodes[z].childNodes[0].nodeValue+'</a></li>';
		      }
		      dlinks += '</ul>';
		    }
		    else
		    {
		      dlinks = '';
		    }
	      break;
	    case 'related':
	      if(obj.childNodes.length > 0)
		    {
		      rlinks = '<h4>Related links</h4><div style="margin-bottom: 8px;"></div><ul>';
		      for(z=0;z<obj.childNodes.length;z++)
		      {
		        rlinks += '<li><a href="'+obj.childNodes[z].getAttribute('url')+'" target="_blank">'+obj.childNodes[z].childNodes[0].nodeValue+'</a></li>';
		      }
		      rlinks += '</ul>';
		    }
		    else
		    {
		      rlinks = '';
		    }
	      break;				
	    default:
	      break;
	  } 	
  }
  
  rightrail = '<div class="rightRail">'+'<div class="photoBucket"><img src="'+photopath+'" border="1" width="350"><br>'+photocredit+'<div class="photoBucketCaption">'+caption+'<ul><li><a href="#" onclick="loadflash(1,1,\'ss\');" style="color: 000000; font-size: 12px; font-weight: bold;">More chapter '+chptnum+' photos</a></li></ul></div></div><div class="railBin"><h3>Crossing chapters</h3>&nbsp;&nbsp;&nbsp;&nbsp;<span style="color: #fff; font-weight: bold;">Jump to:&nbsp;&nbsp;<select id="jumper" onchange="if(this.value != \'\')loadXML(this.value);"><option value=""></option><option id="jump_1" value="xml/crossing_part1.xml">Chapter 1: ECHOES</option><option id="jump_2" value="2">Chapter 2: SIX DEGREES</option><option id="jump_3" value="3">Chapter 3: A TYPICAL MORNING</option></select></span></div><div class="railBin"><h3>Tools</h3><h4>Chapter '+chptnum+' menu</h4><table class="table2"><tr class="tr2"><td class="td2"><ul><li><a href="index.cfm">Series index</a></li><li><a href="#" onclick="loadflash(1,1,\'x\');">Chapter index</a></li></ul></td><td class="td2"><ul><li><a href="http://blogs.rockymountainnews.com/denver/rockytalklive/archives/2007/02/test_1.html" target="_blank">Discuss</a></li><li><a href="'+sources+'" target="_blank">Sources</a></li></ul></td></tr></table><h4>Story tools</h4><table class="table2"><tr class="tr2"><td class="td2"><ul><li><a href="#" target="print" onclick="alert(\'print()\');">Print this</a></li><li><a href="#" target="sendto" onclick="alert(\'sendto()\');">E-mail this</a></li></ul></td><td class="td2"><ul><li><a href="#contact">Contact us</a></li><li><a href="'+inprint+'" target="_blank">Story in print</a> (.pdf)</li></ul></td></tr></table></div>'+vidhtml;

  rel = '';
  if(dlinks != '' && rlinks == '')
  {
    rel += '<a name="docs"></a><div class="railBin"><h3>Documents</h3>' + dlinks + '</div>';
  }
  else if(rlinks != '' && dlinks == '')
  {
    rel += '<a name="docs"></a><div class="railBin"><h3>Related links</h3>' + rlinks + '</div>';
  }
  else if(rlinks != '' && dlinks != '')
  {
    rel += '<a name="docs"></a><div class="railBin"><h3>Documents & related links</h3>' + dlinks + rlinks + '</div>';
  }
  else
  {
    rel = '';
  }

  rightrail += rel + '</div>';

  out += rightrail + chpthtml + chpt + story;
  load();
}//end function parseXML()

function load()
{
  obj = document.getElementById("content");
  obj.innerHTML = out;
}//end function load()

function whichBrs() 
{
  var agt=navigator.userAgent.toLowerCase();
  if (agt.indexOf("opera") != -1) return 'Opera';
  if (agt.indexOf("staroffice") != -1) return 'Star Office';
  if (agt.indexOf("webtv") != -1) return 'WebTV';
  if (agt.indexOf("beonex") != -1) return 'Beonex';
  if (agt.indexOf("chimera") != -1) return 'Chimera';
  if (agt.indexOf("netpositive") != -1) return 'NetPositive';
  if (agt.indexOf("phoenix") != -1) return 'Phoenix';
  if (agt.indexOf("firefox") != -1) return 'Firefox';
  if (agt.indexOf("safari") != -1) return 'Safari';
  if (agt.indexOf("skipstone") != -1) return 'SkipStone';
  if (agt.indexOf("msie") != -1) return 'Internet Explorer';
  if (agt.indexOf("netscape") != -1) return 'Netscape';
  if (agt.indexOf("mozilla/5.0") != -1) return 'Mozilla';
  if (agt.indexOf('\/') != -1) 
  {
    if (agt.substr(0,agt.indexOf('\/')) != 'mozilla') 
	{
	  return navigator.userAgent.substr(0,agt.indexOf('\/'));
	}
    else return 'Netscape';
  } 
  else if (agt.indexOf(' ') != -1)return navigator.userAgent.substr(0,agt.indexOf(' '));
  else return navigator.userAgent;
}//end function whichbrs()

function LoadObject (action)
{
  var so = new SWFObject("flashplayers/shell2.swf", "sotester", "750", "525", "8", "#000000", "true"); 
  so.addParam("wmode", "transparent"); 
	so.addParam("allowScriptAccess", "always");
	so.addVariable("xmlname", thisxml);
	so.addVariable("main",0);
	so.addVariable("override","");
	so.addVariable("intro",1);
	if(action == "ss" || action == "vid")
  {
	  so.addVariable("dothis",action);
	}
	else
	{
		so.addVariable("dothis","x");
	}
	so.write("flashcontent");
}//end function LoadObject() 
		
function loadflash (n, dir, action)
{ 	
  var x = document.getElementById('flashcontent');	
	if (n==1)
	{ 
	  if (action == 'unload')
    {
		  if (x.style.height==0){return}
		  x.innerHTML = "";
		  dir = -1;
		}
		else
		{
		  if (x.style.height==flHeight+'px'){ LoadObject(action); return}
		  x.style.display='block';
		  x.innerHTML = "";
		  dir = 1;
		}
	}
	if (dir==-1 && n==flSteps)
	{
	  x.style.display='none'
	}
	else
	{
	  x.style.height = flHeight/flSteps*(dir==1?n:(flSteps-n)); 
	}
	if (n<flSteps)
	{
	  setTimeout ('loadflash('+(n-0+1)+', '+dir+',"'+action+'")', flTime/flSteps);
	  return;
	}
	else if (dir==1)
 	{ 
	  LoadObject(action);
	} 
}//end function loadflash()
