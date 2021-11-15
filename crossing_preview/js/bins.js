var httpRequest;
var arcontent = new Array();
var c = 0;
		
function init()
{
  ChangeMe(1,6,1);
}//end function init()
		
function ChangeMe(start, end, id)
{
  Changer(id);
	//loadXML(start,end);
  loadXML(start,end);
	Bins();
}//end function ChangeMe()
	
function Changer(id)
{
  for(i=1;i<=6;i++)
	{
	  var obj = document.getElementById(i);
		if(i == id)
		{
		  obj.className = "active";
		}
		else
		{
		  obj.className = "";
		}			
	}	
}//end function Changer()

function loadXML(start,end)
{ 
  for(i=start;i<=end;i++)
	{
    var file = "xml/crossing_part" + i + ".xml";
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
  }
}//end function loadXML()

function parseXML(xmlDoc)
{
  alert('x');
  var cnt = whichBrs() == 'Internet Explorer' ? 1 : 0;
	var main = xmlDoc.childNodes[cnt];
  var out = "";
  for(t=0;t<main.childNodes.length;t++)
	{
	  var obj = main.childNodes[t];
	  var tag = obj.tagName;
		switch(tag)
		{
		  case "parttitle":
			  var chpttitle = obj.childNodes[0].nodeValue;				
			  break;
			case "part":
			  var part = obj.getAttribute("num");
			  break;
			case "abstract":
			  var abst = obj.childNodes[0].nodeValue;
			  break;
			case "videos":
			  var vid = obj.getAttribute("text") == "none" ? 0 : 1;
			  break;
			case "documents":
			  var docs = obj.childNodes.length > 0 ? 1 : 0;			
			  break;
			default:
			  break;				
		}		
	}	
 	out = "<table width='369' cellpadding='0' cellspacing='0' class='table'><tr><td><div class='dayBin'><img src='images/sample"+part+".jpg' class='binImage'><div class='binHeader'>"+chpttitle+"</div><br>"+abst+"<div style='margin-top: 7px;'></div><img src='images/arrow.gif' style='border: 0; vertical-align: middle;'>&nbsp;<a href='"+part+".html' target='_top'>View chapter "+part+"</a></div></td></tr></table>";
	arcontent.push(out);	
	return
}
  	
function Bins()
{
  var main = document.getElementById('bins');
	var cnt = main.rows.length;
	for(i=1;i<arcontent.length;i+=2)
	{
	  newrow = main.insertRow(0);
	  cell1 = newrow.insertCell(0);
		cell2 = newrow.insertCell(0);
	  cell1.innerHTML = arcontent[i-1];
	  cell2.innerHTML = arcontent[i];		
	}
}//end function Bins()

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
