import { useRouter } from "next/router";
import useAPI from "lib/useAPI";
import { getLayout } from "ui/layouts/UserLayout";
import { EyeOffIcon } from "@heroicons/react/outline";
import { User } from "types/User";
import CardGrid from "ui/CardGrid";
import Card from "ui/Card";
import { Grid, Spinner } from "@theme-ui/components";

function UserPartnerships() {
	const router = useRouter();
	const { login } = router.query;

	const {
		data: user,
		isLoading,
		isError,
	}: { data: User; isLoading: boolean; isError: any } = useAPI(
		`/v2/users/${login}`
	);

	if (isLoading)
		return (
			<Grid sx={{ placeItems: "center" }}>
				<Spinner />
			</Grid>
		);

	if (isError) return <>Error</>;

	if (!user.partnerships.length)
		return (
			<div className="flex flex-col items-center w-full mt-4">
				<EyeOffIcon className="w-32 h-32 mb-2" />
				<p>
					No partnerships for{" "}
					<span className="font-bold">{login}</span> yet.
				</p>
			</div>
		);

	return (
		<CardGrid>
			{user.partnerships.map((p) => (
				<Card key={p.id}>
					<div className="flex flex-col place-content-end">
						<p>{p.name}</p>
						<p>{p.slug}</p>
						<p>{p.difficulty}</p>
						<p>
							{p.partnerships_skills.map(
								(skill) => skill.skill_id + " "
							)}
						</p>
					</div>
				</Card>
			))}
		</CardGrid>
	);
}

UserPartnerships.getLayout = getLayout;

export default UserPartnerships;
