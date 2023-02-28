import ContextUsage from "./context/ContextUsage";
import UserProvider from "./context/userContext";

export default function ContextSection() {
	return (
		<div className="column experiment-column">
			<h2>Context API</h2>
			<UserProvider>
				<ContextUsage />
			</UserProvider>
		</div>
	);
}
