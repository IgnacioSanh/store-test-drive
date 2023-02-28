import {
	Dispatch,
	createContext,
	PropsWithChildren,
	useContext,
	useState,
} from "react";

interface IUserContext {
	name: string;
	clicks: number;
	setName: Dispatch<React.SetStateAction<string>>;
	setClicks: Dispatch<React.SetStateAction<number>>;
}

const UserContext = createContext<IUserContext | null>(null);

export default function UserProvider({ children }: PropsWithChildren) {
	const [name, setName] = useState("");
	const [clicks, setClicks] = useState(0);

	return (
		<UserContext.Provider value={{ name, setName, clicks, setClicks }}>
			{children}
		</UserContext.Provider>
	);
}

export function useUserContext() {
	const context = useContext(UserContext);
	if (context === null) {
		throw Error("User context value is null!");
	}
	return context;
}
