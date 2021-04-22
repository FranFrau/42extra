import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/client";
import Avatar from "@components/Avatar";
import useSWR from "swr";

function User() {
	const router = useRouter();
	const { login } = router.query;
	const [session] = useSession();

	const { data: user, error } = useSWR([
		`https://api.intra.42.fr/v2/users/${login}`,
		session.accessToken,
	]);
	// const { data: coalition, error: error2 } = useSWR([
	// 	`https://api.intra.42.fr/v2/users/${login}/coalitions`,
	// 	session.accessToken,
	// ]);

	if (error) {
		if (error.status === 401) signIn("42");
		return <div>{error.status}</div>;
	}
	if (!user) return <div>loading...</div>;

	return (
		<div className="flex flex-col items-center">
			<div className="w-32 h-32 relative">
				<Avatar url={user.image_url} />
			</div>
			<h1 className="block font-semibold text-3xl mt-2 mb-1">
				{user.login}
			</h1>
			<p className="block text-lg mb-2">{user.usual_full_name}</p>
			<code className="block">email: {user.email}</code>
			<code className="block">phone: {user.phone}</code>
			<code className="block">
				staff: {user["staff?"] ? "true" : "false"}
			</code>
			<code className="block">
				correction points: {user.correction_point}
			</code>
			<code className="block">{user.wallet} ₳</code>
			<code className="block">
				pool: {user.pool_month} {user.pool_year}
			</code>
			<code className="block">campus[0]: {user?.campus[0]?.name}</code>
			<code className="block">
				location: {user.location || "unavailible"}
			</code>
			<code className="block">
				cursus[0]: {user.cursus_users[0]?.cursus.name}
			</code>
			<code className="block">
				cursus[1]: {user.cursus_users[1]?.cursus.name}
			</code>
			<code className="block">
				languages: {user.languages_users.length}
			</code>
			<code className="block">
				achievements: {user.achievements.length}
			</code>
			<code className="block">anonymize date: {user.anonymize_date}</code>
			{/* <code className="block">
				coalition: {coalition.data[0]?.attributes.name}
			</code> */}
		</div>
	);
}

export default User;
