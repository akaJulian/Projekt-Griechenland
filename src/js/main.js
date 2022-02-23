// Bild Swap
let index=1;
	let max=7;
	window.onload=autoplay();
	autoplay();
		function autoplay()
		{
		setInterval(function()
		{
		if(index<max)
		{
		index++;
		}
		else
		{
		index=0;
		}
		 document.getElementById("realimg").src = index+".png";
	 },4000);
		}
