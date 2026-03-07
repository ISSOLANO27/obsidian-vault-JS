1. Match values from different arrays within a single variable. 

	For example, the game data could be placed within a single multidimensional array as follows:
	```js
	let games = [
				["2024-7-28", "Bettendorf", "h", 2, 1, 9, "W"], 
				["2024-7-28", "Bettendorf", "a", 4, 2, 9, "W"], 
				["2024-8-1", "Marrion", "h", 2, 1, 9, "W"], 
				["2024-8-2", "Clinton", "h", 2, 0, 9, "W"]
				["2024-8-3", "Clinton", "h", 1, 5, 6, "L"]
				];
	```
	##### Information about the second game..
	`games[1][0]`

	##### Information about the Opponent
	`games[1][1]`
	
	##### Information about the Location
	`games[1][2]`

	> **KEEP PRACTICING**:
	> You might find it easier to place your data within a single MA rather than spreading your data across different arrays.
	
	---
	Back: [[Multi-Dimensional Arrays]]