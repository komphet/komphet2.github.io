var operator = ["+","-","*","/"];
function AddValueToTextField(val)
{
	document.getElementById('screen').innerHTML += val;
}
function ClearTextField()
{
	document.getElementById('screen').innerHTML = "";
}
function DelTexField() {
	var text = document.getElementById('screen').innerHTML;
	document.getElementById('screen').innerHTML = text.substr(0,text.length-1);
}
function Evaluate(){
	var text = document.getElementById('screen').innerHTML;
	var result = eval(text);
	document.getElementById('screen').innerHTML = result;
}