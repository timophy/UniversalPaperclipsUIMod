
var uimod_clipmakerRate = 0;
var uimod_avgSales = 0;
var uimod_unsoldClips = 0;

function uimod_ready() {
	displayMessage("<span style='color:green'>[Universal Paperclip UI Mod]</span> V2 by Timophy")
	displayMessage("<span style='color:green'>[Universal Paperclip UI Mod]</span> Loaded")

	//every 1 second
	setInterval(function() {
		//get current values
		uimod_clipmakerRate = parseInt(document.getElementById('clipmakerRate').innerHTML.replace(/,/g , ""));
		uimod_avgSales = parseInt(document.getElementById('avgSales').innerHTML.replace(/,/g , ""));
		uimod_unsoldClips = parseInt(document.getElementById('unsoldClips').innerHTML.replace(/,/g , ""));

		//highlight low inventory (less than 10x the rate that you make paperclips)
		if(uimod_unsoldClips < uimod_clipmakerRate * 10) {
			document.getElementById('unsoldClips').style.backgroundColor = "rgb(255, 210, 210)"; //light red
		} else {
			document.getElementById('unsoldClips').style.backgroundColor = "rgb(210, 255, 210)"; //light green
		}

		//highlight sales per sec
		if((uimod_avgSales / uimod_clipmakerRate) < 0.9) {
			document.getElementById('avgSales').style.backgroundColor = "rgb(210, 255, 210)"; //light green
			document.getElementById('avgSales').style.color = "rgb(0, 0, 0)";
		} else if((uimod_avgSales / uimod_clipmakerRate) <= 1.0) {
			document.getElementById('avgSales').style.backgroundColor = "rgb(220, 210, 255)"; //light blue
			document.getElementById('avgSales').style.color = "rgb(0, 0, 0)";
		} else if((uimod_avgSales / uimod_clipmakerRate) <= 1.3) {
			document.getElementById('avgSales').style.backgroundColor = "rgb(255, 210, 210)"; //light red
			document.getElementById('avgSales').style.color = "rgb(0, 0, 0)";
		} else {
			document.getElementById('avgSales').style.backgroundColor = "rgb(255, 30, 30)"; //dark red
			document.getElementById('avgSales').style.color = "rgb(255, 255, 255)";
		}

	}, 1000);
}

if (document.readyState !== 'loading') {
	uimod_ready()
} else {
	document.addEventListener('DOMContentLoaded', uimod_ready)
}
