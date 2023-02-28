import { ContextSection, ReduxSection } from "./sections";

function App() {
	return (
		<div className="column">
			<h1>Store Usage</h1>
			<div className="row">
				<ContextSection />
				<ReduxSection />
				<div className="column experiment-column">
					<h2>MobX</h2>
				</div>
				<div className="column experiment-column">
					<h2>XState</h2>
				</div>
			</div>
		</div>
	);
}

export default App;
