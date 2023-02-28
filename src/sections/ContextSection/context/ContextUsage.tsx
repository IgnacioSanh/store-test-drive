import { useUserContext } from "./userContext";
import NestedContext from "./NestedContext";
import { useRef } from "react";

export default function ContextUsage() {
	const { setClicks, setName } = useUserContext();
	const inputRef = useRef<HTMLInputElement>(null);

	function resetAll() {
		setClicks(0);
		setName("");
		inputRef.current!.value = "";
	}

	return (
		<>
			<h3>Sync operations</h3>
			<button onClick={resetAll}>Reset All</button>
			<input
				type="text"
				ref={inputRef}
				placeholder="Enter name"
				onChange={(e) => setName(e.target.value)}
			/>
			<button onClick={() => setClicks((clicks) => clicks + 1)}>
				Add 1 click
			</button>
			<NestedContext />
			<div className="line" />
		</>
	);
}
