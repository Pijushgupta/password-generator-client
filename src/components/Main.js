import { useState } from "react";
const Main = () => {
	/**
	 * reactive variables
	 */
	const [password, setPassword] = useState("");
	const [passlength, setPassLength] = useState(64);
	const [addSymbol, setAddSymbol] = useState(true);
	const [addNumber, setAddNumber] = useState(true);
	/**
	 * ends
	 */
	const charecterSet = {
		numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		symbols: [
			"`",
			"!",
			"@",
			"#",
			"$",
			"%",
			"^",
			"&",
			"*",
			"(",
			")",
			"_",
			"-",
			"=",
			"+",
		],
		charactersCap: [
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z",
		],
		charactersSma: [
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"U",
			"V",
			"W",
			"X",
			"Y",
			"Z",
		],
	};
	function createRandom() {
		/**
		 * resetting
		 */
		setPassword("");

		let selectionSet = ["charactersCap", "charactersSma"];
		if (addSymbol === true) {
			selectionSet.push("symbols");
		}
		if (addNumber === true) {
			selectionSet.push("numbers");
		}
		//console.log(charecterSet.numbers);
		var tempPass = "";
		for (let i = 0; i < passlength; i++) {
			let targetIndex = Math.floor(Math.random() * selectionSet.length);
			let setVariable = selectionSet[targetIndex];
			let subset = charecterSet[setVariable];
			let randomSubsetChar = subset[Math.floor(Math.random() * subset.length)];
			tempPass = tempPass + randomSubsetChar;
		}
		console.log(tempPass);
		setPassword(tempPass);
	}
	function abc(event) {
		setPassLength(event.target.value);
	}
	return (
		<div className="container max-w-2xl mx-auto">
			<div className="flex flex-row justify-center items-center h-screen">
				<div className="w-full flex flex-col px-5">
					<div className="w-full flex flex-row items-center justify-start">
						<input
							type="text"
							className="w-full border rounded px-3 py-2"
							value={password}
						/>
						<button
							onClick={createRandom}
							className="ml-3 bg-blue-800 text-white px-4 py-2 rounded "
						>
							Generate
						</button>
					</div>
					<div className="w-full flex flex-row items-center">
						<div className="flex flex-col w-1/3">
							<label htmlFor="passlength">Length {passlength}</label>
							<input
								id="passlength"
								min="8"
								max="64"
								step="8"
								type="range"
								value={passlength}
								onChange={abc}
							/>
						</div>
						<div></div>
						<div></div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
