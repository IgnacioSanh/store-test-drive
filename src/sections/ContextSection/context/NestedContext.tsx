import { useUserContext } from "./userContext";
export default function NestedContext() {
	const { name, clicks } = useUserContext();
	return (
		<>
			<strong>Name</strong>
			<p>{name}</p>
			<strong>Clicks</strong>
			<p>{clicks}</p>
		</>
	);
}
