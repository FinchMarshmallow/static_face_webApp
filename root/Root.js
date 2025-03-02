
//          Button id = "myButton"         Event type click = GET /button-click
document.getElementById("myButton").addEventListener("click", async () =>
{
	const response = await fetch('/button-click');
	const text = await response.text();
	document.getElementById("response").innerText = text;
});