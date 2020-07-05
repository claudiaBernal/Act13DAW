//InnerHeight
function myFunction1() {
  var h =  window.innerHeight
  document.getElementById("hei").innerHTML = "Height: " + h;
}

//InnerWhidth
function myFunction2(){
	var w = window.InnerWhidth
	document.getElementById("wid").innerHTML = "Width: " + w;
}

//window open
function myFunction3() {
  window.open("https://www.google.com");
}

//window close
var ventana;
function openWin() {
  ventana = window.open("", "ventana", "width=200,height=100");
  ventana.document.write("<p>Soy una ventana ejemplo :D</p>");
}
function closeWin() {
  ventana.close();
}

//Move window
var ventanaM;

function openWin() {
  ventanaM=window.open("", "ventanaM", "width=200, height=100");
  ventanaM.document.write("<p>Soy una ventana ejemplo :D</p>");
}

function moveWin() {
  ventanaM.moveTo(500, 100);
  ventanaM.focus();
}

//window resizeTo
var ventanaRe;

function openWin() {
  ventanaRe = window.open("", "", "width=300, height=350");
  ventanaM.document.write("<p>Soy una ventana ejemplo :D</p>");
}

function resizeWin() {
  ventanaRe.resizeTo(250, 250);
  ventanaRe.focus();
}

//window alert
function myFunction4() {
  alert("Hola, soy una alerta ejemplo :D");
}

//window prompt
function myFunction5() {
  var persona = prompt("Ingresa tu nombre");
  if (persona != null) {
    document.getElementById("prom").innerHTML =
    "Hola " + persona + "! como te va?";
  }
}

//window confirm
function myFunction6() {
  confirm("presiona el boton");
}

//SCREEN
//screen height
function myFunction7() {
  var x = "Total Height: " + screen.height + "px";
  document.getElementById("sh").innerHTML = x;
}

//screen widht
function myFunction8() {
  var x = "Total Width: " + screen.width + "px";
  document.getElementById("sw").innerHTML = x;
}

//screen availWidth
function myFunction9() {
  var x = "Available Width: " + screen.availWidth + "px";
  document.getElementById("saw").innerHTML = x;
}

// screen availHeight
function myFunction10() {
  var x = "Available Height: " + screen.availHeight + "px";
  document.getElementById("sah").innerHTML = x;
}

//screen colorDepth	
function myFunction11() {
  var x = "Color Depth: " + screen.colorDepth + " bits por pixel";
  document.getElementById("Cd").innerHTML = x;
}

//screen pixelDepth
function myFunction12() {
  var x = "Color resolution: " + screen.pixelDepth + " bits por pixel";
  document.getElementById("pd").innerHTML = x;
}

//LOCATION
//href
function myFunction13() {
  var x = location.href;
  document.getElementById("lh").innerHTML = x;
}	

//hostname
document.getElementById("lho").innerHTML = 
"Page hostname is: " + window.location.hostname;

//protocol
function myFunction14() {
  var x = location.protocol;
  document.getElementById("lp").innerHTML = x;
}

//assign()
function myFunction15() {
  location.assign("https://www.google.com");
}

//reload()
location.reload();

//replace
function myFunction16() {
  location.replace("https://www.google.com")
}

//HISTORY
//length	
var x = history.length;
document.getElementById("hle").innerHTML = x;

//back
function goBack() {
  window.history.back();
}

//Forward
function goForward() {
  window.history.forward();
}

//go
function goBack1() {
  window.history.go(-2);
}

//NAVIGATOR
//appCodeName
function myFunction17() {
  var x = "navegador: " + navigator.appCodeName;
  document.getElementById("acn").innerHTML = x;
}

//appName
function myFunction18() {
  var x = "navegador: " + navigator.appName;
  document.getElementById("an").innerHTML = x;
}	

//appVersion	
function myFunction19() {
  var x = "Version info: " + navigator.appVersion;
  document.getElementById("ave").innerHTML = x;
}

//userAgent	
function myFunction20() {
  var x = "User-agent header sent: " + navigator.userAgent;
  document.getElementById("uag").innerHTML = x;
}

//language	
function myFunction21() {
  var x = "Lenguaje del navegador: " + navigator.language;
  document.getElementById("la").innerHTML = x;
}

//platform
function myFunction22() {
  var x = "Sitema operativo: " + navigator.platform;
  document.getElementById("plat").innerHTML = x;
}

//onLine
function myFunction23() {
  var x = "¿Está el navegador en línea? " + navigator.onLine;
  document.getElementById("onl").innerHTML = x;
}