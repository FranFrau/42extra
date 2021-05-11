import UserCard from "@/components/UserCard";
import { useSession } from "next-auth/client";

function Home() {
	const [session] = useSession();

	return (
		<>
			<p>Welcome {session.user?.name}!</p>
			<UserCard id={session.user.login} />
		</>
	);
}

export default Home;
