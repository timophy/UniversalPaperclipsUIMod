# Universal Paperclips UI Mod
A UI Mod for the incremental game [Universal Paperclips](http://www.decisionproblem.com/paperclips/index2.html)

## How to use

Create the following JavaScript bookmarklet (create a new bookmark and past this as the URL):

	javascript: (function() { var a = document.createElement("script"); a.src = "https://timophy.github.io/scripts/upc_uimod.js"; document.getElementsByTagName("head")[0].appendChild(a) })();

Then click your bookmarklet after loading [the game](http://www.decisionproblem.com/paperclips/index2.html)

## Features

- Highlight "Unsold Inventory"
	- Red if lower than 10x the amount you make per second
	- Green otherwise
- Highlight "Avg. Clips Sold per sec"
	- Light Red / Dark Red if you are selling faster than you are making
	- Light Blue if selling is about the same as making
	- Light Green otherwise
