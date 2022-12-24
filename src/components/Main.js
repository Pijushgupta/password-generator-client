import { useState } from "react";
const Main = () => {
	/**
	 * reactive variables
	 */
	const [password, setPassword] = useState("");
	const [passlength, setPassLength] = useState(16);
	const [addNumber, setAddNumber] = useState(true);
	const [addSymbol, setAddSymbol] = useState(true);
	const [confirm, setConfirm] = useState("");

	/**
	 * ends
	 */
	const charecterSet = {
		numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		symbols: [
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
		setConfirm("");

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

		setPassword(tempPass);
	}
	const chnageLength = (event) => {
		setPassLength(event.target.value);
	};
	const chnageNumber = () => {
		setAddNumber(!addNumber);
	};
	const chnageSymbol = () => {
		setAddSymbol(!addSymbol);
	};
	const copyToClipBoard = () => {
		if (password != "") {
			navigator.clipboard.writeText(password);
			setConfirm("Copied!");
		}
	};

	return (
		<div className="container max-w-2xl mx-auto">
			<div className="flex flex-row justify-center items-center h-screen">
				<div className="w-full flex flex-col px-5">
					<div className="w-full flex flex-row items-center justify-between mb-10">
						<h1 className="text-2xl font-medium">Password Generator</h1>
						{(() => {
							if (confirm != "") {
								return (
									<span className="rounded-full px-4 py-1 bg-gray-800 text-white">
										{confirm}
									</span>
								);
							}
						})()}
					</div>
					<div className="w-full flex flex-row items-center justify-start">
						<div className="w-full flex flex-row">
							<input
								type="text"
								className="w-full border border-r-0 rounded-l px-3 py-2"
								value={password}
								readOnly
							/>
							<button
								onClick={copyToClipBoard}
								className="px-2 border border-l-0 rounded-r bg-gray-100"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184"
									/>
								</svg>
							</button>
						</div>

						<button
							onClick={createRandom}
							className="ml-3 bg-blue-800 text-white px-4 py-2 rounded "
						>
							Generate
						</button>
					</div>
					<div className="w-full flex flex-row items-center bg-gray-100 mt-2 py-4 rounded">
						<div className="flex flex-col w-1/3 py-2 px-4">
							<label htmlFor="passlength" className="mb-2 text-sm">
								Password length {passlength}{" "}
							</label>
							<input
								id="passlength"
								min="8"
								max="64"
								step="1"
								type="range"
								value={passlength}
								onChange={chnageLength}
								className="cursor-pointer"
							/>
						</div>
						<div className="flex flex-col w-1/3 items-start py-2 px-4">
							<label htmlFor="passNumber" className="mb-2 text-sm">
								Include numbers
							</label>
							<input
								id="passNumber"
								type="checkbox"
								checked={addNumber}
								onChange={chnageNumber}
								className="w-4 h-4 cursor-pointer"
							/>
						</div>
						<div className="flex flex-col w-1/3 items-start py-2 px-4">
							<label htmlFor="passSymbol" className="mb-2 text-sm">
								Include symbols
							</label>
							<input
								id="passSymbol"
								type="checkbox"
								checked={addSymbol}
								onChange={chnageSymbol}
								className="w-4 h-4 cursor-pointer"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Main;
