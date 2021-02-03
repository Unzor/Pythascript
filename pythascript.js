 var pythascript={};
  var div=document.createElement('div');
  div.innerHTML='<form id="codeForm" autocomplete="off"  style="display:none;" action="https://try.w3schools.com/try_python.php?x=0.7203954732604945" method="post" accept-charset="utf-8" target="iframeResult"> <textarea type="text"  name="code" id="code" value="print(&quot;oh shiver me timbers shut up&quot;)"></textarea> </form>';
  document.body.appendChild(div);
 
  pythascript.loadUrl=function(url, element, css) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {                               
    if (this.readyState == 4 && this.status == 200) {
 var data=this.responseText;
      var inspu=document.getElementById('code');
      inspu.value=data;
  };
}
  xhttp.open("GET", url, true);
  xhttp.send();
setTimeout(function(){
 
  if (window.editor) {
    window.editor.save();
  }
  var text = document.getElementById('code').value;
  var ifr = document.createElement("iframe");
  ifr.setAttribute("frameborder", "0");
  ifr.setAttribute("id", "iframeResult");
  ifr.setAttribute("name", "iframeResult");  
  ifr.style=css;
  element.appendChild(ifr);
    var t=text;
    t=t.replace(/=/gi,"w3equalsign");
    t=t.replace(/\+/gi,"w3plussign");    
    var pos=t.search(/script/i)
    while (pos>0) {
      t=t.substring(0,pos) + "w3" + t.substr(pos,3) + "w3" + t.substr(pos+3,3) + "tag" + t.substr(pos+6);
	    pos=t.search(/script/i);
    }
    document.getElementById("code").value=t;
    document.getElementById("codeForm").action = "https://try.w3schools.com/try_python.php?x=" + Math.random();
    document.getElementById('codeForm').method = "post";
    document.getElementById('codeForm').acceptCharset = "utf-8";
    document.getElementById('codeForm').target = "iframeResult";
    document.getElementById("codeForm").submit();
  }, 1000);
  }
